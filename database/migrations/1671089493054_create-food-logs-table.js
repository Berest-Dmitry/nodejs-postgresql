module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.createTable('food_logs', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            statistic_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'statistics',
                        schema: 'public',
                    },
                    key: 'id',
                },
            },
            food_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'food',
                        schema: 'public',
                    },
                    key: 'id',
                },
            },
            is_eaten: {
                type: Sequelize.BOOLEAN,
            }
        });
    },

    async down(queryInterface) {
        return queryInterface.dropTable('food_logs');
    },
};
