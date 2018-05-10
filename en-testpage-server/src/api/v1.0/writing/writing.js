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