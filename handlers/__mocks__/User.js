const { genCreatedAt, genJWT, genUUUID } = require('../../helpers/index')
class UserHandler {
  static async register(body, sequelize){
    const { user } = body
    const query = 'some query'
    const valuesToInsert = [
      genUUUID(),
      user.name,
      user.lastname,
      user.email,
      genCreatedAt()
    ]
    console.log('valuestoinsert', valuesToInsert)
    try {
      const execQuery = await sequelize.query(query, valuesToInsert)
      const result = execQuery
      console.log('result', result)
      const userWithToken = {
        id: result[0],
        name: result[1],
        lastname: result[2],
        email: result[3],
        token: genJWT(result[3])
      }
      return {
        data: userWithToken
      }
    } catch (e) {
      return { error: true, info: e }
    }
  }
}

module.exports = UserHandler