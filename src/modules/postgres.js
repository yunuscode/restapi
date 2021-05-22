const { Sequelize, DataTypes } = require('sequelize');
const SessionModel = require('../model/SessionModel');
const UserModel = require('../model/UserModel');
const AdminModel = require('../model/AdminModel');
const FileModel = require('../model/FileModel');
const BlogModel = require('../model/BlogModel');

const sequelize = new Sequelize('postgres://postgres:new_password@localhost:5432/usersystem', {
// logging: e => console.log("SQL:", e)
})

module.exports = postgres




async function postgres () {
    try {
        let db = {}
        db.users = await UserModel(Sequelize, sequelize)
        db.sessions = await SessionModel(Sequelize, sequelize)
        db.admins = await AdminModel(Sequelize, sequelize)
        db.files = await FileModel(Sequelize, sequelize)
        db.blogs = await BlogModel(Sequelize, sequelize)
        await db.users.hasMany(db.sessions, {
            foreignKey: {
                name: 'user_id',
                allowNull: false
            }
        })
        await db.users.hasOne(db.admins, {
            foreignKey: {
                name: 'user_id',
                allowNull: false
            }
        })
        await db.users.hasMany(db.files, {
            foreignKey: {
                name: 'user_id',
                allowNull: false
            }
        })
        await db.files.belongsTo(db.users, {
            foreignKey: {
                name: 'user_id'
            }
        })

        ///

        await db.users.hasMany(db.blogs, {
            foreignKey: {
                name: "user_id",
                allowNull: false
            }
        })

        await db.blogs.belongsTo(db.users, {
            foreignKey: {
                name: "user_id",
                allowNull: false
            }
        })

        await db.files.hasMany(db.blogs, {
            foreignKey: {
                name: 'media_id',
                allowNull: true
            }
        })

        await db.blogs.belongsTo(db.files, {
            foreignKey: {
                name: 'media_id',
                allowNull: true
            }
        })


        // sequelize.sync({ force: true })
        return db
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

