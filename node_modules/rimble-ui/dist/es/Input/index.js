function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { CheckCircle } from '@rimble/icons/es/md';
import { Warning } from '@rimble/icons/es/md';
import FileInput from './FileInput';
import { StyledBox } from '../Box';
var StyledInput = /*#__PURE__*/styled(StyledBox).attrs(function (props) {
  return {
    as: 'input'
  };
}).withConfig({
  displayName: "Input__StyledInput",
  componentId: "vwozih-0"
})(["&{appearance:none;}&:hover{box-shadow:0px 2px 6px rgba(0,0,0,0.3);}&:focus{outline:none;border-color:", ";}&:disabled{opacity:0.4;pointer-events:none;}&[type=\"color\"]{min-width:3rem;padding:0;&::-webkit-color-swatch-wrapper{display:flex;align-items:center;justify-content:center;padding:0;}&::-webkit-color-swatch{flex:0 0 auto;height:2rem;width:2rem;border:none;border-radius:100%;}&::-moz-color-swatch{height:2rem;width:2rem;border:none;border-radius:100%;}}.was-validated &{&:valid{border-color:", ";}&:valid ~ svg.icon-valid{visibility:visible;color:", ";}&:invalid{border-color:", ";}&:invalid ~ svg.icon-invalid{visibility:visible;color:", ";}}}"], themeGet('colors.primary', '#000'), themeGet('colors.success'), themeGet('colors.success'), themeGet('colors.danger'), themeGet('colors.danger'));
var StyledIconWrapper = /*#__PURE__*/styled.div.withConfig({
  displayName: "Input__StyledIconWrapper",
  componentId: "vwozih-1"
})(["&{position:relative;display:flex;align-items:center;width:100%;}> ", "{padding-right:3rem;text-overflow:ellipsis;white-space:no-wrap;}> svg{position:absolute;right:1rem;visibility:hidden;}"], StyledInput);
var WithValidationStyle = React.forwardRef(function (props, ref) {
  return React.createElement(StyledIconWrapper, null, React.createElement(StyledInput, _extends({}, props, {
    ref: ref
  })), React.createElement(CheckCircle, {
    className: 'icon-valid'
  }), React.createElement(Warning, {
    className: 'icon-invalid'
  }));
});
var Input = React.forwardRef(function (props, ref) {
  if (props.type === 'file') {
    return React.createElement(FileInput, _extends({}, props, {
      ref: ref
    }));
  } else {
    return React.createElement(StyledInput, _extends({}, props, {
      ref: ref
    }));
  }
});
var defaultProps = {
  color: 'text',
  bg: 'background',
  fontSize: '1rem',
  lineHeight: 'initial',
  height: '3rem',
  p: 3,
  border: 1,
  borderColor: 'moon-gray',
  borderRadius: 1,
  boxShadow: 1
};
Input.WithValidationStyle = WithValidationStyle;
WithValidationStyle.defaultProps = defaultProps;
StyledInput.defaultProps = defaultProps;
Input.defaultProps = defaultProps;
Input.propTypes = {
  theme: PropTypes.object
};
Input.displayName = 'Input';
export { StyledInput };
export default Input;