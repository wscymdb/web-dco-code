const mysql = require('mysql2')

// 建立连接
const connection = mysql.createConnection({
  host: 'localhost',
  database: 'jack',
  port: 3306,
  user: 'root',
  password: 'qwerty123',
})

// 执行操作语句，操作数据库
const statment = `SELECT * FROM student`

connection.query(statment, (err, values, fields) => {
  if (err) throw err
  console.log(values)
  console.log(fields)
})
