import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

interface FindMinimumProps {
  handleFindMin: (num1: string, num2: string, num3: string) => void;
}

const FindMinimum: React.FC<FindMinimumProps> = ({ handleFindMin }) => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');

  return (
    <View>
      <TextInput
        value={num1}
        onChangeText={setNum1}
        placeholder="Enter first number"
        keyboardType="numeric"
      />
      <TextInput
        value={num2}
        onChangeText={setNum2}
        placeholder="Enter second number"
        keyboardType="numeric"
      />
      <TextInput
        value={num3}
        onChangeText={setNum3}
        placeholder="Enter third number"
        keyboardType="numeric"
      />
      <Button title="Find Minimum" onPress={() => handleFindMin(num1, num2, num3)} />
    </View>
  );
};

export default FindMinimum;
