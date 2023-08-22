import { useState } from "react"
import { GlobalStyle } from "./GlobalStyle";
import  Section  from "./Section";
import  Statistics  from "./Statistics";
import  FeedbackOptions  from "./FeedbackOptions";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (type) => {
   if(type === 'good'){
    setGood(prevGood => prevGood +1);
   };
   if(type === 'neutral'){
    setNeutral(prevNeutral => prevNeutral + 1);
   };
   if(type === 'bad'){
    setBad(prevBad => prevBad + 1);
   };   
  };

  const countTotalFeedback = () => {    
      return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {     
    const total = good + neutral + bad;      
      return (total === 0 ? 0 :(good / total) * 100);           
  };

  const options = ["good", "neutral", "bad"];

  return (
    <>
        <Section title="Please leave feedback">
          <FeedbackOptions   
          options={options}
          onLeaveFeedback={onLeaveFeedback}         
          />
          <Statistics title="Statistic"               
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}     
          />             
        </Section>               
      <GlobalStyle/>
    </>
  )
}
