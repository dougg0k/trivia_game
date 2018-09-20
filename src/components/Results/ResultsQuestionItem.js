import React from "react";
import { List } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import HTMLView from "react-native-htmlview";

import { COLOR_11, COLOR_1 } from "../../utils/globalColors";

const resultsItemStyle = StyleSheet.create({
  view: {
    flexDirection: "row",
    alignItems: "center",
    width: "85%",
    marginTop: 10
  },
  icon: { height: 30, width: 30 },
  text: { fontSize: 20 }
});

export default props => (
  <View style={resultsItemStyle.view}>
    <List.Icon
      style={resultsItemStyle.icon}
      icon={props.isCorrect ? "add" : "remove"}
      color={props.isCorrect ? COLOR_11 : COLOR_1}
    />
    <HTMLView
      stylesheet={resultsItemStyle}
      value={`<text>${props.text}</text>`}
    />
  </View>
);
