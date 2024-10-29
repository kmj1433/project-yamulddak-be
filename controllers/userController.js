const userModel = require('../models/userModel');

// 모든 사용자 가져오기
exports.getAllUsers = (req, res) => {
  userModel.getAllUsers((err, results) => {
    if (err) {
      res.status(500).json({ error: '서버 오류' });
    } else {
      res.json(results);
    }
  });
};

// 사용자 추가
exports.addUser = (req, res) => {
  userModel.addUser(req.body, (err, result) => {
    if (err) {
      console.error('사용자 추가 실패:', err);
      res.status(500).json({ error: '사용자 추가 실패' });
    } else {
      res.status(201).json({ message: '사용자 추가 성공', insertId: result.insertId });
    }
  });
};

