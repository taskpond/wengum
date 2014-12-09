var Animation = React.createClass({
  componentWillEnter: function(done) {
    this.el = this.getDOMNode();
    this.$el = $(this.el);

    this.$el.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', done);
    this.$el.addClass('animated rotateInUpRight');
  },

  componentDidEnter: function() {
    this.$el.removeClass('animated rotateInUpRight');
  },

  componentWillLeave: function(done) {
    this.el = this.getDOMNode();
    this.$el = $(this.el);

    this.$el.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', done);
    this.$el.addClass('animated zoomOutDown');
  },

  componenDidLeave: function() {
    this.$el.removeClass('animated zoomOutDown');
  },

  render: function() {
    return this.transferPropsTo(this.props.component());
  }
});