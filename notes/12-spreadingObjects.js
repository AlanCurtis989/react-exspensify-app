// spread operator: creates new array
// syntax:
// [...arr];

var arr = [1,2,3,4];
//ex1:
var ex1=[...arr];
console.log(ex1)
//ex2: add to end.
var ex2=[...arr, 5 ,6];
console.log(ex2)
//ex3: add to front.
var ex3=[-2,-1,0,...arr];
console.log(ex3)
//ex4: both
var ex4 = [-2,-1,0,...arr, 5 ,6]
console.log(ex4)


// spread operator on objects
// to use spread object operator had to add plugin
// npm install --save-dev babel-plugin-transform-object-rest-spread
// add add it to the babelrc file under plugins
// "plugins":[
//     "transform-class-properties",
//     "transform-object-rest-spread"
// ]


const user = {
    name:'Jon',
    age: 23
};

console.log({
    ...user,
    location: 'hello', // can add new properties
    age: 55 // can be used to overide exsiting propoties
})