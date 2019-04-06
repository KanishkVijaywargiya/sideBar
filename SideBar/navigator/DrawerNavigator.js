import React from 'react';
import {Platform,Dimensions,  StyleSheet, Text, View } from 'react-native';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LinkingScreen from '../screens/LinkingScreen';
import MenuDrawer from '../components/MenuDrawer';

const width = Dimensions.get('window').width;
const DrawerConfig = {
    drawerWidth:width*0.83,
    contentComponent: ({navigation}) => {
        return(<MenuDrawer navigation={navigation}/>)
    }
}
const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeScreen,
    },
    Setting: {
        screen: SettingsScreen,
    },
    Linking: {
        screen: LinkingScreen,
    },

  },
  DrawerConfig

)
export default createAppContainer(DrawerNavigator);