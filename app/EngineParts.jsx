import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const EngineParts = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Engine Parts </Text>
      <Text style={styles.description}>
        Engine parts are critical components that ensure the smooth operation of an engine. 
        Proper maintenance can greatly enhance performance and longevity.
      </Text>

      <Text style={styles.sectionTitle}>Common Engine Parts:</Text>

      {/* Engine Block */}
      <Text style={styles.listItem}>- <Text style={styles.bold}>Engine Block:</Text> The main structure of the engine that houses the cylinders. 
      <Text style={styles.subDescription}> Maintenance: Regularly check for leaks and ensure proper cooling.</Text></Text>

      {/* Pistons */}
      <Text style={styles.listItem}>- <Text style={styles.bold}>Pistons:</Text> Move up and down in the cylinders to create power. 
      <Text style={styles.subDescription}> Maintenance: Check for wear and replace if necessary.</Text></Text>

      {/* Crankshaft */}
      <Text style={styles.listItem}>- <Text style={styles.bold}>Crankshaft:</Text> Converts the linear motion of the pistons into rotational motion. 
      <Text style={styles.subDescription}> Maintenance: Inspect for damage and ensure lubrication is adequate.</Text></Text>

      {/* Camshaft */}
      <Text style={styles.listItem}>- <Text style={styles.bold}>Camshaft:</Text> Controls the opening and closing of the engine's valves. 
      <Text style={styles.subDescription}> Maintenance: Replace timing belts regularly to avoid failure.</Text></Text>

      {/* Timing Belt */}
      <Text style={styles.listItem}>- <Text style={styles.bold}>Timing Belt:</Text> Synchronizes the rotation of the crankshaft and camshaft. 
      <Text style={styles.subDescription}> Maintenance: Replace every 60,000 to 100,000 miles.</Text></Text>

      {/* Oil Pump */}
      <Text style={styles.listItem}>- <Text style={styles.bold}>Oil Pump:</Text> Circulates oil to lubricate engine parts. 
      <Text style={styles.subDescription}> Maintenance: Change oil regularly to prevent pump failure.</Text></Text>

      {/* Cylinder Head */}
      <Text style={styles.listItem}>- <Text style={styles.bold}>Cylinder Head:</Text> Contains the valves and combustion chambers. 
      <Text style={styles.subDescription}> Maintenance: Check for cracks and ensure proper sealing.</Text></Text>

      {/* Fuel Injectors */}
      <Text style={styles.listItem}>- <Text style={styles.bold}>Fuel Injectors:</Text> Deliver fuel to the engine for combustion. 
      <Text style={styles.subDescription}> Maintenance: Clean regularly to ensure efficient fuel delivery.</Text></Text>

      <Text style={styles.maintenanceTitle}>Maintenance Tips:</Text>
      <Text style={styles.maintenanceItem}>- Regular oil changes are crucial for engine health.</Text>
      <Text style={styles.maintenanceItem}>- Monitor coolant levels and check for leaks.</Text>
      <Text style={styles.maintenanceItem}>- Keep the engine clean to avoid overheating.</Text>
      <Text style={styles.maintenanceItem}>- Listen for unusual noises that may indicate issues.</Text>
    </ScrollView>
  );
};

export default EngineParts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e0f7fa', // Light cyan background color
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  listItem: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  subDescription: {
    fontSize: 14,
    color: '#555',
  },
  maintenanceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
  },
  maintenanceItem: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 5,
  },
});
