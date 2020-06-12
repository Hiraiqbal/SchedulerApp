import React from 'react';
import { Button, View } from 'react-native';

function thisDayScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Calender')}
          title="Go to Calender"
        />
      </View>
    );
  }

  export default thisDayScreen;