// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "abc123"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn= true
// console.log(tinderUser);

const regularUser= {
    email:"some@gmail.com",
    fullName: {
        userFullName:{
            firstName: "Madhav",
            lastName: "Sharma"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);

const obj1= {1:"a", 2: "b"}
const obj2= {3:"a", 4: "b"}
const obj4= {5:"a", 6: "b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj4, obj1,obj2)
// console.log(obj3);// basically by doing this-->{}, we are targeting obj 1,2,3 in this empty obj, otherwise(2,3) would have targeted 1!!  

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const Users =[
    {
        id:1,
        email:"m@gmail.com"
    },
    {
        id:1,
        email:"m@gmail.com"
    },
    {
        id:1,
        email:"m@gmail.com"
    },

]

Users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

// console.log(Objects.keys)
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
//this is destructuring of objects , basically isse ab zada better aur ezyly call ho rha rather than course.courseInstructor likhna , instructor likhkar hi call kar denge
// console.log(courseInstructor);
console.log(instructor); ///

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]