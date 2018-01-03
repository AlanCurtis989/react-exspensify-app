

// OBJECT DESTRUCTURING
const person = {
    name: 'Alan',
    age: 26,
    location: {
        city: 'Salt Lake City',
        temp: 92
    }
};

// const { name, age } = person;
// console.log( `Name: ${name}, Age: ${age}. `);

// you can change the variable name.
const {city, temp: tempeture} = person.location;
if (city && tempeture){
    console.log(` it is ${tempeture} in ${city}`)
}

// you can set default value if none comes in.
const { name = "Anonymous", age } = person;
console.log( `Name: ${name}, Age: ${age}. `);


const book = {
    book:'Title',
    author: 'Author',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = "self published" } = book.publisher;

console.log(publisherName);


//---------------------------------------------

// Array Destructuring

const address = ['1132 S Aspen View Dr', 'South Jordan', 'Utah', '84096'];

const [street, myCity, state, zip] = address;

console.log(`You are in ${street} in ${myCity}`);

const item = ['coffee', '2.00', '3.00', '4.00']

const [itemName, small, medium, large] = item;
console.log(` a ${itemName} size ${small}`);



