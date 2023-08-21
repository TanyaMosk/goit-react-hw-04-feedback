import { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";
import  Section  from "./Section";
import  Statistics  from "./Statistics";
import  FeedbackOptions  from "./FeedbackOptions";
// import  Notification  from "./Notification";


export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
   
  onLeaveFeedback = type => {
    this.setState(prevState => {
    return {
        [type]: prevState[type] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
      return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => { 
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
      
      return (total === 0 ? 0 :(good / total) * 100);        
  };

  render() {      
    const options = ["good", "neutral", "bad"];
    
    return (
    <>
        <Section title="Please leave feedback">
          <FeedbackOptions   
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}         
          />
          <Statistics title="Statistic"               
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback() }
          positivePercentage={this.countPositiveFeedbackPercentage()}     
          />             
        </Section>               
      <GlobalStyle/>
    </>
  )}
}
