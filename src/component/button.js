import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

const NButton = (props) => {
  const { label, handleClick, disabled } = props;
  return (
    <View style={styles.container}>
      <Button disabled={disabled} title={label} onPress={() => handleClick()} />
    </View>
  )
}

export {NButton};

const styles = StyleSheet.create({
  container: {
    borderColor: 'grey',
    borderWidth: 1,
    margin: 5,
    borderRadius: 5
  }
});
