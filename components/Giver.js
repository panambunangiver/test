import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  View: {
    backgroundColor: 'white',
    alignItems: 'center',
    margin: 15,
    padding: 5,
  },
  Text: {
    color: 'red',
    alignItems: 'center',
  },
});

export default function Giver() {
  return (
    <View style={styles.View}>
      <Text style={styles.Text}>Giver</Text>
    </View>
  );
}
