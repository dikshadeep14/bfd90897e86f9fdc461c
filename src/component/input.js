import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const InputText = (props) => {
  const {value, placeholder, handleChange} = props;
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputContainer} placeholder={placeholder} value={value} onChangeText={(text) => handleChange(text)} />
    </View>
  )
}

export {InputText};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    marginTop: 10,
    marginBottom: 10
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: 'grey',
    height: 35,
  }
})
