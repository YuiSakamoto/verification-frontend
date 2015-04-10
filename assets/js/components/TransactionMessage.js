/** @jsx React.DOM */
var React = require('react');

var TransactionMessage = React.createClass({
  render: function () {
    return (
      <div class="item-transactions-message">
        <div class="item-transactions-message-empty">
          取引メッセージが送れます。配送に関することなど
          分からないことは質問してみましょう。
        </div>
        <form>
          <div class="control-group no-padding">
            <textarea class="item-transactions-message-textarea"></textarea>
          </div>
          <button class="item-transactions-message-post-button button">
            <i class="icon-message"></i> 取引メッセージを送る
          </button>
        </form>
        <div class="item-transaction-message-notice">
          ※お困りの際は<a href="http://guide.mercariapp.com/jp/contents/1#b5">よくある質問</a>をご確認ください
        </div>
        <div class="item-transactions-message-deleted">
          ※取引完了後、2週間経過または最新取引メッセージから2週間経過したため、取引メッセージを非公開にしました。
        </div>
      </div>
    );
  }
});

module.exports = TransactionMessage;