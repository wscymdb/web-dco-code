const mysql = require('mysql2')

// 建立连接池
const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'jack',
  user: 'root',
  password: 'qwerty123',
  connectionLimit: 8, // 连接池连接的最大数量
})

// 执行操作语句，操作数据库
// 使用 ? 占位符
const statment = `SELECT * FROM student WHERE id < ? AND name = ?`

pool
  .promise()
  .execute(statment, [5, '小明'])
  .then((res) => {
    console.log(res[0])
  })
