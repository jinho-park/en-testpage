const reading = require('data/reading');

exports.getQuestion = (req, res) => {
    reading.readQuestion()
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
        }, function(error){
            console.log(err);
            res.send(err);
        });
}