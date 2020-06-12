import React from 'react';
import { Button, View , StyleSheet,images} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    DrawerContentScrollView,
    DrawerItemList,
  } from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';

export function DrawerContent(props){
    return(
        <View>
            <Text>
                this is our text
            </Text>
        </View>
    );
}

const styles=StyleSheet.create({
drawerContent:{
    flex:1,
},
userInfoSection:{
    paddingLeft:20,
},
title:{
    fontSize:16,
    marginTop:3,
    fontWeight:'bold',
},
caption:{
    fontSize:14,
    lineHeight: 14,
},
row:{
    marginTop:20,
    flexDirection:'row',
    alignItems: "center",

},
section:{
    flexDirection:'row',
    alignItems:'center',
    marginRight:15,
},
Paragraph:{
    fontWeight:'bold',
    marginRight:3,
},
drawerSection:{
    marginTop:15,
},

});