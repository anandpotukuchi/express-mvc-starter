var mongoose = require('mongoose')


const UserSchema = mongoose.Schema({
    name:{
        type:String,
    },
    username: {
        type:String,
    },
    email:{
        type:String
    },
    password:{
        type:String
    }

}, {collection : 'User'});

module.exports = User = mongoose.model('User', UserSchema);

