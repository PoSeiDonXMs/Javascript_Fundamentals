const marvel_heros = ["thor" , "ironaman", "loki"]
const dc_heros = ["batman" , "superman" ,"joker"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); // this basically pushes the array as a single element only
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros); // this will segregate all the elements of dc heros and join with marvel heros

const all_heros = [...marvel_heros , ...dc_heros]
console.log(all_heros);
// this is basically breaking all the array elements and then giving in the new array : Analogy : glass breaks and spreads all over

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Madhav"))
console.log(Array.from("Madhav"))
console.log(Array.from({name:"Madhav"})) // interesting case as we have to tell him that what to make array , give either key or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));



