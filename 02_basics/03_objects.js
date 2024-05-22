//singleton
//object.create

//object literals

const mySym = Symbol("key1")


const JsUser = {
    name:"Madhav",
    "full name": "Madhav Sharma",
    [mySym]:"myKey1", // this is syntax 
    age:18,
    location:"Delhi",
    email:"madhav@google.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday", "Saturday"]

}

// console.log(JsUser.email); // not good way to access object , wont work everywhere
// console.log(JsUser["email"]); // right way of accessing by placing square brackets
// console.log(JsUser["full name"]);// if someone made an object in comma , then only square brackets will work , . method doesen't work
// console.log(JsUser[mySym]);


// JsUser.email = "madhav@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "madhav@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo=function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
