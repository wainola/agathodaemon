class Sequelize {
    constructor(){}
    async query(queryToExec, valuesToInsert){
        return await new Promise(resolve => {
            resolve(valuesToInsert)
        })
    }
}

module.exports = Sequelize