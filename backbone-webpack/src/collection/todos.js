var TodoModel = require('src/model/todo');

module.exports = Backbone.Collection.extend({
  model: TodoModel,
});
