import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../styles/Quiz.css';
import { fetchQuestions, addAnswer, resetAnswers } from '../actions/actionCreators';

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.renderOptions = this.renderOptions.bind(this);
    this.renderQuestion = this.renderQuestion.bind(this);

    this.state = {
      total: 0,
      current: 0
    };
  }

  componentWillMount() {
    this.props.resetAnswers();
    this.props.fetchQuestions();
  }

  componentDidMount() {
    this.toggleActiveClass();
  }

  componentDidUpdate() {
    this.toggleActiveClass();
  }

  // for animation purposes
  toggleActiveClass() {
    let wrapper = document.getElementById('quizContent');
    wrapper.classList.remove('active');
    setTimeout(() => wrapper.classList.add('active'), 10);
  }

  clickHandler(index) {
    const value = index === this.props.questions[this.state.current].correct;

    this.props.addAnswer({question: this.state.current, value, choice: index});

    if (this.props.total - 1 > this.state.current) {
      this.setState({current: this.state.current + 1});
    } else {
      this.props.history.push('/finish');
    }
  }

  retry() {
    this.setState({current: 0});
    this.props.resetAnswers();
  }

  renderOptions() {
    const questionDoc = this.props.questions[this.state.current];

    if (questionDoc) {
       return questionDoc.options.map((option, i) => (
        <li className="quiz-options__item" key={i} onClick={this.clickHandler.bind(this, i)}>{option}</li>
      ));
    }
  }

  renderQuestion() {
    const questionDoc = this.props.questions[this.state.current];

    if (questionDoc) {
      return questionDoc.question;
    }
  }

  render() {
    return (
      <div className="quiz">
        <button className="button" onClick={this.retry.bind(this)}>Retry</button>
        <div className="quiz-content" id="quizContent">
          <p className="quiz-question">{this.renderQuestion()}</p>
          <ul className="quiz-options">
            {this.renderOptions()}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    questions: reduxState.questions,
    total: reduxState.total
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchQuestions,
    addAnswer,
    resetAnswers
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
