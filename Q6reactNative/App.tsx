// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   /*
//    * To keep the template simple and small we're adding padding to prevent view
//    * from rendering under the System UI.
//    * For bigger apps the recommendation is to use `react-native-safe-area-context`:
//    * https://github.com/AppAndFlow/react-native-safe-area-context
//    *
//    * You can read more about it here:
//    * https://github.com/react-native-community/discussions-and-proposals/discussions/827
//    */
//   const safePadding = '5%';

//   return (
//     <View style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         style={backgroundStyle}>
//         <View style={{paddingRight: safePadding}}>
//           <Header/>
//         </View>
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//             paddingHorizontal: safePadding,
//             paddingBottom: safePadding,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import EmployeeInfo from './Component/EmployeeInfo.tsx';
import SumDigits from './Component/SumDigits.tsx';
import FindMinimum from './Component/FindMinimum.tsx';
import HailstoneSequence from './Component/HailstoneSequence.tsx';

const App = () => {
  const [message, setMessage] = useState('');
  const [sum, setSum] = useState<number | null>(null);
  const [minValue, setMinValue] = useState<number | null>(null);
  const [sequence, setSequence] = useState<number[]>([]);

  const handleUpdate = () => {
    setMessage('Update Successful!');
  };

  const handleSum = (number: string) => {
    const numStr = number.toString();
    const firstDigit = parseInt(numStr.charAt(0), 10);
    const lastDigit = parseInt(numStr.charAt(numStr.length - 1), 10);
    setSum(firstDigit + lastDigit);
  };

  const handleFindMin = (num1: string, num2: string, num3: string) => {
    const min = Math.min(Number(num1), Number(num2), Number(num3));
    setMinValue(min);
  };

  const generateHailstone = (number: string) => {
    let n = parseInt(number, 10);
    let seq: number[] = [];
    while (n !== 1) {
      seq.push(n);
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = n * 3 + 1;
      }
    }
    seq.push(1);
    setSequence(seq);
  };

  return (
    <View style={{ padding: 20 }}>
      <EmployeeInfo
        fullName="Ha"
        age="22"
        occupation="Student"
        onUpdate={handleUpdate}
      />
      <Text>{message}</Text>

      <SumDigits handleSum={handleSum} />
      {sum !== null && <Text>Sum of First and Last Digit: {sum}</Text>}

      <FindMinimum handleFindMin={handleFindMin} />
      {minValue !== null && <Text>Minimum Value: {minValue}</Text>}

      <HailstoneSequence generateHailstone={generateHailstone} />
      {sequence.length > 0 && <Text>Sequence: {sequence.join(', ')}</Text>}
    </View>
  );
};

export default App;
