import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Text from '../components/ui/Text';
import {usePermissionsContext} from '../context/PermissionsContext';

const PermissionsScreen = () => {
  const {permissions, askLocationPermission} = usePermissionsContext();

  return (
    <View style={styles.container}>
      <Text>PermissionsScreen</Text>
      <Button title="Request" onPress={() => askLocationPermission()} />
      <Text>{JSON.stringify(permissions, null, 3)}</Text>
    </View>
  );
};

export default PermissionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
