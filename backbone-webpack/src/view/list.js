var Backbone = require('backbone');
var TodoCollection = require('../model/todos.js');

module.exports = Backbone.View.extend({
  el: '#todo-list',

  initialize: function(options) {
    var options = options || {};
    this.collection = options.collection || new TodoCollection();
  },

  // addOne: function(todo) {
  //   var view = new TodoView({
  //     model: todo,
  //   });
  //
  //   $('#todo-list').append(view.render().el);
  // },
  //
  // addAll: function() {
  //   this.$('#todo-list').html('');
  //   this.collection.each(this.addOne, this);
  // },
});
