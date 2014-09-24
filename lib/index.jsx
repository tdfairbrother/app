/** @jsx React.DOM */

var React = require('react'),
    CommentBox = require('TF-CommentBox');

React.renderComponent(
    <CommentBox fireurl="https://burning-inferno-6221.firebaseio.com" />,
    document.getElementById('content')
);