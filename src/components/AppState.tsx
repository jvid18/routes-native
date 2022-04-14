import React from 'react';
import {PermissionsProvider} from '../context/PermissionsContext';

const AppState: React.FC = ({children}) => {
  return <PermissionsProvider>{children}</PermissionsProvider>;
};

export default AppState;
