var mongoose = require('mongoose');
const MONGO_URI ='mongodb://pirates:pirates500@ds149252.mlab.com:49252/node-js-course2-api'
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI||'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
