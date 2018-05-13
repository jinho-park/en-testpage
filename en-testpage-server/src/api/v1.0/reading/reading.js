const reading = require('data/reading');

exports.getMain = (req, res) => {
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
    console.log(num);
    reading.readQuestion(num)
        .then(function(result){
            res.send(result);
        }, function(err){
            console.log(err);
            res.send(err);
        });
}

exports.postAnswer = (req, res) => {
    const data = req.body;
    console.log(data.user);
    reading.writeAnswer(data)
        .then(function(result){
            console.log(req.body);
            res.send(true);
        }, function(err){
            console.log(err);
            res.send(err);
        });
}