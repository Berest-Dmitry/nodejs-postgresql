module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.createTable('exercises', {
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
            },
            date: {
                defaultValue: new Date(),
                notNull: true,
                type: Sequelize.DATE,
            }
        });
    },

    async down(queryInterface) {
        return queryInterface.dropTable('exercises');
    },
};