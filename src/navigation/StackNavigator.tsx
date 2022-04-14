import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {usePermissionsContext} from '../context/PermissionsContext';
import LoadingScreen from '../screens/LoadingScreen';
import MapScreen from '../screens/MapScreen';
import PermissionsScreen from '../screens/PermissionsScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const {permissions} = usePermissionsContext();
  if (permissions.locationStatus === 'unavailable') {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}>
      {permissions.locationStatus === 'granted' ? (
        <Stack.Screen name="MapScreen" component={MapScreen} />
      ) : (
        <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
