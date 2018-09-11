var mongoose = require('mongoose');
var MONGODB_URI = ('mongodb://pirates:pirates500@ds149252.mlab.com:49252/node-js-course2-api')
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};
