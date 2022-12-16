module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.createTable('statistics', {
            id: {
                primaryKey: true,
                type: Sequelize.INTEGER.UNSIGNED,
            },
            real_calories: {
                type: Sequelize.FLOAT,
            },
            expected_calories: {
                type: Sequelize.FLOAT,
            },
            is_completed: {
                type: Sequelize.BOOLEAN,
            },
            user_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'users',
                        schema: 'public',
                    },
                    key: 'id',
                },
            },
            date: {
                defaultValue: new Date(),
                notNull: true,
                type: Sequelize.DATE,
            }
        })
    },

    async down(queryInterface) {
        return queryInterface.dropTable('statistics');
    },
};
