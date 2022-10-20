import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/login/login';
import RegisterView from './src/screens/registration/register';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login /> */}
       <RegisterView/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
