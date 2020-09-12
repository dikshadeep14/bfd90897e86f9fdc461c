import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Details = (props) => {
  const  {name, nasa_jpl_url, is_potentially_hazardous_asteroid} = props.route.params;
  return (
    <View>
      <View style={styles.textContainer}>
        <Text>
          Asteroid Name: {name}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text>
          Link: {nasa_jpl_url}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text>
         Potential Hazardous: {JSON.stringify(is_potentially_hazardous_asteroid)}
        </Text>
      </View>
    </View>
  )
}

export {Details};

const styles = StyleSheet.create({
  textContainer: {
    margin: 5
  }
})
