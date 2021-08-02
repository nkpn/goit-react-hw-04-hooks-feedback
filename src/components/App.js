import React, { Component } from 'react';
import Controls from './Controls'; //* вместо названия FeedbackOptions
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
    total: this.props.total,
  };

  visibleStatistics = false;

  // goodIncrement = evt => {
  //   this.setState(prevState => {
  //     return {
  //       good: prevState.good + 1,
  //     };
  //   });
  // };

  increment = evt => {
    this.visibleStatistics = true;
    this.setState(prevState => {
      const { target } = evt;
      const value = target.textContent.toLowerCase();
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  countTotalFeedback = (good, neutral, bad) => {
    return good + bad + neutral;
  };

  countPositiveFeedback = (good, neutral, bad) => {
    const total = good + bad + neutral;
    return (total === 0 ? 0 : (good / total) * 100).toFixed();
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { increment } = this;

    return (
      <>
        <Section title={'Please leave feedback'}>
          <Controls
            onLeaveFeedback={increment}
            options={['good', 'neutral', 'bad']}
          />
        </Section>

        <Section title={'Statistics'}>
          {this.visibleStatistics === true ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback(good, neutral, bad)}
              positivePercentage={this.countPositiveFeedback(
                good,
                neutral,
                bad,
              )}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
