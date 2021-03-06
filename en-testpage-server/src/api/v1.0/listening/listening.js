const listening = require('data/listening');
const send = require('send');
const multer = require('multer');

exports.getQuestion = (req, res) => {
    const num = req.params.num;
    listening.readQuestion(num)
            .then((result)=>{
                //console.log(result);
                res.send(result);
            }, (err) => {
                res.send(err);
            })
}

exports.postAnswer = (req, res) => {
    const data = req.body;
    console.log('listening 답안 등록 - 유저 : ' + data.user);
    console.log(data);
    listening.writeAnswer(data)
            .then((result) => {
                res.send(true);
            }, (err) => {
                res.send(err);
            })
}

exports.getListening = (req, res) => {
    const file = req.params.file;
    const path = 'src/data/listening/'+file;
    
    send(req, path)
        .on('error', (err)=>{
            res.statusCode = err.status || 500;
            res.send(err.message);
        })
        .pipe(res);
}

exports.getList = (req, res) => {
    listening.getList()
            .then((result) => {
                res.send(result);
            }, (err) => {
                res.send(err);
            });
}

exports.getPicture = (req, res) => {
    const file = req.params.file;
    const url = 'src/data/listening/'+file;
    send(req, url)
        .on('error', (err) => {
            res.statusCode = err.status || 500;
            res.send(err.message);
        })
        .pipe(res);
}