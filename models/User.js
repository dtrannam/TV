const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    login: {type: String,
            required: true},
    password: {type: String,
            required: true},
    tracker: [{
        tvmaze: Number,
        url: String,
        name: String,
        season: {
            type: Number,
            default: 1
        },
        episode: {
            type: Number,
            default: 1
        },
        watchDate: {
            type: Date,
            default: Date.now 
        },
        completed: {
            type: Boolean,
            default: false
        }
        }]
})

module.exports = Users = mongoose.model('user', UserSchema)