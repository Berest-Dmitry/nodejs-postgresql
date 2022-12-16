module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER.UNSIGNED,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING,
                notNull: true
            },
            login: {
                type: Sequelize.STRING,
                notNull: true
            },
            password: {
                type: Sequelize.STRING,
                notNull: true
            },
            gender: {
                type: Sequelize.STRING,
            },
            height: {
                type: Sequelize.FLOAT,
            },
            weight: {
                type: Sequelize.FLOAT,
            },
            birthdate: {
                defaultValue: new Date(),
                notNull: true,
                type: Sequelize.DATE,
            },
            role: {
                notNull: true,
                type: Sequelize.INTEGER,
            },
        })
    },

    async down(queryInterface) {
        return queryInterface.dropTable('users');
    },
};



