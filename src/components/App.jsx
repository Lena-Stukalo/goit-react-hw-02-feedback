import { Component } from 'react';

import Section from './section/Sectoin';

const reactions = ['good', 'netrual', 'bad'];

export class App extends Component {
  state = {
    good: 0,
    netrual: 0,
    bad: 0,
  };
  onButtonClick = event => {
    this.setState(prevState => {
      const { name } = event.target;
      return { [name]: prevState[name] + 1 };
    });
  };
  countTotalFeedback = () => {
    const { good, netrual, bad } = this.state;
    return good + netrual + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, netrual, bad } = this.state;
    return Math.round((good / (good + netrual + bad)) * 100);
  };
  render() {
    const { good, bad, netrual } = this.state;
    return (
      <div>
        <Section
          reactions={reactions}
          onButtonClick={this.onButtonClick}
          good={good}
          netrual={netrual}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
          title={'Plese leave youf feedback'}
        ></Section>
      </div>
    );
  }
}
