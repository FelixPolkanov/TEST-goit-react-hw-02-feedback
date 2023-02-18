import React, { Component } from 'react';
import Statistic from './Statistics/Statistic';
import FeedbackOption from './FeedbackOptions/FeedbackOption';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = button => {
    this.setState(prevState => ({
      [button]: prevState[button] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const buttonsName = Object.keys(this.state);
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOption
            options={buttonsName}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>


        {good || neutral || bad ?
          <Section title="Statistics">
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
          : <Notification message="There is no feedback" />}
      </div>
    );
  }
}
