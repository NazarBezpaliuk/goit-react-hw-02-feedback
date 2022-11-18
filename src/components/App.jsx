import { Container } from './App.styled';
import { React, Component } from 'react';
import Statistics from './Statistics/Statistics';
import Buttons from './Buttons/Buttons';
import Section from './Section/Section';
import NotificationMessage from './NotificationMessage/NotificationMessage';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = evt => {
    const name = evt.currentTarget.name;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = total => {
    const { good } = this.state;
    if (total === 0) {
      return 0;
    }
    const percentage = (good * 100) / total;
    return Math.round(percentage);
  };

  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage(total);

    return (
      <Container>
        <Section title="Please, leave your feedback">
          <Buttons options={options} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        <Section title="Statistics">
          {total !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={percent}
            />
          ) : (
            <NotificationMessage message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}
