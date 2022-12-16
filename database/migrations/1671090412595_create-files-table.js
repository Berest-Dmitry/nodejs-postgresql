module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.createTable('files', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            path: {
                notNull: true,
                type: Sequelize.STRING
            },
            mime: {
                notNull: true,
                type: Sequelize.STRING
            },
            size: {
                type: Sequelize.STRING,
                notNull: true
            },
            bucket: {
                type: Sequelize.STRING,
                notNull: true
            },
        });
    },

    async down(queryInterface) {
        return queryInterface.dropTable('files');
    },
};
