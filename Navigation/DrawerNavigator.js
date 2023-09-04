import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import StackNavigator from './StackNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import Profile from '../screens/Profile';



const Drawer = createDrawerNavigator()
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      {/* <Drawer.Screen name = "home" component = {BottomTabNavigator}/>  */}
      <Drawer.Screen name="Home" component={StackNavigator} />
      <Drawer.Screen name="perfil" component={Profile} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator