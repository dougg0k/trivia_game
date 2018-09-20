import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import {
  COLOR_1,
  COLOR_2,
  COLOR_3,
  COLOR_4,
  COLOR_5,
  COLOR_6,
  COLOR_7,
  COLOR_8,
  COLOR_9,
  COLOR_10
} from "../../utils/globalColors";

const homeTextStyle = StyleSheet.create({
  containerText: {
    fontSize: 30,
    fontWeight: "400",
    width: "80%",
    alignSelf: "center",
    textAlign: "center",
    color: COLOR_1
  },
  second: {
    color: COLOR_2
  },
  third: {
    color: COLOR_3
  },
  forth: {
    color: COLOR_4
  },
  fifth: {
    color: COLOR_5
  },
  sixth: {
    color: COLOR_6
  },
  seventh: {
    color: COLOR_7
  },
  eighth: {
    color: COLOR_8
  },
  ninth: {
    color: COLOR_9
  },
  tenth: {
    color: COLOR_10
  }
});

export default props => (
  <Text style={homeTextStyle.containerText}>
    You <Text style={homeTextStyle.second}>will</Text>{" "}
    <Text style={homeTextStyle.third}>be</Text>{" "}
    <Text style={homeTextStyle.forth}>presented</Text>{" "}
    <Text style={homeTextStyle.fifth}>with</Text>{" "}
    <Text style={homeTextStyle.sixth}>10</Text>{" "}
    <Text style={homeTextStyle.seventh}>True</Text>{" "}
    <Text style={homeTextStyle.eighth}>or</Text>{" "}
    <Text style={homeTextStyle.ninth}>False</Text>{" "}
    <Text style={homeTextStyle.tenth}>questions.</Text>
  </Text>
);
