import React, {
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {AppState, Platform} from 'react-native';
import {
  check,
  openSettings,
  PERMISSIONS,
  PermissionStatus,
  request,
} from 'react-native-permissions';

export interface PermissionsState {
  locationStatus: PermissionStatus;
}

export const initialPermissionsState: PermissionsState = {
  locationStatus: 'unavailable',
};

export type PermissionContextProps = {
  permissions: PermissionsState;
  askLocationPermission: () => void;
  checkLocationPermission: () => void;
};

export const PermissionsContext = createContext({} as PermissionContextProps);

export const usePermissionsContext = () => React.useContext(PermissionsContext);

export const PermissionsProvider: React.FC = ({children}) => {
  const isMounted = useRef(true);
  const [permissions, setPermissions] = useState(initialPermissionsState);

  const askLocationPermission = useCallback(async () => {
    if (!isMounted.current) return;

    let permissionStatus: PermissionStatus = 'unavailable';

    if (Platform.OS === 'ios') {
      permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    }

    if (Platform.OS === 'android') {
      permissionStatus = await request(
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
    }

    if (permissionStatus === 'blocked') {
      openSettings();
    }

    setPermissions({
      ...permissions,
      locationStatus: permissionStatus,
    });
  }, [permissions]);

  const checkLocationPermission = useCallback(async () => {
    let permissionStatus: PermissionStatus = 'unavailable';

    if (Platform.OS === 'ios') {
      permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    }

    if (Platform.OS === 'android') {
      permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }

    if (!isMounted.current) return;
    setPermissions({...permissions, locationStatus: permissionStatus});
  }, [permissions]);

  useEffect(() => {
    AppState.addEventListener('change', state => {
      if (state !== 'active') return;

      checkLocationPermission();
    });

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <PermissionsContext.Provider
      value={{
        permissions,
        askLocationPermission,
        checkLocationPermission,
      }}>
      {children}
    </PermissionsContext.Provider>
  );
};
