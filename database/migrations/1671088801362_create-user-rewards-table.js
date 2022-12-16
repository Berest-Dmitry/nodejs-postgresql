module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.createTable('user_rewards', {
            id: {
                primaryKey: true,
                type: Sequelize.INTEGER.UNSIGNED,
            },
            reward_id: {
                references: {
                    model: {
                        tableName: 'rewards',
                        schema: 'public',
                    },
                    key: 'id',
                },
                type: Sequelize.INTEGER,
            },
            user_id: {
                references: {
                    model: {
                        tableName: 'users',
                        schema: 'public',
                    },
                    key: 'id',
                },
                type: Sequelize.INTEGER,
            },
            date: {
                notNull: true,
                type: Sequelize.DATE,
            }
        })
    },

    async down(queryInterface) {
        return queryInterface.dropTable('user_rewards');
    },
};
