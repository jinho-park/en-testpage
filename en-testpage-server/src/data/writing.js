const fs = require('fs');

function readQuestion(){
    return new Promise(
        (resolve, reject)=>{
            const data = fs.readFileSync('./writing/question.json', 'utf8');
            if(data == Error) reject(false);
            resolve(data);
        }
    );
}

function writeAnswer(data){
    return new Promise(
        (resolve, reject)=>{
            const solve = fs.writeFileSync('./writing/'+data.user+'answer.json', data.answer, 'utf8');
            if(solve == undefined) reject(false);
            resolve(true);
        }
    );
}

exports.readQuestion = readQuestion;
exports.writeAnswer = writeAnswer;