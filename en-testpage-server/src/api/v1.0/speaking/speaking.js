const speaking = require('data/speaking');
const send = require('send');

exports.getQuestion = (req, res) => {
    speaking.readQuestion()
        .then(function(result){
            res.send(result);
        }, function(err){
            console.log(err);
            res.send(err);
        });
}

exports.postAnswer = (req, res) => {
    const data = req.body;
    console.log("speaking " + data.user);
    speaking.writeAnswer(data)
        .then(function(result){
            res.send(true);
        }, function(err){
            console.log(err);
            res.send(err);
        })
}

exports.getListening = (req, res) => {
    const file = req.params.file;
    const path = 'src/data/speaking/'+file;
    send(req, path)
        .on('error', (err)=>{
            res.statusCode = err.status || 500;
            res.send(err.message);
        })
        .pipe(res);
}

exports.getList = (req, res) => {
    speaking.getList()
            .then((result) => {
                res.send(result);
            }, (err) => {
                res.send(err);
            });
}

exports.getMain = (req, res) => {
    const num = req.params.num;
    speaking.getMain(num)
            .then((result) => {
                res.send(result);
            }, (err) => {
                res.send(err);
            });
}