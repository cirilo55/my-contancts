import React from 'react';
import PropTypes from 'prop-types';
import { InputContainer, Input, IconWrapper } from './style';

const InputComponent = ({ icon: Icon, ...props }) => (
  <InputContainer>
    {Icon && (
      <IconWrapper>
        <Icon />
      </IconWrapper>
    )}
    <Input {...props} />
  </InputContainer>
);

InputComponent.propTypes = {
  icon: PropTypes.elementType,
};

export default InputComponent;