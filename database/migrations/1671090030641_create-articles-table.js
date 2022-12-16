module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.createTable('articles', {
            id: {
                type: Sequelize.INTEGER.UNSIGNED,
                primaryKey: true
            },
            title: {
                type: Sequelize.STRING,
                notNull: true
            },
            description: {
                type: Sequelize.STRING
            }
        });
    },

    async down(queryInterface) {
        return queryInterface.dropTable('articles');
    },
};