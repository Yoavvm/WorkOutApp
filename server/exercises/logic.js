const repo = require('./repo')

const getAll = async () => {

    const allExercises = await repo.getAll();
    return allExercises;
}

const createExercise = async (newExercise) => {

    await repo.createExercise(newExercise);
    
    const allExercises = await repo.getAll();
    return allExercises;
}


module.exports = {
    getAll,
    createExercise

}