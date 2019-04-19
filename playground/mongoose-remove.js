const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectId} = require('mongodb');

Todo.findOneAndDelete({}).then((result) => {
  console.log(result);
});
