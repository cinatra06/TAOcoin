function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '../Box';
import Flex from '../Flex';
import Card from '../Card';
import Text from '../Text';
import Tooltip from '../Tooltip';
import Icon from '../Icon';
import Button from '../Button';
import Input from '../Input';
import QR from '../QR';
import Portal from '../Portal';
import { useHiddenState } from '../Hidden';
import { ModalBackdrop } from '../Modal';
import Clipboard from './CopyToClipboard';
var StyledInput = /*#__PURE__*/styled(Input).withConfig({
  displayName: "EthAddress__StyledInput",
  componentId: "sc-1ulrvjg-0"
})(["text-overflow:ellipsis;white-space:nowrap;"]);
StyledInput.defaultProps = {
  title: 'Ethereum Address',
  'aria-label': 'Ethereum Address'
};
var StyledWrapper = /*#__PURE__*/styled(Box).withConfig({
  displayName: "EthAddress__StyledWrapper",
  componentId: "sc-1ulrvjg-1"
})(["&{display:flex;flex-direction:row;align-items:center;width:100%;position:relative;}"]);

var AddressQrModal = function AddressQrModal(_ref) {
  var isOpen = _ref.isOpen,
      hide = _ref.hide,
      address = _ref.address;
  var text = {
    title: 'Ethereum Address',
    description: 'To send funds to this Ethereum address, scan this code using your mobile wallet app'
  };
  var colors = {
    foreground: 'black',
    background: 'white'
  };

  if (isOpen) {
    return React.createElement(Portal, null, React.createElement(ModalBackdrop, null, React.createElement(Card, {
      maxWidth: '100%',
      bg: colors.background,
      color: colors.foreground,
      border: 'none',
      borderRadius: 2,
      p: 0,
      display: 'flex',
      flexDirection: 'column'
    }, React.createElement(Button.Text, {
      icon: 'Close',
      mainColor: 'inherit',
      p: 0,
      borderRadius: '100%',
      position: 'absolute',
      top: 0,
      right: 0,
      onClick: hide
    }), React.createElement(Text, {
      color: 'inherit',
      p: 3,
      borderBottom: 1,
      borderColor: 'blacks.4',
      lineHeight: 'solid',
      textAlign: 'center',
      fontWeight: 3
    }, text.title), React.createElement(Box, {
      p: [3, 4],
      overflow: 'scroll'
    }, React.createElement(Text, {
      color: 'inherit',
      textAlign: 'center',
      mb: 4
    }, text.description), React.createElement(Box // size={['100%', '200px']}
    , {
      width: 1,
      maxWidth: '220px',
      mx: 'auto',
      mb: 4,
      p: 4,
      bg: 'white',
      border: 1,
      borderColor: 'blacks.3',
      boxShadow: 2
    }, React.createElement(QR, {
      value: address,
      size: '100%'
    })), React.createElement(Clipboard, {
      text: address
    }, function (isCopied) {
      return React.createElement(Box, {
        color: 'inherit',
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
      }, React.createElement(StyledInput, {
        readOnly: true,
        value: address,
        width: 1,
        p: 'auto',
        pl: 3,
        pr: '5rem',
        fontWeight: 3
      }), React.createElement(Button, {
        size: 'small',
        width: '4rem',
        mx: 2,
        position: 'absolute',
        right: 0
      }, !isCopied ? 'Copy' : React.createElement(Icon, {
        name: 'Check'
      })));
    })))));
  }

  return null;
};

var QRButton = function QRButton(_ref2) {
  var address = _ref2.address,
      props = _objectWithoutProperties(_ref2, ["address"]);

  var _useHiddenState = useHiddenState(),
      visible = _useHiddenState.visible,
      toggle = _useHiddenState.toggle;

  var text = {
    tooltip: 'Show QR Code',
    button: 'Show QR Code'
  };

  if (!props.textLabels) {
    return React.createElement(React.Fragment, null, React.createElement(Tooltip, {
      message: text.tooltip
    }, React.createElement(Button, {
      size: 'small',
      ml: 2,
      p: 0,
      onClick: toggle
    }, React.createElement(Icon, {
      name: 'CenterFocusStrong'
    }))), React.createElement(AddressQrModal, {
      address: address,
      isOpen: visible,
      hide: toggle
    }));
  }

  return React.createElement(React.Fragment, null, React.createElement(Button, {
    size: 'small',
    ml: 2,
    onClick: toggle
  }, text.button), React.createElement(AddressQrModal, {
    address: address,
    isOpen: visible,
    hide: toggle
  }));
};

var CopyButton = function CopyButton(_ref3) {
  var clipboardText = _ref3.clipboardText,
      props = _objectWithoutProperties(_ref3, ["clipboardText"]);

  var text = {
    tooltip: 'Copy to clipboard',
    button: 'Copy'
  };

  if (!props.textLabels) {
    return React.createElement(Clipboard, {
      text: clipboardText
    }, function (isCopied) {
      return React.createElement(Tooltip, {
        message: text.tooltip
      }, React.createElement(Button, {
        size: 'small',
        p: 0
      }, React.createElement(Icon, {
        name: isCopied ? 'Check' : 'Assignment'
      })));
    });
  }

  return React.createElement(Clipboard, {
    text: clipboardText
  }, function (isCopied) {
    return React.createElement(Button, {
      size: 'small'
    }, !isCopied ? text.button : 'Copied!');
  });
};

var EthAddress = /*#__PURE__*/function (_Component) {
  _inherits(EthAddress, _Component);

  function EthAddress() {
    _classCallCheck(this, EthAddress);

    return _possibleConstructorReturn(this, _getPrototypeOf(EthAddress).apply(this, arguments));
  }

  _createClass(EthAddress, [{
    key: "render",
    value: function render() {
      return React.createElement(StyledWrapper, this.props, React.createElement(StyledInput, {
        readOnly: true,
        value: this.props.address,
        ref: this.inputRef,
        width: 1,
        fontWeight: 3,
        p: 'auto',
        pl: 3,
        pr: this.props.textLabels ? '12rem' : '6rem'
      }), React.createElement(Flex, {
        position: 'absolute',
        right: 0,
        mr: 2
      }, React.createElement(CopyButton, {
        clipboardText: this.props.address,
        textLabels: this.props.textLabels
      }), React.createElement(QRButton, {
        address: this.props.address,
        textLabels: this.props.textLabels
      })));
    }
  }]);

  return EthAddress;
}(Component);

EthAddress.propTypes = {
  /**
   * Sets Ethereum address as the value of the field
   */
  address: PropTypes.string.isRequired,

  /**
   * Changes buttons to text from icons
   */
  textLabels: PropTypes.bool
};
EthAddress.defaultProps = {
  textLabels: false
};
EthAddress.displayName = 'EthAddress';
export default EthAddress;