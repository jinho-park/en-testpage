exports.getQuestion = (req, res) => {
    res.send('listening get question');
}

exports.postAnswer = (req, res) => {
    res.send('listening post answer');
}

exports.getListening = (req, res) => {
    const num = req.params.num;
    console.log(num);
    res.send('listening file send');
}