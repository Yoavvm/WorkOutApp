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
    exerciseName: {
        type: String,
        unique: true,
        required: true,
        minLength: 2
    },
    videoUrl: {
        type: String,
        required: true,
        minLength: 2
    }, 
})

const User = model('user', userSchema);
const Exercise = model('exercise', exerciseSchema);

module.exports = {
    User, Exercise
}