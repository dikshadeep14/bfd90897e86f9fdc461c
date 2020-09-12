import React, {useState} from 'react';
import { View } from 'react-native';
import { NButton } from '../component/button';
import { InputText } from '../component/input';

const API_KEY = 'miHy94fxekiRNeo7r1rAzhcV69LuMbMcAX13VKS2';

const AsteroidForm = (props) => {
  const [asteroidId, setAsteroid] = useState('');

  const handleChange = (e) => {
    setAsteroid(e);
  }
  const handleRandomAsteroid = async() => {
    let randomAsteroid = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`)
    let response = await randomAsteroid.json();
    let array = await response.near_earth_objects.map(x => x.id);
    setAsteroid(array[Math.floor(Math.random()* array.length)]);
  }

  const handleSubmit = async () => {
    const url = `https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=${API_KEY}`
    let response = await fetch(url);
    response = await response.json();
    props.navigation.navigate('Details', {name: response.name, nasa_jpl_url: response.nasa_jpl_url, is_potentially_hazardous_asteroid: response.is_potentially_hazardous_asteroid});
  }
  return (
      <View>
        <View>
          <InputText placeholder="Enter Asteroid ID" handleChange={handleChange} value={asteroidId} />
        </View>
        <View>
          <NButton label='Random Asteroid' handleClick={handleRandomAsteroid} />
        </View>
        <View>
          <NButton disabled={!asteroidId} label='Submit' handleClick={handleSubmit} />
        </View>
      </View>

  )
}

export {AsteroidForm}
