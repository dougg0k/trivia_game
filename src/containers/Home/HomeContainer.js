import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import GeneralHeadline from "../../components/General/GeneralHeadline";
import HomeMiddle from "../../components/Home/HomeMiddle";
import HomeText from "../../components/Home/HomeText";
import {
  fetchTriviaQuestions,
  resetTriviaQuestions,
  resetUserChoices
} from "../../actions";
import { MEDIUM } from "../../utils/constants";
import SharedButton from "../../components/Shared/SharedButton";

const homeContainerStyle = StyleSheet.create({
  viewContainer: {
    flex: 1
  },
  homeTextContainer: {
    marginTop: 110
  },
  scoreText: {
    fontSize: 30,
    color: "#000",
    alignSelf: "center",
    marginTop: 90
  }
});

class HomeContainer extends PureComponent {
  constructor() {
    super();
    this.state = {
      isVisible: false,
      difficulty: MEDIUM,
      isBeginLoading: false
    };
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.resetTriviaQuestions();
    actions.resetUserChoices();
  }

  showDifficultyDialog = () => this.setState({ isVisible: true });

  hideDifficultyDialog = () => this.setState({ isVisible: false });

  checkDifficultyOption = option => this.setState({ difficulty: option });

  beginTrivia = async () => {
    const { actions, navigation } = this.props;
    this.setState({ isBeginLoading: true });
    await actions.fetchTriviaQuestions(this.state.difficulty);
    navigation.navigate("Quiz");
    this.setState({ isBeginLoading: false });
  };

  render() {
    const { isVisible, difficulty, isBeginLoading } = this.state;

    return (
      <View style={homeContainerStyle.viewContainer}>
        <GeneralHeadline text="Welcome to the Trivia Challenge!" />
        <View style={homeContainerStyle.homeTextContainer}>
          <HomeText />
        </View>
        <Text style={homeContainerStyle.scoreText}>Can you score 100%?</Text>
        <HomeMiddle
          isVisible={isVisible}
          showDialog={this.showDifficultyDialog}
          hideDialog={this.hideDifficultyDialog}
          difficulty={difficulty}
          checkDifficultyOption={this.checkDifficultyOption}
        />
        <SharedButton
          text="Begin"
          onPress={this.beginTrivia}
          loading={isBeginLoading}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      { fetchTriviaQuestions, resetUserChoices, resetTriviaQuestions },
      dispatch
    )
  };
};

export default connect(
  null,
  mapDispatchToProps
)(HomeContainer);
