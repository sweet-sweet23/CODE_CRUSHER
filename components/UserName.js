import React from 'react';
import {Text, View} from 'react-native';

const Cat = props => {
  return (
    <View>
      <Text>Hello, we are kamote {props.name}!</Text>
    </View>
  );
};

const Cafe = () => {
  return (
    <View>
      <Cat name="ate2" />
      <Cat name="ate1" />
      <Cat name="juliet" />
    </View>
  );
};

export default Cafe;