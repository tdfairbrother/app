/** @jsx React.DOM */

var React = require('react'),
    CommentBox = require('TF-CommentBox');

var Box = <CommentBox fireurl="https://burning-inferno-6221.firebaseio.com" />;

module.exports = Box;

if (typeof window !== 'undefined') {
    window.onload = function() {
        React.renderComponent(
            Box,
            document.getElementById('content')
        );
    }
}



