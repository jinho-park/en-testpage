const fs = require('fs');

function readingMain(num){
    return new Promise(
        (resolve, reject) =>{
            var data = fs.readFileSync('./src/data/reading/Main_'+num + '.txt', 'utf8');
            const main = data.replace(/\n/g, '<br/> ');
            if(main == Error) reject(false);
            resolve(main);
        }
    )
}

function readingTotal(){
    return new Promise(
        (resolve, reject) => {
            const data = fs.readFileSync('./src/data/reading/info.json', 'utf8');
            if(data == Error) reject(false);
            resolve(data);
        }
    )
}

function readQuestion(num){
    return new Promise(
        (resolve, reject)=>{
            const data = fs.readFileSync('./src/data/reading/question_'+num+'.json', 'utf8');
            if(data == Error) reject(false);
            resolve(data);
        }
    );
}

function writeAnswer(data){
    return new Promise(
        (resolve, reject)=>{
            console.log(data);
            const solve = fs.writeFileSync('./src/data/reading/'+data.user+'_answer.txt', data.answer, 'utf8');
            if(solve == Error) reject(false);
            resolve(true);
        }
    );
}

exports.readQuestion = readQuestion;
exports.writeAnswer = writeAnswer;
exports.readingTotal = readingTotal;
exports.readingMain = readingMain;