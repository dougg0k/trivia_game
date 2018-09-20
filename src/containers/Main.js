import React, { PureComponent } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  Easing,
  Animated
} from "react-native";
import { createStackNavigator } from "react-navigation";

import HomeContainer from "./Home/HomeContainer";
import QuizContainer from "./Quiz/QuizContainer";
import ResultsContainer from "./Results/ResultsContainer";

const mainStyle = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 24 : 0
  }
});

const RootStack = createStackNavigator(
  {
    Home: HomeContainer,
    Quiz: QuizContainer,
    Results: ResultsContainer
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      header: null
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 550,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver: true
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;

        const thisSceneIndex = scene.index;
        const width = layout.initWidth;

        const translateX = position.interpolate({
          inputRange: [thisSceneIndex - 1, thisSceneIndex],
          outputRange: [width, 0]
        });

        return { transform: [{ translateX }] };
      }
    })
  }
);

class Main extends PureComponent {
  render() {
    return (
      <SafeAreaView style={mainStyle.androidSafeArea}>
        <RootStack />
      </SafeAreaView>
    );
  }
}

export default Main;
