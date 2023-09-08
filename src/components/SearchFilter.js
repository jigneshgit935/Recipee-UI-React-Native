import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

const SearchFilter = ({ icon, placeholder }) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginVertical: 16,
        elevation: 5,
      }}
    >
      <FontAwesome name={icon} size={20} color="#f96163" />
      <TextInput
        style={{ paddingLeft: 8, color: '#808080', fontSize: 16 }}
        placeholder={placeholder}
      />
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({});
