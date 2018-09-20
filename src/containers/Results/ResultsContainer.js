import React, { PureComponent } from "react";
import { View, StyleSheet, BackHandler, FlatList } from "react-native";
import { connect } from "react-redux";

import GeneralHeadline from "../../components/General/GeneralHeadline";
import SharedButton from "../../components/Shared/SharedButton";
import ResultsQuestionItem from "../../components/Results/ResultsQuestionItem";

const resultsStyle = StyleSheet.create({
  containerView: {
    flex: 1
  },
  listContainer: {
    width: "90%",
    maxHeight: "70%",
    marginTop: 10
  }
});

class ResultsContainer extends PureComponent {
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.navigate("Home");
      return true;
    });
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  playAgain = () => this.props.navigation.navigate("Home");

  headlineText = () => {
    const { userChoices } = this.props;
    const scoreAmount = userChoices.filter(item =>
      this.questionComparison(item)
    ).length;
    return `You scored \n ${scoreAmount}/${userChoices.length}`;
  };

  questionComparison = item =>
    item.currentQuestion.correct_answer.toLowerCase() ===
    item.userChoice.toString();

  render() {
    return (
      <View style={resultsStyle.containerView}>
        <GeneralHeadline text={this.headlineText()} />
        <View style={resultsStyle.listContainer}>
          <FlatList
            data={this.props.userChoices}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <ResultsQuestionItem
                text={item.currentQuestion.question}
                isCorrect={this.questionComparison(item)}
              />
            )}
          />
        </View>
        <SharedButton text="Play Again?" onPress={this.playAgain} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    userChoices: state.triviaReducer.userChoices
  };
};

export default connect(mapStateToProps)(ResultsContainer);
