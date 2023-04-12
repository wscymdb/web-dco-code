const mysql = require('mysql2')

// 建立连接池
const pool = mysql.createPool({
  host: 'localhost',
  database: 'jack',
  user: 'root',
  password: 'qwerty123',
  poolLimit: 8, // 连接池连接的最大数量
})

// 执行操作语句，操作数据库
// 使用 ? 占位符
const statment = `SELECT * FROM student WHERE id < ? AND name = ?`

// 使用预处理语句 不能使用query了 query表示执行的是普通语句
// 要使用execute()
// 使用[]存放占位符真正的数据
pool.execute(statment, [4, '小明'], (err, values) => {
  if (err) throw err
  console.log(values)
})
