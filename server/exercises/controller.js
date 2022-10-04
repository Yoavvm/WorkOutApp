const logic = require('./logic');

const getAll = async (req, res) => {

    try {
        const allExercises = await logic.getAll();
        res.json(allExercises);
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'something went wrong'});
    }  
}

module.exports = {
    getAll
}