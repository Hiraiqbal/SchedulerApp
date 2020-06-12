import React from 'react';
import { Button, View } from 'react-native';

function calenderScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('This Week')}
          title="Go to This Week"
        />
      </View>
    );
  }

  export default calenderScreen;