import React from "react";
import { StyleSheet } from "react-native";
import { Chip, Text } from "react-native-paper";
import { DEFAULT_COLOR } from "../../utils/globalColors";

const style = StyleSheet.create({
  chip: {
    alignSelf: "center",
    marginTop: 60,
    borderColor: DEFAULT_COLOR,
    borderWidth: 1
  },
  text: {
    color: DEFAULT_COLOR,
    fontSize: 18
  }
});

export default props => (
  <Chip mode="outlined" style={style.chip}>
    <Text style={style.text}>{props.text}</Text>
  </Chip>
);
