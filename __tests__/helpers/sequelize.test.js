const Sequelize = require('../../helpers/__mocks__/Sequelize')

const sequelize = new Sequelize();

describe('Sequelize', () => {
    it('should return a promise when using the query method', async () => {
        const queryToExec = 'some query';
        const valuesToInsert = [
            'John',
            'Doe',
            'john@email.com'
        ]
        const query = await sequelize.query(queryToExec, valuesToInsert)
        expect(query).toHaveLength(1)
    })
})