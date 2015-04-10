/** @jsx React.DOM */
var React = require('react');

var GuideLink = React.createClass({
  render: function () {
    return (
      <div class="guide-link-box">
        <a href="http://guide.mercariapp.com/jp/sell/flow.html#a1" class="guide-link">商品が売れた後の流れ</a>
        <a href="http://guide.mercariapp.com/jp/buy/flow.html" class="guide-link">購入した後の流れ</a>
      </div>
    );
  }
});

module.exports = GuideLink;