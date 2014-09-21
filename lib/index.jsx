/** @jsx React.DOM */

var React = require('react'),
    CommentBox = require('TF-CommentBox');

React.renderComponent(
    <CommentBox url="http://localhost:3001/comments.json" pollInterval={2000} />,
    document.getElementById('content')
);