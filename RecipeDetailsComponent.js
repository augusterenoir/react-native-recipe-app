import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, FlatList, ScrollView, Dimensions } from 'react-native';

export default class RecipeDetailsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    const recipe = navigation.getParam('recipe', {});

    return (
      <ScrollView contentContainerStyle={styles.detailsContainer}>
        <Image source={{ uri: recipe.image }} style={styles.image}></Image>
        <Text>{recipe.title}</Text>

        {recipe.ingredients.map((ingredient, index) => {
          return (
            <Text key={index}>{ingredient}</Text>
          )
        })}

        {recipe.directions.map((direction, index) => {
          return (
            <Text key={index}>{direction}</Text>
          )
        })}

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  detailsContainer: {
    flexGrow: 1,
    flexBasis: "100%",
    justifyContent: "flex-start",
    backgroundColor: '#A6A2DC',
    flexDirection: "column",
  },
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
  },
  image: {
    flex: 1,
    width: 300,
    height: 300,
    resizeMode: "contain",
    alignContent: "center",
  },
});
