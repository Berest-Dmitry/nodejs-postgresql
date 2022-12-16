module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.createTable('stickers', {
            id: {
                type: Sequelize.INTEGER.UNSIGNED,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING,
                notNull: true
            }
        });
    },

    async down(queryInterface) {
        return queryInterface.dropTable('stickers');
    },
};