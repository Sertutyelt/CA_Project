const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000; // 使用環境變量中的PORT或默認3000端口

app.use(bodyParser.json()); // 使用body-parser中間件解析JSON格式的請求體

app.post('/webhook', (req, res) => {
    console.log('Received a webhook event:', req.body); // 打印接收到的請求主體
    res.status(200).send('OK'); // 響應HTTP 200和'OK'消息
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`); // 啟動服務器並在控制台打印運行端口
});
