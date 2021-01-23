//IFLEX-REACT-LIBRARY
//STORYBOOK EXPORT FILE
//INCLUDE AND EXPORT ANY OF YOUR STORYBOOK COMPONENT TEST OR DEMOS HERE
import React from '../../_snowpack/pkg/react.js';
import { About as AboutComponent } from '../library/index.js';
export default {
  title: 'My Library/About',
  component: AboutComponent
};

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(AboutComponent, args);
};

export var About = Template.bind({});
About.args = {
  showCounter: true
};