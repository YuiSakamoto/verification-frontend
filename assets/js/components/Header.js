/** @jsx React.DOM */
var React = require('react');

var Header = React.createClass({
  render: function () {
    return (
      <div className="item-transactions-status item-transactions-status-clock">
        <div>
          出品者からの発送通知をお待ちください
        </div>
        <div className="item-transactions-status-title">
          発送をお待ちください
        </div>
      </div>
    );
  }
});

module.exports = Header;
