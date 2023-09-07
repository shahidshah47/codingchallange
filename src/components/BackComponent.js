import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Custom Back Component
function BackComponent(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
      {/* Add any Icon component if you want */}
      <Text style={{ color: 'white',paddingLeft:10 }}>Back</Text>
    </TouchableOpacity>
  );
}

export default BackComponent;