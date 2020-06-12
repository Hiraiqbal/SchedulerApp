import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { SimpleLineIcons } from '@expo/vector-icons';
import viewProfileScreen from '../Screens/viewProfileScreen';
import calenderScreen from '../Screens/calenderScreen';
import thisDayScreen from '../Screens/thisDayScreen';
import thisWeekScreen from '../Screens/thisWeekScreen';
import thisMonthScreen from '../Screens/thisMonthscreen';
import { DrawerContent } from '../Screens/DrawerContent';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="This Day" component={thisDayScreen} />
      <Stack.Screen name="Calender" component={calenderScreen} />
      <Stack.Screen name="This Week" component={thisWeekScreen} />
      <Stack.Screen name="This Month" component={thisMonthScreen} />
    </Stack.Navigator>
  );
}

function MyDriver() {
    return (
        <Drawer.Navigator initialRouteName='This Day'>
        <Drawer.Screen name="View Profile" component={viewProfileScreen} />
        <Drawer.Screen name="Calender" component={calenderScreen} />
        <Drawer.Screen name="This Day" component={MyStack} />
        <Drawer.Screen name="This Week" component={thisWeekScreen} />
        <Drawer.Screen name="This Month" component={thisMonthScreen} />
        </Drawer.Navigator>
    );
  }

  export default MyDriver;
