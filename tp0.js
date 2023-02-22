 const fs = require ('fs');
// https://jsonplaceholder.typicode.com/posts

// const content = fs.readFileSync('message.txt','utf8');
//   console.log(content);
//   console.log('after calling ReadFile');


 function readAsync(){
    fs.readFile('message.txt','utf8', (content)=> {
        console.log(content);
    });
    console.log('after calling ReadFile');
  
}

function readsync(){
    const content = fs.readFileSync('message.txt','utf8');
  console.log(content);
  console.log('after calling ReadFile');

}

module.exports = {readAsync,readsync};
