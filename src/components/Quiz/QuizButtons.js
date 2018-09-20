import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";

const button = {
  paddingTop: 5,
  paddingBottom: 5,
  paddingLeft: 25,
  paddingRight: 25
};

const quizButtonsStyle = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "center",
    bottom: 50,
    position: "absolute",
    alignSelf: "center"
  },
  buttonOne: {
    ...button
  },
  buttonTwo: {
    marginLeft: 30,
    ...button
  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "400"
  }
});

export default props => (
  <View style={quizButtonsStyle.view}>
    <Button
      mode="contained"
      style={quizButtonsStyle.buttonOne}
      onPress={props.onButtonOnePress}
    >
      <Text style={quizButtonsStyle.text}>True</Text>
    </Button>
    <Button
      mode="contained"
      style={quizButtonsStyle.buttonTwo}
      onPress={props.onButtonTwoPress}
    >
      <Text style={quizButtonsStyle.text}>False</Text>
    </Button>
  </View>
);
