const { Sequelize, DataTypes } = require('sequelize');
const SessionModel = require('../model/SessionModel');
const UserModel = require('../model/UserModel');

const sequelize = new Sequelize('postgres://postgres:new_password@localhost:5432/usersystem', {
logging: e => console.log("SQL:", e)
})

module.exports = postgres




async function postgres () {
    try {
        let db = {}
        db.users = await UserModel(Sequelize, sequelize)
        db.sessions = await SessionModel(Sequelize, sequelize)
        await db.users.hasMany(db.sessions, {
            foreignKey: {
                name: 'user_id',
                allowNull: false
            }
        })
        // sequelize.sync({ force: true })
        return db
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}