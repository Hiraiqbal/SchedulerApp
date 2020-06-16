import React from 'react';
import { Button, View , StyleSheet,Image} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
    shadow
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem,
  } from '@react-navigation/drawer';
  import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props){
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style ={{backgroundColor:'#499394'}}>
                        <Text style={{color:'white', fontSize:16}}>We have everything sorted for you Hira Iqbal</Text>
                    </View>
                 </View>

                <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            label="View Profile"
                            icon={({color, size}) => (
                                <Icon 
                                name='account-circle'
                                color={color}
                                size={size}
                                />
                            )}
                            onPress={() => {props.navigation.navigate('View Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="calendar-check" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Calender"
                            onPress={() => {props.navigation.navigate('Calender')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="calendar-today" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="This Day"
                            onPress={() => {props.navigation.navigate('This Day')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="calendar-week" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="This Week"
                            onPress={() => {props.navigation.navigate('This Week')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="calendar-month" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="This Month"
                            onPress={() => {props.navigation.navigate('This Month')}}
                        />
                </Drawer.Section>
                </DrawerContentScrollView>
                <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>

        </View>
    );
}

const styles=StyleSheet.create({
drawerContent:{
    flex:1,
    borderWidth:70,
    borderColor:'#499394'
    
},
section:{
    flexDirection:'row',
    alignItems:'center',
    marginRight:15,
},
drawerSection:{
    marginTop:15,
},

});