const mysql = require('mysql2');
require('dotenv').config();
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) {
      console.error('❌ MySQL 연결 실패:', err.message); // 연결 실패 시 메시지 출력
    } else {
      console.log('✅ MySQL 연결 성공'); // 연결 성공 시 메시지 출력
    }
  });

module.exports = db;