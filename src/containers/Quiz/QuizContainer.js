import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Animatable from "react-native-animatable";

import GeneralHeadline from "../../components/General/GeneralHeadline";
import QuizCard from "../../components/Quiz/QuizCard";
import QuizChip from "../../components/Quiz/QuizChip";
import QuizButtons from "../../components/Quiz/QuizButtons";
import { addUserChoice } from "../../actions";
import { WHITE_COLOR, COLOR_LIST, BLACK_COLOR } from "../../utils/globalColors";

const quizStyle = StyleSheet.create({
  containerView: {
    flex: 1
  },
  cardContainer: {
    width: "80%",
    alignSelf: "center",
    marginTop: 10
  }
});

class QuizContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      questionCount: 1,
      currentQuestion: {},
      currentColor: BLACK_COLOR
    };
  }

  componentDidMount() {
    const { triviaQuestions } = this.props;
    if (triviaQuestions.length > 0) {
      this.setState(
        {
          currentQuestion: triviaQuestions[0],
          currentColor: COLOR_LIST[0]
        },
        () => {
          this.slideInLeft();
        }
      );
    }
  }

  handleUserChoice = userChoice => {
    const { actions, navigation, triviaQuestions } = this.props;
    const { questionCount, currentQuestion } = this.state;
    this.slideOutRight();
    actions.addUserChoice({ currentQuestion, userChoice });

    if (questionCount === 10) {
      navigation.navigate("Results");
    } else {
      setTimeout(() => {
        this.setState(
          {
            currentQuestion: triviaQuestions[questionCount],
            currentColor: COLOR_LIST[questionCount],
            questionCount: questionCount + 1
          },
          () => {
            this.slideInLeft();
          }
        );
      }, 900);
    }
  };

  questionCountCheck = () => {
    const questionsAmount = this.props.triviaQuestions.length;
    return `${this.state.questionCount} of ${questionsAmount}`;
  };

  handleQuizCardViewRef = ref => (this.quizCardView = ref);
  slideInLeft = async () => await this.quizCardView.slideInLeft(1000);
  slideOutRight = async () => await this.quizCardView.slideOutRight(1000);

  render() {
    const { currentQuestion, currentColor } = this.state;
    return (
      <View style={quizStyle.containerView}>
        <GeneralHeadline
          text={currentQuestion.category}
          color={WHITE_COLOR}
          backgroundColor={currentColor}
          width="80%"
        />
        <QuizChip text={this.questionCountCheck()} />
        <Animatable.View
          ref={this.handleQuizCardViewRef}
          style={quizStyle.cardContainer}
        >
          <QuizCard
            text={currentQuestion.question}
            cardStyle={{ backgroundColor: currentColor }}
          />
        </Animatable.View>
        <QuizButtons
          onButtonOnePress={() => this.handleUserChoice(true)}
          onButtonTwoPress={() => this.handleUserChoice(false)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    triviaQuestions: state.triviaReducer.triviaQuestions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        addUserChoice
      },
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizContainer);
