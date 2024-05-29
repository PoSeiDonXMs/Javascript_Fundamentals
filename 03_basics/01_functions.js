function saymyname(){
    console.log("M");
    console.log("A");
    console.log("D");
    console.log("H");
    console.log("A");
    console.log("V");
}

// saymyname()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){
    // let result = number1+number2
    // return result
    return number1 + number2
}


// const result = addTwoNumbers(3,5)
//  console.log("Result: ", result);

//  function loginUserMessage(){
//     if(!username){
//         console.log("Please enter your username");
//         return
//     }
//     return `${username} just logged in`
//  }

//  console.log(loginUserMessage("Madhav"))

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Madhav"))
// console.log(loginUserMessage("Madhav"))

function calculateCartPrice(val1, val2, ...num1){
    return num1 // ye ... rest operator hai
}
// agar ye val 1 , val 2 laga diya to num1 mei sirf 500 and 2000 jaa rha hai
// console.log(calculateCartPrice(200,400,500,2000))

// const user = {
//     username: "madhav",
//     prices : 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}` );
// }   

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

handleObject(user);

handleObject({
    username: "sam",
    price: 399
})


const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]  
}

console.log(returnSecondValue(myNewArray));
