const fs = require('fs');

function writingQuestion(condition){
    return new Promise(
        (resolve, reject)=>{
            const data = fs.readFileSync('./src/data/writing/dependent.json', 'utf8');
            if(data == Error) reject(false);
            resolve(data);
        }
    );
}

function postAnswer(data){
    return new Promise(
        (resolve, reject)=>{
            const solve = fs.writeFileSync('./src/data/writing/'+data.user+'_answer.json', data.userAnswer, 'utf8');
            if(solve == Error) reject(false);
            resolve(true);
        }
    );
}

function audioList(){
    return new Promise(
        (resolve, reject) => {
            const solve = fs.readFileSync('./src/data/writing/filelist.json', 'utf8');
            if(solve == Error) reject(false);
            resolve(solve);
        }
    )
}

exports.writingQuestion = writingQuestion;
exports.postAnswer = postAnswer;
exports.audioList = audioList;