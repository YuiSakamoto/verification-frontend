/** @jsx React.DOM */
var React = require('react');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>test!</h1>
      </div>
    );
  }
});

React.render(<App/>, document.body);
