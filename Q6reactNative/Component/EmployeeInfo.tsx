import React from 'react';
import { View, Text, Button } from 'react-native';

interface EmployeeInfoProps {
  fullName: string;
  age: string;
  occupation: string;
  onUpdate: () => void;
}

const EmployeeInfo: React.FC<EmployeeInfoProps> = ({ fullName, age, occupation, onUpdate }) => {
  return (
    <View>
      <Text>Full Name: {fullName}</Text>
      <Text>Age: {age}</Text>
      <Text>Occupation: {occupation}</Text>
      <Button title="Update" onPress={onUpdate} />
    </View>
  );
};

export default EmployeeInfo;
