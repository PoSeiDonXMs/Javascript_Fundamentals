// var c = 300
let a = 300 
if(true){   // using var is a bad practice since it can also be accessed outside the scope also . this thing can not be done with var and let
    let a = 10
    const b = 20 
    // console.log("INNER", a);
    var c = 200
}

// for ( let i = 0; i <array.length;i++){
//     const element = array[i];
// }

console.log(a);
// console.log(b);
console.log(c);  // in the output is giving 200 but this shouldnt be possible || only possible because we are using var  



function one(){
    const username = "Madhav"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);  ye to error de degi , scope ke bahar hai 

     two()

}

one()

if(true) {
    const username = "Madhav"
    if(username === 'Madhav') {
        const website = "Youtube"
         console.log(username + website);
    }
    // console.log(website);
}


