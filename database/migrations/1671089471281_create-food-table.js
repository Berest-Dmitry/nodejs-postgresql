module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.createTable('food', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING,
                notNull: true
            },
            calories: {
                type: Sequelize.FLOAT,
                notNull: true
            },
            weight: {
                type: Sequelize.FLOAT,
            },
            pfc: {
                type: Sequelize.STRING
            }
        })
    },

    async down(queryInterface) {
        return queryInterface.dropTable('food');
    },
};
