import { Component } from 'react';
import PropTypes from 'prop-types';
import { ContainerTitle, Title } from './Section.styled';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <ContainerTitle>
        <Title>{title}</Title>
        {children}
      </ContainerTitle>
    );
  }
}

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};
