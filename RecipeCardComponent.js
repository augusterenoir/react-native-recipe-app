import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import RecipeCardLabelComponent from './RecipeCardLabelComponent';

export default class RecipeCardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numColumns: 0 };
  }

  render() {
    labels = this.props.item.labels;
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <View style={styles.recipeBox}>
            <Image source={{ uri: this.props.item.image }} style={{ width: 100, height: 100, margin: 10 }}></Image>
            <View style={{ flex: 1, flexDirection: "column", margin: 20 }}>
              <Text style={styles.recipeTitle}>{this.props.item.title}</Text>
              <View style={styles.badgeList}>

                {labels.map((item, index) => {
                  return (
                    <RecipeCardLabelComponent style={styles.badgeList} label={item} key={index}/>
                  )
                })}

              </View>
            </View>
          </View>
          <View style={{ height: 2, backgroundColor: '#565C98' }}></View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  recipeBox: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#A6A2DC",
    alignItems: "center"
  },
  badgeList: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-end",
  },
  recipeTitle: {
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 14,
    color: "white",
  },
});