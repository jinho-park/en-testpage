const fs = require('fs');

function readQuestion(){
    return new Promise(
        (resolve, reject)=>{
            const data = fs.readFileSync('./src/data/reading/question.json', 'utf8');
            if(data == Error) reject(false);
            resolve(data);
        }
    );
}

function writeAnswer(data){
    return new Promise(
        (resolve, reject)=>{
            console.log(data);
            const solve = fs.writeFileSync('./src/data/reading/'+data.user+'_answer.json', data.answer, 'utf8');
            if(solve == Error) reject(false);
            resolve(true);
        }
    );
}

exports.readQuestion = readQuestion;
exports.writeAnswer = writeAnswer;