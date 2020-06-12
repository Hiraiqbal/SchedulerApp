import React from 'react';
import { Button, View } from 'react-native';

function thisWeekScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('This Month')}
          title="Go to This Month"
        />
      </View>
    );
  }

  export default thisWeekScreen;