import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Form from './src/components/Form';
import Title from './src/components/Title';

const DismissKeyBoard = ({children}) => (
  <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function App() {
  return (
    <DismissKeyBoard>
      <View style={styles.container}>
        <Title/>
        <Form/>
        <StatusBar style="auto" />
      </View>
    </DismissKeyBoard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,
  },
});
