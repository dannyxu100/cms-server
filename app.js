var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost', { useNewUrlParser:true }, function(err){
　　if(err){
　　　　console.log('Connection Error:' + err);
　　} else{
　　　　console.log('Connection success!');
    }
});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('数据库连接成功。');
});