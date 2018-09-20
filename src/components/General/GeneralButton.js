import React from "react";
import { Button, Text } from "react-native-paper";

export default props => (
  <Button
    disabled={props.disabled}
    onPress={props.onPress}
    style={props.style}
    loading={props.loading}
  >
    <Text style={props.textStyle}>{props.text.toUpperCase()}</Text>
  </Button>
);
