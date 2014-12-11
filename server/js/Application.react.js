var React = require('react');
var Content = require('./Content.react');

var WengumPage = React.createClass({
  render: function(){
    return (
      <div className="wrapper">
        <Content />
      </div>
    );
  }
});

module.exports = WengumPage;