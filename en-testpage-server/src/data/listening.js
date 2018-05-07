const fs = require('fs');

function readQuestion(){
    return new Promise(
        (resolve, reject)=>{
            const data = fs.readFileSync('./listening/question.json', 'utf8');
            if(data == Error) reject(false);
            resolve(data);
        }
    );
}

function writeAnswer(data){
    return new Promise(
        (resolve, reject)=>{
            const solve = fs.writeFileSync('./listening/answer.json', data, 'utf8');
            if(solve == undefined) reject(false);
            resolve(true);
        }
    );
}

function listeningfile(num){
    return new Promise(
        (resolve, reject) => {
            const solve = fs.readFileSync('./listening/file'+num+'.mp3', 'utf8');
            if(data = Error) reject(false);
            resolve(data);
        }
    )
}

exports.readQuestion = readQuestion;
exports.writeAnswer = writeAnswer;
exports.listeningfile = listeningfile;