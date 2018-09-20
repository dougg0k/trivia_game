import React from "react";
import { StyleSheet } from "react-native";

import GeneralButton from "../General/GeneralButton";
import { MAIN_COLOR } from "../../utils/globalColors";

const sharedButtonStyle = StyleSheet.create({
  beginButton: {
    alignSelf: "center",
    bottom: 25,
    position: "absolute",
    width: "75%",
    borderWidth: 2,
    borderColor: MAIN_COLOR,
    borderRadius: 5
  },
  beginButtonText: {
    fontSize: 30,
    textAlign: "center",
    color: MAIN_COLOR
  }
});

export default props => (
  <GeneralButton
    text={props.text}
    onPress={props.onPress}
    style={sharedButtonStyle.beginButton}
    textStyle={sharedButtonStyle.beginButtonText}
    loading={props.loading}
  />
);
