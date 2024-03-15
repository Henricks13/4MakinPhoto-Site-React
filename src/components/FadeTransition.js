import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './FadeTransition.css';

const FadeTransition = ({ children, ...props }) => {
  return (
    <CSSTransition
      {...props}
      classNames="fade"
      timeout={300}
    >
      {children}
    </CSSTransition>
  );
};

export default FadeTransition;
