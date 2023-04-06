import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import SIgninScreen from './src/Screens/SIgninScreen';


export default function App() {
  return (
    <SafeAreaView style={styles.container} >
      <SIgninScreen />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  }
})
