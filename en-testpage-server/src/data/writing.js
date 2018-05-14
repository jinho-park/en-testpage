const fs = require('fs');

function writingQuestion(condition){
    return new Promise(
        (resolve, reject)=>{
            const data = fs.readFileSync('./writing/dependent.json', 'utf8');
            if(data == Error) reject(false);
            resolve(data);
        }
    );
}

function writeAnswer(data){
    return new Promise(
        (resolve, reject)=>{
            const solve = fs.writeFileSync('./writing/'+data.user+'_answer.json', data.answer, 'utf8');
            if(solve == undefined) reject(false);
            resolve(true);
        }
    );
}

function audioList(){
    return new Promise(
        (resolve, reject) => {
            const solve = fs.readFileSync('./writing/filelist.json', 'utf8');
            if(solve == undefined) reject(false);
            resolve(true);
        }
    )
}

exports.writingQuestion = writingQuestion;
exports.writeAnswer = writeAnswer;
exports.audioList = audioList;