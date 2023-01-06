import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default class App extends Component {

  render() {
    <SafeAreaView style={styles.container}>
      <Text>Olá, teste 1</Text>
    </SafeAreaView>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
