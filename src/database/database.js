import Sequelize from 'sequelize'
require('dotenv').config()

const sequelize = new Sequelize(
    process.env.DB,
    process.env.NAME,
    process.env.PW,
    {
        host: process.env.HOST,
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
)

console.log(process.env.DB)
console.log(process.env.NAME)
console.log(process.env.PW)

export default sequelize