var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  default: {
    title: '',
    completed: false,
  },

  toggle: function() {
    this.save({
      completed: !this.get('completed'),
    });
  },
});
