const reading = require('data/reading');

exports.getMain = (req, res) => {
    console.log(req.params.num);
    reading.readingMain(req.params.num)
            .then(function(result){
                res.send(result);
            }, (err) => {
                res.send(err);
            });
}

exports.getTotal = (req, res) => {
    reading.readingTotal()
            .then((result) => {
                res.send(result);
            }, (err) => {
                res.end(err);
            });
}

exports.getQuestion = (req, res) => {
    const num = req.params.num;
    reading.readQuestion(num)
        .then(function(result){
            res.send(result);
        }, function(err){
            res.send(err);
        });
}

exports.postAnswer = (req, res) => {
    const data = req.body;
    console.log("reading 답 등록 - 유저 : " + data.user);
    reading.writeAnswer(data)
        .then(function(result){
            res.send(true);
        }, function(err){
            res.send(err);
        });
}