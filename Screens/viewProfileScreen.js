import React from 'react';
import { Button, View,StyleSheet,Text } from 'react-native';


function viewProfileScreen({ navigation }) {
    return (
      <View style={{flex:1}}>
        <View style={styles.mainContent}>
        </View>
        <View style={styles.Button}>
          <Button
          onPress={() => navigation.navigate('This Day')}
          title="Go to This Day"
         />   
       </View>
      </View>
    );
  }
  const styles=StyleSheet.create({
    mainContent:{

        borderWidth:70,
        borderColor:'#499394'
        
    },
    Button:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center' ,
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

  export default viewProfileScreen;