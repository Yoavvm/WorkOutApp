const getAll = async (req, res) => {
    console.log('hello')
    try {
        const allUsers = await userLogic.getAllUsers();
        res.json(allUsers);
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'something went wrong'});
    }  
}

module.exports = {
    getAll
}