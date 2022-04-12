import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

const Navigator: React.FC = ({children}) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};

export default Navigator;
