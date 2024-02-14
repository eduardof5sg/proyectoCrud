import { Sequelize } from "sequelize";

const db = new Sequelize('database_app','root','aitOreduardOwhilak',{
    host:'localhost',
    dialect:'mysql'
})

export default db