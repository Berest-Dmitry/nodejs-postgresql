module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.createTable('sticker_logs', {
            id: {
                type: Sequelize.INTEGER.UNSIGNED,
                primaryKey: true
            },
            sticker_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'stickers',
                        schema: 'public',
                    },
                    key: 'id',
                },
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
            }
        });
    },

    async down(queryInterface) {
        return queryInterface.dropTable('sticker_logs');
    },
};
