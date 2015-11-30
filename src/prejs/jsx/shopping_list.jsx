const React = require('react');
const ReactDOM = require('react-dom');

var priceToUSDString = function(price) {
  return '$' + price.toFixed(2);
};

var ShoppingItemRow = React.createClass({
  propTypes: {
    item: React.PropTypes.object
  },

  render: function() {
    var fields = [];
    var value;
    var fieldName;
    for (fieldName in this.props.item) {
      value = this.props.item[fieldName];
      if (fieldName === 'price') {
        value = priceToUSDString(value);
      }
      fields.push(<li className={fieldName} key={fieldName}>{value}</li>);
}

return <li>
  <ul>{fields}</ul>
</li>;
    }
});

var ShoppingTotal = React.createClass({
  render: function() {
    //var total = this.props.items.reduce(function(runningTotal, item) {
    //return item.price + runningTotal;
    //}, 0);
    var total = 0;
    React.Children.forEach(this.props.children, function(child) {
      total += child.props.item.price;
    });
    return <ul className="total">
      <li>Total</li>
      <li>{priceToUSDString(total)}</li>
    </ul>;
  }
});


var ShoppingList = React.createClass({
  propTypes: {
    items: React.PropTypes.arrayOf(React.PropTypes.object)
  },

  render: function() {
    return <div>
      <ol className="items">
        {this.props.items.map(function(item) {
        return <ShoppingItemRow item={item} key={item.id} />;
        })}
      </ol>
      <ShoppingTotal>
        {this.props.items.map(function(item) {
        return <ShoppingItemRow item={item} key={item.id} />;
        })}
      </ShoppingTotal>
    </div>;
    }

});


var itemList = [
  {
    id: 1,
    name: 'Sleeping Bag w/ Stuff Sack',
    quantity: 1,
    price: 48.99
  },
  {
    id: 2,
    name: 'Chocolate Energy Bar',
    quantity: 4,
    price: 2.99 * 4
  },
  {
    id: 3,
    name: '2-Person Polyethylene Tent',
    quantity: 1,
    price: 104.33
  }
];

ReactDOM.render(<ShoppingList items={itemList} />, document.getElementById('here'));
