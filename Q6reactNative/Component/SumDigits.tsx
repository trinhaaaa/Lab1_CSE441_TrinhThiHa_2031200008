import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

interface SumDigitsProps {
  handleSum: (number: string) => void;
}

const SumDigits: React.FC<SumDigitsProps> = ({ handleSum }) => {
  const [number, setNumber] = useState('');

  return (
    <View>
      <TextInput
        value={number}
        onChangeText={setNumber}
        placeholder="Enter a number"
        keyboardType="numeric"
      />
      <Button title="Calculate Sum" onPress={() => handleSum(number)} />
    </View>
  );
};

export default SumDigits;
