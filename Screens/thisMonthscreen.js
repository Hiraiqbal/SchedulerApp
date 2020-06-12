import React from 'react';
import { Button, View,StyleSheet } from 'react-native';

function thisMonthScreen({ navigation }) {
    return (
      <View style={styles.ScreenC} >
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
  const styles = StyleSheet.create({

    ScreenC:{ 
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  export default thisMonthScreen;