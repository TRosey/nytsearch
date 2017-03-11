var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema= new Schema({
    title: {type: String, unique: true},
    date: {type: Date, default: Date.now},
    url: {type: String, unique: true}
});

var ArticleModel = mongoose.model('Article',articleSchema);

module.exports = ArticleModel;
