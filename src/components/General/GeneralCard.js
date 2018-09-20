import React from "react";
import { Card } from "react-native-paper";

export default props => (
  <Card elevation={props.elevation} style={props.style}>
    <Card.Content>
      {props.length > 0 ? props.children[0] : props.children}
    </Card.Content>
    {props.children[1] && <Card.Actions>{props.children[1]}</Card.Actions>}
  </Card>
);
