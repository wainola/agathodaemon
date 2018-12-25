const { genUUUID, genCreatedAt, genJWT } = require('../helpers/index');
class UserHandler {
  static async register(body, sequelize) {
    const { user } = body;
    const query = `
    INSERT INTO users (id, name, lastname, email, created) VALUES (?,?,?,?,?) RETURNING *`;
    const valuesToInsert = [
      genUUUID(),
      user.name,
      user.lastname,
      user.email,
      genCreatedAt()
    ];
    try {
      const execQuery = await sequelize.query(query, {
        replacements: valuesToInsert
      });
      const result = await execQuery;
      if (Array.isArray(result)) {
        const [user] = result;

        const jwt = genJWT(user[0].email);

        const userWithToken = {
          ...user[0],
          token: jwt
        };

        return {
          data: userWithToken
        };
      }
    } catch (e) {
      return { error: true, info: e };
    }
  }
}
module.exports = UserHandler;
