const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoute');
const copurchaseRoutes = require('./routes/copurchaseRoute');

const app = express();
app.use(cors());
app.use(express.json());

// 라우트 설정
app.use('/api', userRoutes);
app.use('/api', copurchaseRoutes);

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`📍 서버가 ${PORT}번 포트에서 실행 중입니다.`);
});
