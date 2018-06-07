const fs = require('fs');
var atob = require('atob');
var FileReader = require('filereader');
var base64 = require('base-64');
var Blob = require('w3c-blob');

function readQuestion(){
    return new Promise(
        (resolve, reject)=>{
            const data = fs.readFileSync('./src/data/speaking/question.json', 'utf8');
            if(data == Error) reject(false);
            resolve(data);
        }
    )
}

function writeAnswer(data){
    return new Promise(
        (resolve, reject)=>{
            var arr = data.str.split(',');
            var mime = (arr[0].match(/:(.*?);/))[1];
            var bstr = atob(arr[1]);
            var n = bstr.length;
            var u8arr = new Uint8Array(n);
            var solve;
            while(n--){
                u8arr[n] = bstr.charCodeAt(n);
            }
            var file = new Blob([u8arr], {type:mime});
            var fileReader = new FileReader();
            fileReader.onload = function() {
                solve = fs.writeFileSync('./src/data/speaking/'+data.user+'_answer.wav', Buffer.from(new Uint8Array(this.result)));
            };
            fileReader.readAsArrayBuffer(file);
            //fileReader.readAsBinaryString(file);
            //fileReader.readAsDataURL(file);

            //const solve = fs.writeFileSync('./src/data/speaking/'+data.user+'_answer.wav', saveWav);
            if(solve == undefined) reject(false);
            resolve(true);
        }
    );
}

function getList(){
    return new Promise(
        (resolve, reject) => {
            const list = fs.readFileSync('./src/data/speaking/filelist.json', 'utf8');
            if(list == Error) reject(false);
            resolve(list);
        }
    )
}

function getPicture(file){
    return new Promise(
        (resolve, reject) => {
            const image = fs.readFileSync('./src/data/speaking/'+file, 'utf8');
            if(image == Error) reject(false);
            resolve(image);
        }
    )
}

function downloadBlob(blob, filename){
    const url = window.URL.createObjectURL(blob);
    const click = document.createEvent('Event');
    click.initEvent('click', true, true);
  
    const link = document.createElement('A');
    link.href = url;
    link.download = filename;
    link.dispatchEvent(click);
    link.click();
    return link;
  }

function getMain(num){
    return new Promise(
        (resolve, reject) => {
            const data = fs.readFileSync('./src/data/speaking/Main_'+num + '.txt', 'utf8');
            if(data == Error) reject(false);
            resolve(data);
        }
    )
}

exports.readQuestion = readQuestion;
exports.writeAnswer = writeAnswer;
exports.getList = getList;
exports.getPicture = getPicture;
exports.getMain = getMain;