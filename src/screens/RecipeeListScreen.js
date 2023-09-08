import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import SearchFilter from '../components/SearchFilter';

const RecipeeListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header headerText={'Hi, Jignesh '} headerIcon={'bell-o'} />
      <SearchFilter icon="search" placeholder={'enter your fav recipee'} />
    </SafeAreaView>
  );
};

export default RecipeeListScreen;

const styles = StyleSheet.create({});
