import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetAnswers } from '../actions/actionCreators';
import '../styles/Finish.css';

class Finish extends Component {
  componentWillMount() {
    // checks if the user came through url
    if (this.props.answers.length === 0) {
      this.props.history.push('/');
    }
  }

  renderQuestions(questionList) {
    if (questionList) {
      return (
        <div>
          <h4 className="finish__questions-title">Questions you've made mistakes in:</h4>
          <ul className="finish-questions">
            {questionList}
          </ul>
        </div>
      );
    }
  }

  retry() {
    this.props.resetAnswers();
    this.props.history.push('/');
  }

  render() {
    // gets the result based on correct answers length
    let correctAnswers = this.props.answers.filter(answer => answer.value === true),
        result = Math.round(correctAnswers.length / this.props.answers.length * 100),
        wrongAnswers, questionList;

    // filters wrong answers if there are any
    if (correctAnswers.length !== this.props.answers.length) {
      wrongAnswers = this.props.answers.filter((answer, index) => answer.value === false);
    }

    if (wrongAnswers) {
      questionList = wrongAnswers.map((answer, i) => {
        const question = this.props.questions[answer.question];

        return (
          <li className="finish-question" key={i}>
            <p className="finish-question__question">{question.question}</p>
            <div className="finish-question-answers">
              <div className="finish-question-answers__answer correct">{question.options[question.correct]}</div>
              <div className="finish-question-answers__answer incorrect">{question.options[answer.choice]}</div>
            </div>
          </li>
        );
      });
    }

    return (
      <div className="finish">
        <button className="button" onClick={this.retry.bind(this)}>Try again</button>
        <h2 className="finish__title">Finish!</h2>
        <h3 className="finish__subtitle">Your result:</h3>
        <div className="finish__result">{result}%</div>
        { this.renderQuestions(questionList) }
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    questions: reduxState.questions,
    answers: reduxState.answers
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    resetAnswers
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Finish);
