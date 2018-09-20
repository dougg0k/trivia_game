import React from "react";
import { Portal, Dialog } from "react-native-paper";

export default props => (
  <Portal>
    <Dialog
      visible={props.isVisible}
      onDismiss={props.hideDialog}
      dismissable={false}
    >
      <Dialog.Title>{props.title}</Dialog.Title>
      <Dialog.Content>{props.children[0]}</Dialog.Content>
      <Dialog.Actions>{props.children[1]}</Dialog.Actions>
    </Dialog>
  </Portal>
);
