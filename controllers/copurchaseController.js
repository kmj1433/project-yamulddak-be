const copurchaseModel = require('../models/copurchaseModel');

// 모든 공동구매글 가져오기
exports.getAllCopurchases = (req, res) => {
    copurchaseModel.getAllCopurchases((error, results) => {
        if (error) {
            console.error('Error fetching copurchases:', error);
            return res.status(500).json({ message: '공동구매 목록을 불러오는 중 오류가 발생했습니다.' });
        }
        res.status(200).json(results);
    });
};

// 공동구매글 추가
exports.addCopurchase = (req, res) => {
    const copurchaseData = req.body;

    copurchaseModel.addCopurchase(copurchaseData, (error, result) => {
        if (error) {
            console.error('Error adding copurchase:', error);
            return res.status(500).json({ message: '공동구매글을 추가하는 중 오류가 발생했습니다.' });
        }

        console.log('데이터베이스 저장: ', result);
        res.status(201).json({
            message: '공동구매글이 성공적으로 추가되었습니다.',
            copurchaseId: result.insertId
        });
    });
};