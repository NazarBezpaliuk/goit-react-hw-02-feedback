import PropTypes from 'prop-types';
import { ContainerMessage, Message } from './NotificationMessage.styled';

const NotificationMessage = ({ message }) => {
  return (
    <ContainerMessage>
      <Message>{message}</Message>
    </ContainerMessage>
  );
};

export default NotificationMessage;

NotificationMessage.propTypes = {
  message: PropTypes.string,
};
