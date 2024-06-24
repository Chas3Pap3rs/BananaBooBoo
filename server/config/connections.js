const mysql = require('mysql2')
const dotenv = require('dotenv')
const path = require('path')

// dotenv.config((path: './config/.env'))
dotenv.config({path: path.join(__dirname, './.env')})

const conn = mysql.createConnection({
    // host: 'localhost',
    // user: 'root',
    // password: ``,
    // port: 3306,
    // database: 'books1'

    host: process.env.HOST,
    user: process.env.DB_USER,
    password:  process.env.PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DATABASE,
})

conn.connect((err) => {
    if (err) {
        console.log('err:' + err)
        throw err 
    }
    else{
        console.log('Connection established to books1 database.')
    }
})

module.exports = conn