import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <ImageBackground 
      source={{ uri: 'https://w0.peakpx.com/wallpaper/261/898/HD-wallpaper-bmw-m2-s1000rr-bike-bmw-car-motorcycle.jpg' }} 
      style={styles.container}
    >
      <Text style={styles.title}>Parts Out</Text>
      <Link href="/home" style={styles.link}>Go to Home</Link>
      <StatusBar style="auto" /> 
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 100,
  },
  link: {
    fontSize: 16,
    color: '#fff',
    textDecorationLine: 'underline',
  },
});
