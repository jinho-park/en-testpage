const fs = require('fs');

function writingQuestion(){
    return new Promise(
        (resolve, reject)=>{
            const data = fs.readFileSync('./src/data/writing/total.txt', 'utf8');
            const main = data.replace(/\n/g, '<br/> ');
            if(main == Error) reject(false);
            resolve(main);
        }
    );
}

function writingProblem(){
    return new Promise(
        (resolve, reject)=>{
            const data = fs.readFileSync('./src/data/writing/independent.txt', 'utf8');
            const main = data.replace(/\n/g, '<br/> ');
            if(main == Error) reject(false);
            resolve(main);
        }
    );
}

function postAnswer(data){
    return new Promise(
        (resolve, reject)=>{
            const solve = fs.writeFileSync('./src/data/writing/'+data.user+'_total_answer.txt', data.userAnswer[0], 'utf8');
            const solve1 = fs.writeFileSync('./src/data/writing/'+data.user+'_independent_answer.txt', data.userAnswer[1], 'utf8');
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
exports.writingProblem = writingProblem;
exports.postAnswer = postAnswer;
exports.audioList = audioList;