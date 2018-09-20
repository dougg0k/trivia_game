import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, RadioButton } from "react-native-paper";
import GeneralDialog from "../General/GeneralDialog";
import { capitalize } from "../../utils/helpers";
import { DEFAULT_COLOR } from "../../utils/globalColors";
import { EASY, MEDIUM, HARD } from "../../utils/constants";

const homeStyle = StyleSheet.create({
  radioView: {
    flexDirection: "row",
    alignItems: "center"
  },
  chooseDifficulty: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
    color: DEFAULT_COLOR
  },
  difficultyButton: {
    width: "70%",
    alignSelf: "center",
    marginTop: 20,
    borderColor: DEFAULT_COLOR
  }
});

export default props => (
  <View>
    <Button
      onPress={props.showDialog}
      mode="outlined"
      style={homeStyle.difficultyButton}
    >
      Choose your difficulty
    </Button>
    {props.difficulty && (
      <Text style={homeStyle.chooseDifficulty}>
        {capitalize(props.difficulty)}
      </Text>
    )}
    <GeneralDialog
      isVisible={props.isVisible}
      hideDialog={props.hideDialog}
      title="Choose a difficulty"
    >
      <View>
        <RadioButton.Group
          value={props.difficulty}
          onValueChange={value => props.checkDifficultyOption(value)}
        >
          <View style={homeStyle.radioView}>
            <RadioButton value={EASY} />
            <Text>{capitalize(EASY)}</Text>
          </View>
          <View style={homeStyle.radioView}>
            <RadioButton value={MEDIUM} />
            <Text>{capitalize(MEDIUM)}</Text>
          </View>
          <View style={homeStyle.radioView}>
            <RadioButton value={HARD} />
            <Text>{capitalize(HARD)}</Text>
          </View>
        </RadioButton.Group>
      </View>
      <View>
        <Button onPress={props.hideDialog}>OK</Button>
      </View>
    </GeneralDialog>
  </View>
);
