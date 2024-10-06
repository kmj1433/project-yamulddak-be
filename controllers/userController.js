const db = require('../config/db');

// 모든 사용자 가져오기
exports.getAllUsers = (callback) => {
  db.query('SELECT * FROM user', callback);
};

// 사용자 추가
exports.addUser = (userData, callback) => {
  const { name, address, address_postcode, address_sub, phone } = userData;
  db.query(
    'INSERT INTO user (name, address, address_postcode, address_sub, phone) VALUES (?, ?, ?, ?, ?)',
    [name, address, address_postcode, address_sub, phone],
    callback
  );
};