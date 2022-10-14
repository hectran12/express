const express = require('express');
const fs = require('fs');
const os = require('os');
const app = express();

app.get('/', function (req, res) {
    fs.readFile('index.html', 'utf-8', function (err, data) {
        let oz, ram, freeram;

        oz = `Hệ điều hành: ${os.type()}`;
        ram = `Tổng số ram trong máy: ${os.totalmem()/1073741824}GB`;
        freeram = `Ram hiện còn có thể sử: ${os.freemem()/1073741824}GB`;
        
        data = data.replace('TEN_HE_THONG', oz)
        .replace('TONG_SO_RAM', ram)
        .replace('FREE_RAM', freeram);
        res.send(data);
    })
});


app.listen(3000, function () {
    console.log('Alo og oi');
});
