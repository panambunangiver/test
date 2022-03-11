import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    View: {
        backgroundColor: 'darkblue',
        alignItems: 'center',
        margin: 15,
        padding: 5,
    },
    Text: {
        color: 'blue',
    }
});

export default function Friendly4() {
    return(
        <View style={styles.View}>
            <Text style={styles.Text}>Ayen</Text>
        </View>
    );
}
