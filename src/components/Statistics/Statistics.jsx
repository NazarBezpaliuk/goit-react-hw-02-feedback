import PropTypes from 'prop-types';
import { StatList, StatItem, StatContainer } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatContainer>
      <StatList>
        <StatItem>Good: {good}</StatItem>
        <StatItem>Neutral: {neutral}</StatItem>
        <StatItem>Bad: {bad}</StatItem>
        <StatItem>Total: {total}</StatItem>
        <StatItem>% of positive feedbacks: {positivePercentage} %</StatItem>
      </StatList>
    </StatContainer>
  );
};

export default Statistics;

Statistics.prototype = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePersentage: PropTypes.number,
};
