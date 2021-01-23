import React from '../../_snowpack/pkg/react.js';
import { Layout as LayoutComponent, About, Button } from '../library/index.js';
export default {
  title: 'My Library/Layout',
  component: LayoutComponent
};

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(LayoutComponent, args);
};

export var Layout = Template.bind({});
Layout.args = {
  header: 'This is Sample Header Text',
  content: /*#__PURE__*/React.createElement(About, {
    showCounter: true
  }),
  sidebar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    label: "Test Button 1",
    size: "large"
  }), /*#__PURE__*/React.createElement(Button, {
    label: "Test Button 2",
    color: "green",
    size: "large"
  }), /*#__PURE__*/React.createElement(Button, {
    label: "Test Button 3",
    color: "red",
    size: "large"
  }))
};