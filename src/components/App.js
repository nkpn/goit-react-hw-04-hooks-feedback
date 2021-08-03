import React, { useState, useEffect } from 'react';
import Controls from './Controls'; //* вместо названия FeedbackOptions
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleChange = event => {
    const { target } = event;
    const value = target.textContent.toLowerCase();

    switch (value) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const total = (() => good + neutral + bad)();
  const countPositiveFeedback = (() => ((good / total) * 100).toFixed())();

  return (
    <>
      <Section title={'Please leave feedback'}>
        <Controls
          onLeaveFeedback={handleChange}
          options={['good', 'neutral', 'bad']}
        />
      </Section>

      <Section title={'Statistics'}>
        {total >= 1 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedback}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
}
