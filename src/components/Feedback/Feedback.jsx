import { useState } from 'react';
import styles from './Feedback.module.scss';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

const { btn__good, btn__negative, btn__neutral } = styles;

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [percentage, setPrecentage] = useState(0);

  const countPrecentagePlus = () => {
    setPrecentage((((good + 1) / (total + 1))*100).toFixed(2));
  };
  const countPrecentageMinus = () => {
    setPrecentage(((good / (total + 1))*100).toFixed(2));
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={() => {
            setGood(good + 1);
            setTotal(total + 1);
            countPrecentagePlus();
          }}
          onLeaveFeedback="Good"
          className={btn__good}
        />
        <FeedbackOptions
          options={() => {
            setNeutral(neutral + 1);
            setTotal(total + 1);
            countPrecentageMinus();
          }}
          onLeaveFeedback="Neutral"
          className={btn__neutral}
        />
        <FeedbackOptions
          options={() => {
            setBad(bad + 1);
            setTotal(total + 1);
            countPrecentageMinus();
          }}
          onLeaveFeedback="Bad"
          className={btn__negative}
        />
      </Section>
      <Section title="Statistics">
        {total === undefined ? (
          <Notification message="There is no feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={percentage}
          />
        )}
      </Section>
    </>
  );
};
