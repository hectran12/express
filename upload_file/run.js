const express = require('express');
const fs = require('fs');
var formidable = require('formidable');
const app = express();


app.get('/', function (req, res) {
    fs.readFile('./index.html', 'utf-8', function(err, data) {
        if(err) {
            res.send('Lỗi rồi');
        } else {
            res.send(data);
        }
    });
});

app.post('/upload_image', function (req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var oldpath = files.profile_image.filepath;
        var newpath = files.profile_image.originalFilename;
        fs.rename(oldpath, './' + newpath, function (err, data) {
            if(err) {
                res.send('Upload that bai');
            } else {
                res.send('Upload thanh cong');
            }
        });
    });
});

app.listen(3000, function () {
    console.log('Đã online');
})
