var React = require('react');
var Content = require('./Content.react');

var WengumPage = React.createClass({
  render: function(){
    return (
      <div>
        <Content />
      </div>
    );
  }
});

module.exports = WengumPage;