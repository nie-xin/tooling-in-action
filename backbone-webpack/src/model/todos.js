var Backbone = require('backbone');
var todoModel = require('./todo');
var LocalStorage = require('backbone.localstorage');

module.exports = Backbone.Collection.extend({
  model: todoModel,
  localStorage: new LocalStorage('todos'),

  getCompleted: function() {
    return this.filter(function(todo) {
      return todo.get('completed');
    });
  },

  getRemaining: function() {
    return this.without.apply(this, this.completed());
  },

  nextOrder: function() {
    if (!this.length) {
      return 1;
    }

    return this.last().get(order) + 1;
  },

  // comparator to sorted todos by order
  comparator: function(todo) {
    return todo.get('order');
  },
});
