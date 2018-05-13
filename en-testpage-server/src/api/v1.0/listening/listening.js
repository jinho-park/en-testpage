const listening = require('data/listening');
const send = require('send');

exports.getQuestion = (req, res) => {
    const num = req.params.num;
    listening.readQuestion(num)
            .then((result)=>{
                res.send(result);
            }, (err) => {
                res.send(err);
            })
}

exports.postAnswer = (req, res) => {
    const data = req.body;

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
    console.log('get listening data');
    
    send(req, path)
        .on('error', (err)=>{
            console.log('error');
            res.statusCode = err.status || 500;
            res.send(err.message);
        })
        .pipe(res);
}

exports.getList = (req, res) => {
    console.log('getlist');
    listening.getList()
            .then((result) => {
                res.send(result);
            }, (err) => {
                res.send(err);
            });
}