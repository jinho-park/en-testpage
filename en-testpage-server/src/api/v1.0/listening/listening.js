const listening = require('data/listening');
const send = require('send');

exports.getQuestion = (req, res) => {
    res.send('listening get question');
}

exports.postAnswer = (req, res) => {
    res.send('listening post answer');
}

exports.getListening = (req, res) => {
    const num = req.params.num;
    const path = 'src/data/listening/'+num;
    console.log('get listening data');
    
    send(req, path)
        .on('error', (err)=>{
            console.log('error');
            res.statuscCode = err.status || 500;
            res.end(err.message);
        })
        .pipe(res);
}