import { Sequelize } from "sequelize";

const db = new Sequelize('database_app','root','eduardo20',{
    host:'localhost',
    dialect:'mysql'
})

export default db