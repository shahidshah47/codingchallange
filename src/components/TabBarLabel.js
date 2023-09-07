import React from 'react';
import { Text, View } from 'react-native';

const TabBarLabel = ({ label, focused, color }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color, textAlign: 'center',fontSize:16 }}>{label}</Text>
    </View>
  );
};

export default TabBarLabel
