import React from 'react';
import { Fade } from 'react-awesome-reveal';
import PropTypes from 'prop-types';

const Title = ({ title } : { title: string })=> (
  <Fade direction='down' duration={1000} delay={300}>
    <h2 className="section-title">{title}</h2>
  </Fade>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
