const repo = require('./repo')

const getAll = async () => {

    const allUsers = await repo.getAll();
    return allUsers;
}


module.exports = {
    getAll

}