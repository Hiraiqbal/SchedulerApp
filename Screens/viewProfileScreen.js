import React from 'react';
import { Button, View,StyleSheet } from 'react-native';

function viewProfileScreen({ navigation }) {
    return (

      <View style={styles.Button}>
        <Button
          onPress={() => navigation.navigate('This Day')}
          title="Go to This Day"
        />
      </View>
    );
  }
  const styles=StyleSheet.create({
    drawerContent:{
        flex:1,
        borderWidth:70,
        borderColor:'#499394'
        
    },
    Button:{
        flex: 1,
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