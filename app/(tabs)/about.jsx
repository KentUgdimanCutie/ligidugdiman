import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

const About = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.paragraph}>
        At Parts Out, we are dedicated to providing high-quality vehicle and motorcycle parts to enthusiasts and everyday drivers alike. Our mission is to ensure that every customer has access to reliable components that enhance performance and safety.
      </Text>
      <Text style={styles.paragraph}>
        We believe in the importance of maintaining and upgrading your vehicle or motorcycle. That’s why we offer a wide range of parts, from essential components to specialized accessories. Whether you’re a DIY mechanic or a professional, you’ll find everything you need at Parts Out.
      </Text>
      <Text style={styles.subtitle}>Our Vision</Text>
      <Text style={styles.paragraph}>
        To be the leading online destination for vehicle and motorcycle parts, known for our exceptional customer service and vast selection. We aim to empower our customers with the knowledge and tools they need to make informed decisions about their purchases.
      </Text>
      <Text style={styles.subtitle}>What We Offer</Text>
      <Text style={styles.paragraph}>
        - High-quality vehicle parts{"\n"}
        - Motorcycle components{"\n"}
        - Tools and accessories{"\n"}
        - Competitive pricing{"\n"}
        - Fast shipping and reliable service
      </Text>
      <Text style={styles.paragraph}>
        Join our community of automotive enthusiasts and discover the difference with Parts Out. Your vehicle deserves the best!
      </Text>
      
      <Text style={styles.subtitle}>Contact Us</Text>
      <Text style={styles.paragraph}>
        Phone: 09456723129{"\n"}
        Email: Joshpaps@partsout.com
      </Text>
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e9f5e9', // Light green background
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333', // Dark gray for title
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333', // Dark gray for subtitles
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    color: '#555', // Gray for paragraph text
  },
});
