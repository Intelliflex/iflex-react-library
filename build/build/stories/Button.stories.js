import React from '../../_snowpack/pkg/react.js';
import { Button as Btn } from '../library/index.js';
export default {
  title: 'My Library/Button',
  component: Btn
};

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(Btn, args);
};

export var Button = Template.bind({});
Button.args = {
  label: 'Sample Button'
};