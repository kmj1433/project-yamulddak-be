const db = require('../config/db');

// 모든 공동구매글 가져오기
exports.getAllCopurchases = (callback) => {
    db.query('SELECT * FROM copurchase', callback);
};

// 공동구매글 추가
exports.addCopurchase = (copurchaseData, callback) => {
    const {
        user_id,
        title,
        product_name, 
        persons,
        address,
        address_postcode,
        address_sub,
        date_start,
        date_end,
        date_val,
        copurchase_method_id,
        content
    } = copurchaseData;

    const query = `
        INSERT INTO copurchase (
            user_id, title, product_name, persons, address, address_postcode, address_sub, 
            date_start, date_end, date_val, copurchase_method_id, content
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    db.query(query, [
        user_id, title, product_name, persons, address, address_postcode, address_sub, 
        date_start, date_end, date_val, copurchase_method_id, JSON.stringify(content)
    ], callback);
};