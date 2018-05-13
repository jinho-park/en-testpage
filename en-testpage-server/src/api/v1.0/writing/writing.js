const writing = require('data/writing');

exports.getQuestion = (req, res) => {
    writing.writingQuestion()
            .then((result) => {
                res.send(result);
            }, (error) => {
                res.send(error);
            });
}

exports.postAnswer = (req, res) =>{
    const data = req.body;
    
    writing.writeAnswer(data)
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