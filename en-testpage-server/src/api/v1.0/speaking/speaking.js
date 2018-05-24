const speaking = require('data/speaking');

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
    console.log("postAnswer()...");
    //console.log(data);
    speaking.writeAnswer(data)
        .then(function(result){
            console.log(req.body);
            res.send(true);
        }, function(err){
            console.log(err);
            res.send(err);
        })
}