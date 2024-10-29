const db = require('../config/db');

// 모든 사용자 가져오기
exports.getAllUsers = (callback) => {
    db.query('SELECT * FROM user', callback);
};

// 사용자 추가
exports.addUser = (userData, callback) => {
    const { name, nickname, address, address_postcode, email } = userData;
    db.query(
        'INSERT INTO user (name, nickname, address, address_postcode, email) VALUES (?, ?, ?, ?, ?)',
        [name, nickname, address, address_postcode, email],
        callback
    );
};