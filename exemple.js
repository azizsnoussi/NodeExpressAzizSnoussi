console.log('Début');
setTimeout( ()=> {
    console.log("callback 1");

    setTimeout( ()=> {
        console.log("callback 2");
    },1000);

    console.log("callback 3");

},2000);
console.log('Fin');

