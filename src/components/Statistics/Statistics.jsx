import PropTypes from 'prop-types'; 
import { Span, StatList, StatTitle } from './Statistics.styled';
import Notification from 'components/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage, title }) => {
   
    return (
    <StatList>
        <StatTitle>{title}</StatTitle>       
        {total === 0 ? 
        <Notification message="There is no feedback" /> :
        <>
        <Span>Good: {good}</Span>
        <Span>Neutral: {neutral}</Span>
        <Span>Bad: {bad}</Span>
        <Span>Total: {total}</Span>
        <Span>Positive feedback: {positivePercentage.toFixed(0)}%</Span>
        </>}        
    </StatList>
)}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number,
}
  
export default Statistics;