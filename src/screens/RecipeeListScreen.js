import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import SearchFilter from '../components/SearchFilter';
import CategoryFilter from '../components/CategoryFilter';

const RecipeeListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      <Header headerText={'Hi, Jignesh '} headerIcon={'bell-o'} />
      <SearchFilter icon="search" placeholder={'enter your fav recipee'} />

      <View style={{ marginTop: 22 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
          Categories
          {/* Category List */}
        </Text>
        <CategoryFilter />
      </View>
    </SafeAreaView>
  );
};

export default RecipeeListScreen;

const styles = StyleSheet.create({});
