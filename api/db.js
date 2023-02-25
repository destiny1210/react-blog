import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "Blog"
})
// const {Client} = require('pg')

// const client = new Client({
//     host: "localhost",
//     user: "root",
//     port: "5432",
//     password: "root",
//     database: "Blog"
// });

// client.connect();

// client.query(`Select * from users`, (err, res) =>{
//     if(!err){
//         console.log(res.rows);  
//     } else {
//         console.log(err.message);
//     }
//     client.end;
// })