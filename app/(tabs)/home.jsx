import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Import navigation

const Home = () => {
  const navigation = useNavigation(); // Use the navigation hook

  const categories = [
    { id: 1, name: 'Engine Parts', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQn73BDCV4eFYkph2YJrwGWV4fbIc0h6wc9w&s', route: 'EngineParts' },
    { id: 2, name: 'Brakes', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQYpWvaoSbA9qJjADEnDlFCZjcXxvJcc_3hA&s' },
    { id: 3, name: 'Suspension', imageUrl: 'https://mytyresite-images.s3.ap-southeast-2.amazonaws.com/news/suspension-components-2023-03-27.jpg' },
    { id: 4, name: 'Electrical Parts', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROjprjjZIwZoLf5AMm-cFk_ODcfUiIxzExEg&s' },
    { id: 5, name: 'Exhaust Systems', imageUrl: 'https://www.carmodsaustralia.com.au/assets/webshop/cms/72/3627172.jpg?1681871955' },
    { id: 6, name: 'Tires', imageUrl: 'https://i5.walmartimages.com/seo/Set-of-4-FOUR-Cooper-Evolution-Winter-195-65R15-95T-XL-Winter-Snow-Tires-Fits-2009-12-Honda-Civic-Hybrid-L-2010-11-Toyota-Prius-Base_61b4b2c4-a118-4326-be65-f0801147b295.81055787c2d7db6d1f92c6d9e9bd6c32.jpeg' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Homepage, Select a Categories of Parts</Text>
      <ScrollView>
        <View style={styles.categoryContainer}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={styles.categoryCard}
              onPress={() => category.route && navigation.navigate(category.route)} // Navigate on press
            >
              <Image source={{ uri: category.imageUrl }} style={styles.categoryImage} />
              <Text style={styles.categoryName}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9f5e9', // Light green background
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  categoryCard: {
    width: '45%', // Adjust as needed
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2, // For shadow effect on Android
    padding: 10,
  },
  categoryImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
