const express = require('express');
const copurchaseController = require('../controllers/copurchaseController');

const router = express.Router();

// 모든 공동구매글 가져오기
router.get('/get-copurchase', copurchaseController.getAllCopurchases);

// 공동구매글 추가
router.post('/add-copurchase', copurchaseController.addCopurchase);

module.exports = router;