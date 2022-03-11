import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    View: {
        backgroundColor: 'greenyellow',
        alignItems: 'center',
        margin: 15,
        padding: 5,
    },
    Text: {
        color: 'black',
    }
});

export default function Friendly2() {
    return(
        <View style={styles.View}>
            <Text style={styles.Text}>Nofrando</Text>
        </View>
    );
}
