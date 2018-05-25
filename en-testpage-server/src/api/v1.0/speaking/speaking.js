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
    speaking.writeAnswer(data)
        .then(function(result){
            console.log(req.body);
            res.send(true);
        }, function(err){
            console.log(err);
            res.send(err);
        })
}

exports.getList = (req, res) => {
    speaking.getList()
            .then((result) => {
                res.send(result);
            }, (err) => {
                res.send(err);
            });
}

exports.getPicture = (req, res) => {
    const file = req.params.file;
    console.log('image');
    const url = 'src/data/speaking/'+file;
    send(req, url)
        .on('error', (err) => {
            res.statusCode = err.status || 500;
            res.send(err.message);
        })
        .pipe(res);
}