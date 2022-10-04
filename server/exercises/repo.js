const { Exercise } = require('../database/models');

const getAll = async () => {
    const allExercises = await Exercise.find();
    return allExercises;
}


module.exports = {
    getAll
}