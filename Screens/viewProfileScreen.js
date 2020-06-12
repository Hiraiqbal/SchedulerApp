import React from 'react';
import { Button, View } from 'react-native';

function viewProfileScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('This Day')}
          title="Go to This Day"
        />
      </View>
    );
  }

  export default viewProfileScreen;