const user = {
    username : "madhav",
    price: 999,

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);

    }
} 
user.welcomeMessage()
user.username="Sam"
user.welcomeMessage()  // basically the context has been changes matlab values change kar di to output bhi change ho jaayega


console.log(this); // ye basically {} --> matlab ek empty object dega but phle to sirf browers mei hi chala paate the , tab node , dino jaise standalone engine nhi the , tab this console.log par window aata tha jo sare click , execute sab capture karta tha 

function chai(){
    // let username = "Madhav"
    // console.log(this);    // ye karne par bohot saari values aati hai matlab kuch to rakha hai node ke andar 
}

chai()

// const chai1 = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai1()

const chai1 =  () => {  // ye arrow function hai
    let username = "hitesh"
    // console.log(this);
}


chai1()  //  arrow function mein bhi empty bracket hi aa rha hai , undefined hi hai matlab

// const addTwo = (num1, num2) => (num1 + num2)
// const addTwo = (num1, num2) => ({username: "hitesh"})

 const addTwo = (num1, num2) => ( num1 + num2 ) // aise bhi run ho jaata hai aur output same phle ki tarah hi aayega 

 // simple diiference hai ye ki agar { } -- curly brackets use kara to return likhna hoga 
 // par agar paranthesis () use kara to return nhi likhna hoga 
console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

// Arrow ends here!!!
// Next topic is iife!!!

