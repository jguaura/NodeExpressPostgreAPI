import Sequelize from 'sequelize'
require('dotenv').config()

//! local DB
// const sequelize = new Sequelize(
//     process.env.DB,
//     process.env.NAME,
//     process.env.PW,
//     {
//         host: process.env.HOST,
//         dialect: 'postgres',
//         pool: {
//             max: 5,
//             min: 0,
//             require: 30000,
//             idle: 10000
//         },
//         logging: false
//     }
// )

//! Heroku DB
const sequelize = new Sequelize(
    process.env.HEROKU_DB,
    process.env.HEROKU_NAME,
    process.env.HEROKU_PW,
    {
        host: process.env.HEROKU_HOST,
        dialect: 'postgres',
        dialectOptions: {ssl: {rejectUnauthorized: false}},
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10
        },
    }
)



export default sequelize