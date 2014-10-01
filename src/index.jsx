/** @jsx React.DOM */

var React = require('react');
var CommentBox = require('./CommentBox/');
var Router = require('react-router-component');

var Locations = Router.Locations;
var Location = Router.Location;
var Link = Router.Link;


var MainPage = React.createClass({
    render: function() {
        return(
        <div>
            Main page
            <Link href="/about">About page</Link>
        </div>
        )
    }
});

var AboutPage = React.createClass({
    render: function() {
        return (
            <div>
                About
                <CommentBox fireurl="https://burning-inferno-6221.firebaseio.com" />
                <Link href="/">Home</Link>
            </div>
            )
    }
});

var App = React.createClass({

    render: function() {
        return (
            <Locations path={this.props.path}>
                <Location path="/" handler={MainPage} />
                <Location path="/about" handler={AboutPage} />
            </Locations>
            )
    }
});


if (typeof window !== 'undefined') {
    window.onload = function() {
        React.renderComponent(
            App({ path:'/' }),
            document.getElementById('content')
        );
    }
}

// Server side rendering!

//var React = require('react')
//var App = require('./lib/index')

//var app = App({path:'/'})
//var markup = React.renderComponentToString(app)


//var React = require('react'),
//    Firebase = require('firebase');
//    ReactFireMixin = require('reactfire');

//var app = App({path:'/about'})
//var markup = React.renderComponentToString(app)

module.exports = App;

