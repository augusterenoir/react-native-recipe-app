import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, FlatList, SectionList, ListItem } from 'react-native';
import RecipeCardComponent from './RecipeCardComponent';
import MapView from 'react-native-maps';
import recipes from './recipes.json';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import RecipeDetailsComponent from './RecipeDetailsComponent';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <FlatList
          data={recipes.recipes}
          renderItem={({ item }) =>
            // <RecipeCardComponent style={styles.item} item={item} onPress={() => this.props.navigation.navigate('Details')}/>}
            <RecipeCardComponent style={styles.item} item={item}
              onPress={() => this.props.navigation.navigate('Details', {
                recipe: item
              })} />}
          keyExtractor={(item, index) => item.id}
        />

        {/* <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Details' })
              ],
            }))
          }}
        /> */}

        {/* <RecipeCardComponent title="I am a recipe" text="Recipe data"/> */}
        {/* <Image style={{width: 50, height: 50}} source={{uri: 'https://www.w3schools.com/w3css/img_lights.jpg'}} />
        <Text>Open up App.js to start working on your app!</Text>
        <Button onPress={this._onPressLearnMore} title="Click me!"></Button> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: 22,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default createStackNavigator({
  Home: {
    screen: App
  },
  Details: {
    screen: RecipeDetailsComponent
  }
}, {
    initialRouteName: 'Home',
  });