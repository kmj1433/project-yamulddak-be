const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// 모든 사용자 가져오기
router.get('/get-user', userController.getAllUsers);

// 사용자 추가
router.post('/add-user', userController.addUser);

module.exports = router;
