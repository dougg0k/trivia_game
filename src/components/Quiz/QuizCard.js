import React from "react";
import { View, StyleSheet } from "react-native";
import HTMLView from "react-native-htmlview";

import GeneralCard from "../General/GeneralCard";
import { WHITE_COLOR, BLACK_COLOR } from "../../utils/globalColors";

export default props => {
  const quizCardStyle = StyleSheet.create({
    card: {
      height: "70%",
      backgroundColor: BLACK_COLOR,
      paddingBottom: 15,
      ...props.cardStyle
    },
    view: {
      height: "100%",
      alignItems: "center",
      justifyContent: "center"
    },
    text: {
      color: WHITE_COLOR,
      textAlign: "center",
      fontSize: 24
    }
  });
  return (
    <GeneralCard elevation={1} style={quizCardStyle.card}>
      <View style={quizCardStyle.view}>
        <HTMLView
          stylesheet={quizCardStyle}
          value={`<text>${props.text}</text>`}
        />
      </View>
    </GeneralCard>
  );
};
