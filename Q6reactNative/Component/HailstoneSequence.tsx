import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

interface HailstoneSequenceProps {
  generateHailstone: (number: string) => void;
}

const HailstoneSequence: React.FC<HailstoneSequenceProps> = ({ generateHailstone }) => {
  const [number, setNumber] = useState('');

  return (
    <View>
      <TextInput
        value={number}
        onChangeText={setNumber}
        placeholder="Enter a number"
        keyboardType="numeric"
      />
      <Button title="Generate Hailstone Sequence" onPress={() => generateHailstone(number)} />
    </View>
  );
};

export default HailstoneSequence;
