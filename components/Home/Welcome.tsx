import {StyleSheet, View} from 'react-native';
import { Text } from 'react-native-paper';

export function Welcome() {
  return (
    <View style={{marginLeft: 20}}>
   <Text variant="displaySmall">hi, Jane!</Text>
   <Text variant="bodySmall">welcome to your one stop shop for the perfect gift!</Text>
    </View>
  );
}