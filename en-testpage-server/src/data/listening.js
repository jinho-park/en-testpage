const fs = require('fs');

function readQuestion(num){
    return new Promise(
        (resolve, reject)=>{
            const data = fs.readFileSync('./src/data/listening/question_'+num+'.json', 'utf8');
            if(data == Error) reject(false);
            resolve(data);
        }
    );
}

function writeAnswer(data){
    return new Promise(
        (resolve, reject)=>{
            const solve = fs.writeFileSync('./src/data/listening/'+data.user+'_answer.txt', data.answer, 'utf8');
            if(solve == undefined) reject(false);
            resolve(true);
        }
    );
}

function getList(){
    return new Promise(
        (resolve, reject) => {
            const list = fs.readFileSync('./src/data/listening/filelist.json', 'utf8');
            if(list == Error) reject(false);
            resolve(list);
        }
    )
}

function getPicture(file){
    return new Promise(
        (resolve, reject) => {
            const image = fs.readFileSync('./src/data/listening/'+file, 'utf8');
            if(image == Error) reject(false);
            resolve(image);
        }
    )
}

exports.readQuestion = readQuestion;
exports.writeAnswer = writeAnswer;
exports.getList = getList;
exports.getPicture = getPicture;