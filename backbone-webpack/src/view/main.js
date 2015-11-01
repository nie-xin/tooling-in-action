var Backbone = require('backbone');
var Template = require('html!../template/main.html');
var TodoCollection = require('../model/todos.js');
var TodoListView = require('./list');

module.exports = Backbone.View.extend({
  el: '#app',
  template: Template,

  initialize: function() {
    var listView = new TodoListView();
  },

  render: function() {
    this.$el.html(this.template);
  },
});
