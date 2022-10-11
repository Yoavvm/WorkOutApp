const { Exercise } = require('../database/models');

const getAll = async () => {
    const allExercises = await Exercise.find();
    return allExercises;
}

const createExercise = async (newExercise) => {
    const savedExercise = await Exercise.create(newExercise);
    savedExercise.save();
    return newExercise;
}


module.exports = {
    getAll,
    createExercise
}