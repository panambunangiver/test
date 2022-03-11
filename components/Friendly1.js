import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    View: {
        backgroundColor: 'black',
        alignItems: 'center',
        margin: 15,
        padding: 5,
    },
    Text: {
        color: 'green',
    }
});

export default function Friendly1() {
    return(
        <View style={styles.View}>
            <Text style={styles.Text}>Jhon Doe</Text>
        </View>
    );
}
