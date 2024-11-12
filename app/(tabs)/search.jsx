import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Implement your search logic here
      Alert.alert('Search', `Searching for: ${searchQuery}`);
    } else {
      Alert.alert('Search', 'Please enter a search term.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search for Parts</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter part name..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa', // Light teal background
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
});