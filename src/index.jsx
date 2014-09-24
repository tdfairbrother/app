/** @jsx React.DOM */

var React = require('react');
var CommentBox = require('TF-CommentBox');
var ReactRouter = require('react-router-component');

var Pages       = ReactRouter.Pages;
var Page        = ReactRouter.Page;

function Comments() {
    return <CommentBox fireurl="https://burning-inferno-6221.firebaseio.com" />
}

var App = React.createClass({

    render: function() {
        return (
            <html>
                <head>
                    <script src="/assets/bundle.js" />
                </head>
                <Pages className="App" path={this.props.path}>
                    <Page path="/" handler={Comments} />
                </Pages>
            </html>
            );
    }
});

if (typeof window !== 'undefined') {
    window.onload = function() {
        React.renderComponent(
            App(),
            document.getElementById('content')
        );
    }
}


module.exports = App;


