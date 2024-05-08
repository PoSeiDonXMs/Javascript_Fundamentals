const name = "madhav"
const repoCount = 50
//  console.log(name + repoCount + "value"); 
// this is the old way of writing 

 console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);
 // this is the modern way of writing with backticks
 
 const gameName = new String('madhav-sh-com')
//  console.log(gameName[0]);
//  console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
// The name itself is describing the meaning
console.log(gameName.charAt(2)); // outputs that character at that index
console.log(gameName.indexOf('a'));// outputs the index value for that character

const newString = gameName.substring(0, 4)
console.log(newString);

const newStringOne = "   madhav    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://madhav.com/madhav%20sharma"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));