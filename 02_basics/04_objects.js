const myObj = new Object() //singleton object
// console.log(myObj);

const tinderUser = {} // non-singleton object
tinderUser.id = '123abc';
tinderUser.name = 'Hari';
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

//merge two or more objects

const obj1 = {a:1, b:2}
const obj2 = {c:1, d:2}

const obj3 = {obj1, obj2}
// console.log(obj3);

//Object.assing(target, source1, source2)
const obj4 = Object.assign({}, obj1, obj2)
// console.log(obj4);

//spread operator
const obj5 = {...obj1, ...obj2}
// console.log(obj5);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//Object Destructuring
const course = {
    couserName: "JS tutorial",
    couseFee : '999',
    courseInstructor: "Hitesh"
}

const {courseInstructor} = course;
// console.log(courseInstructor);

const {courseInstructor: instructor} = course;
// console.log(instructor);

