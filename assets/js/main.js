/** @jsx React.DOM */
var React = require('react');
var Header = require('./components/Header.js');
var GuideLink = require('./components/GuideLink.js');
var OrderInformation = require('./components/OrderInformation.js');
var TransactionMessage = require('./components/TransactionMessage.js');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header></Header>
        <GuideLink></GuideLink>
        <OrderInformation></OrderInformation>
        <TransactionMessage></TransactionMessage>
      </div>
    );
  }
});

React.render(<App/>, document.body);
