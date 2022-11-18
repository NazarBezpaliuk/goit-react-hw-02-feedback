import PropTypes from 'prop-types';
import { ContainerBtn, Btn } from './Buttons.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((options, index) => {
    return (
      <ContainerBtn>
        <Btn type="button" key={index} name={options} onClick={onLeaveFeedback}>
          {options}
        </Btn>
      </ContainerBtn>
    );
  });
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.string,
  index: PropTypes.number,
};
