import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style ={styles.text}>My Name is <Text style ={styles.bolded}>Muiz!</Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 24,
  },

  bolded: {
    fontWeight: 'bold',
  },
});
