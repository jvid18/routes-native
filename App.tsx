import React from 'react';
import AppState from './src/components/AppState';
import Navigator from './src/navigation/Navigator';
import StackNavigator from './src/navigation/StackNavigator';

const App = () => {
  return (
    <AppState>
      <Navigator>
        <StackNavigator />
      </Navigator>
    </AppState>
  );
};

export default App;
