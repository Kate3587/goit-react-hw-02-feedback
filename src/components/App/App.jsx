import React from "react";
import { Component } from 'react';
import Section from '../Section/Section'
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification'
import Statistics from '../Statistics/Statistics';
import options from '../../data/Options';
import {Container} from '../App/App.styled'


class App extends Component{
     state = {
        good: 0,
        neutral: 0,
        bad: 0,
        visible: false,
     };

    handleChange = (event) => {
        const { name } = event.target;
        console.log (event.target)
        this.setState(prevState => {
            return {
            [name]: prevState[name] + 1
            }})
    };
  
  show = () => {
    this.setState({
      visible: true
    });
  };
  
    hide = () => {
    this.setState({
      visible: false
    });
    };
        
    render() {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        const positivePercentage = (good &&  (good * 100 / total).toFixed(1));

        return (
            <Container>
            <Section title={"Please leave feedback"}>
                    <FeedbackOptions
                    options={options}
                    onLeaveFeedback={this.handleChange}
                    />
                </Section>

            <Section title={"Statistics"}>
               <Notification message="There is no feedback"></Notification>
                    <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total}
                    positivePercentage={positivePercentage}
                    />
                  
                </Section>
            </Container>
        )
    };
};


export default App;