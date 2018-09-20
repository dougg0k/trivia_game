import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import store from "./src/store/configureStore";
import Main from "./src/containers/Main";

export default class App extends React.Component {
  render() {
    return (
      <StoreProvider store={store}>
        <PaperProvider>
          <Main />
        </PaperProvider>
      </StoreProvider>
    );
  }
}
