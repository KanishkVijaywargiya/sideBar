import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import LinkingScreen from './screens/LinkingScreen';
import DrawerNavigator from './navigator/DrawerNavigator';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DrawerNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
