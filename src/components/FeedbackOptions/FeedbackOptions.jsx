import { Button,ListBtn } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ListBtn>
      {options.map(option => (
          <Button key={option} onClick={() => onLeaveFeedback(option)}>
              {option}          
        </Button>
      ))}
    </ListBtn>
  );
};

export default FeedbackOptions;