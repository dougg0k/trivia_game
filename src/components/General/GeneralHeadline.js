import React from "react";
import { StyleSheet, View } from "react-native";
import { Headline } from "react-native-paper";
import { MAIN_COLOR } from "../../utils/globalColors";

export default props => {
  const headlineStyle = StyleSheet.create({
    headline: {
      color: props.color || "#fff",
      width: props.width || "60%",
      alignSelf: "center",
      fontWeight: "bold",
      textAlign: "center"
    },
    bar: {
      backgroundColor: props.backgroundColor || MAIN_COLOR,
      height: 75,
      alignItems: "center",
      justifyContent: "center"
    }
  });
  return (
    <View style={headlineStyle.bar}>
      <Headline style={headlineStyle.headline}>{props.text}</Headline>
    </View>
  );
};
