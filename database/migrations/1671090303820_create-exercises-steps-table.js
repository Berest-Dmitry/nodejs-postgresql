module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.createTable('exercise_steps', {
            id: {
                type: Sequelize.INTEGER.UNSIGNED,
                primaryKey: true
            },
            text: {
                type: Sequelize.INTEGER.UNSIGNED,
                notNull: true
            },
            exercise_id: {
                type: Sequelize.INTEGER.UNSIGNED,
                references: {
                    model: {
                        tableName: 'exercises',
                        schema: 'public',
                    },
                    key: 'id',
                },
            }
        });
    },

    async down(queryInterface) {
        return queryInterface.dropTable('exercise_steps');
    },
};