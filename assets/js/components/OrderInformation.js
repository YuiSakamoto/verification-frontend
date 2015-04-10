/** @jsx React.DOM */
var React = require('react');

var OrderInformation = React.createClass({
  render: function () {
    return (
      <div className="item-transactions-order-information">
        <div className="item-transactions-item-title">
          取引情報
        </div>
        <div class="item-transactions-item">
          <div class="item-transactions-item-header">
            <div class="img-item">
              <img src="http://static-mercari-jp-panda-dev.akamaized.net/thumb/photos/m197096748_1.jpg?1427944658" />
            </div>
            <div class="item-name">
              <span>q</span>
            </div>
          </div>
          <div class="item-transactions-item-details">
            <table>
              <tbody>
                <tr class="item-transactions-item-price">
                  <th>商品代金</th>
                  <td class="number">
                    <span>￥9,000</span>
                  </td>
                </tr>
                <tr class="item-transactions-item-shipping">
                  <th>送料</th>
                  <td class="number">
                    <span>送料込み(出品者負担)</span>
                  </td>
                </tr>
                <tr class="item-transactions-item-purchase-date">
                  <th>購入日時</th>
                  <td>
                    <span>4月10日 20:26</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="more-arrow"></div>
        </div>
        <hr />
        <div>
          <div class="item-transactions-item-id">
            <table>
              <tbody>
                <tr>
                  <th>商品ID</th>
                  <td>
                    <div id="item-id-copy-text">m197096748</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <hr />
        <div>
          <div class="item-transactions-item-ship-to">
            <table>
              <tbody>
                <tr>
                  <th>お届け先</th>
                  <td>
                    <pre>〒994-3616
                      北海道北海道北海道</pre>
                    <div><strong><span>小杉 十郎太</span></strong> 様</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="item-transactions-seller-title">
          出品者情報
        </div>
        <div class="item-transactions-seller">
          <div class="img-user">
            <img src="http://static-mercari-jp-panda-dev.akamaized.net/images/member_photo_noimage_thumb.png" />
          </div>
          <div>
            <span>neko</span>
            <div class="more-arrow"></div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = OrderInformation;