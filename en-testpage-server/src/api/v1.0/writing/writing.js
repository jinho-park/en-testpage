const writing = require('data/writing');
const send = require('send');

exports.getQuestion = (req, res) => {
    writing.writingQuestion()
            .then((result) => {
                res.send(result);
            }, (error) => {
                res.send(error);
            });
}

exports.getProblem = (req, res) => {
    writing.writingProblem()
            .then((result) => {
                res.send(result);
            }, (err) => {
                res.send(err);
            });
}

exports.postAnswer = (req, res) =>{

    console.log(req.body);
    //console.log("Writing 답안 등록 - 유저 : " + data.user);
    
    writing.postAnswer(req.body)
            .then((result)=>{
                res.send(true);
            }, (err)=>{
                res.send(err);
            });
}

exports.getListen = (req, res) => {
    const file = req.params.file;
    const path = 'src/data/writing/' + file;

    send(req, path)
        .on('error', (err) => {
            console.log('write listening file error');
            res.stateCode = err.status || 500;
            res.send(err.message);
        })
        .pipe(res);
}

exports.getList = (req, res) => {
    writing.audioList()
            .then((result) => {
                res.send(result);
            }, (err) => {
                res.send(err);
            });
}