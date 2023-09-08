import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Image source={require('../../assets/images/welcome1.png')} />

      <Text style={{ fontSize: 22, color: '#f96163', fontWeight: 'bold' }}>
        40K+ Premium Recipes
      </Text>

      <Text
        style={{
          fontSize: 42,
          marginTop: 44,
          color: '#3c444c',
          fontWeight: 'bold',
          marginBottom: 40,
        }}
      >
        Cook Like A Chef
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('RecipeList')}
        style={{
          backgroundColor: '#f96163',
          borderRadius: 18,
          paddingVertical: 18,
          width: '80%',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 18, color: '#fff', fontWeight: '700' }}>
          Let's Go
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
