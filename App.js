import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import SIgninScreen from './src/Screens/SIgninScreen';
import SignUp from './src/Screens/SignUpScreen';
import ConfirmEmailScreen from './src/Screens/ConfirmEmailScreen';


export default function App() {
  return (
    <SafeAreaView style={styles.container} >
      <ConfirmEmailScreen />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  }
})
