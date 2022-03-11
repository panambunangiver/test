import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

//styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  textInput: {
    borderWidth: 1.5,
    borderColor: 'white',
    color: 'white',
    padding: 5,
    margin: 5,
    width: 150,
    height: 25,
  },
  button: {
    color: 'lime',
  }
});

export default function App() {
  const [state, setState] = useState({
    Email: 'default',
    Username: 'default',
    Password: 'default',
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}> 
        Email: {`${state.Email} \n\n`}
        Username: {`${state.Username} \n\n`}
        Password: {`${state.Password} \n\n`}
      </Text>

      <TextInput
      style={styles.textInput}
        onChangeText={val =>
          setState({
            Email: val !== '' ? val : 'default',
            Username: state.Username,
            Password: state.Password,
          })
        }
        placeholder="Enter email here"
        placeholderTextColor="grey"
      />

      <TextInput 
      style={styles.textInput}
        onChangeText={val =>
          setState({
            Email: state.Email,
            Username: val !== '' ? val : 'default',
            Password: state.Password,
          })
        }
        placeholder="Enter username here"
        placeholderTextColor="grey"
      />

      <TextInput 
        style={styles.textInput}
        onChangeText={(val) => setState({
          Email: state.Email,
          Username: state.Username,
          Password: (val !== '') ? val : 'default',
        })}
        placeholder="Enter password here"
        placeholderTextColor="grey"
        secureTextEntry={true}
      />

      <Button color="green" title="Button" onPress={() => console.log(state)} />
    </View>
  );
}
