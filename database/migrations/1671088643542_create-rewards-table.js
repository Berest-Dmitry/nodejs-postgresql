module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.createTable('rewards', {
            id: {
                type: Sequelize.INTEGER.UNSIGNED,
                primaryKey: true
            },
            title: {
                notNull: true,
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.STRING,
            },
            cost: {
                notNull: true,
                type: Sequelize.INTEGER,
            },
        })
    },

    async down(queryInterface) {
        return queryInterface.dropTable('rewards');
    },
};

