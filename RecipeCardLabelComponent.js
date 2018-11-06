import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, FlatList } from 'react-native';

export default class RecipeCardLabelComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.badge}>
        <Text numberOfLines={1} style={styles.label}>{this.props.label}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  badge: {
    margin: 2,
    padding: 5,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff',
  },
  label: {
    color: 'white',
    textAlign: 'center',
  }
});
