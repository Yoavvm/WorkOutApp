const { Schema, model} = require('mongoose');

const userSchema = new Schema ({
    userName: {
        type: String,
        unique: true,
        required: true,
        minLength: 4
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    encryptedPassword: {
        type: String,
        required: true
    }

})

const exerciseSchema = new Schema ({
    name: {
        type: String,
        unique: true,
        required: true,
        minLength: 4
    },
    linkToVideo: {
        type: String,
        unique: true,
        required: true
    }
})

const User = model('user', userSchema);
const Exercise = model('exercise', exerciseSchema);

module.exports = {
    User,
    Exercise
}