import React from 'react';
import Navigator from './src/navigation/Navigator';
import StackNavigator from './src/navigation/StackNavigator';

const App = () => {
  return (
    <Navigator>
      <StackNavigator />
    </Navigator>
  );
};

export default App;
