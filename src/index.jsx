/** @jsx React.DOM */

var React = require('react');
var RRouter = require('rrouter');
var CommentBox = require('TF-CommentBox');

var Routes = RRouter.Routes;
var Route = RRouter.Route;
var Link = RRouter.Link

var MainPage = React.createClass({
    render: function() {
        return(
        <div>
            Main page
            <CommentBox fireurl="https://burning-inferno-6221.firebaseio.com" />
            <Link href="/about">About page</Link>
        </div>
        )
    }
})

var AboutPage = React.createClass({
    render: function() {
        return (
            <div>
                About
                <Link href="/">Home</Link>
            </div>
            )
    }
});

var routes = (
    <Routes>
        <Route path="/" view={MainPage} />
        <Route path="/about" view={AboutPage} />
    </Routes>
    )


RRouter.start(routes, function(view) {
    React.renderComponent(view, document.body);
});



module.exports = App;