const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectId} = require('mongodb');

// var id = '5cb6d6ce829ae13f0241f52811';
// if(!ObjectId.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos:', todos);
// })

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('Todo:', todo)
// })

// Todo.findById(id).then(todo => {
//   if(!todo) {
//     return console.log('Id not found', id)
//   }
//   console.log('Find by id:', todo)
// }).catch((e) => console.log(e))

User.findById('5cb80b9d0b23dc92aedd747e').then(user => {
  if (!user) {
    return console.log('Unable to find user')
  }
  console.log(JSON.stringify(user, undefined, 2));
}, err => {
  console.log(err)
})
