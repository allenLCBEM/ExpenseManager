// OBJECT DESTRUCTURING


// const person  = {
//     name: 'Allen',
//     age: 47,
//     location: {
//         city: 'Austin',
//         temp: 55    
//     }
// };

// const {name = 'Anon', age} = person;

// console.log(`${name} is ${age}.`);

// const {city, temp: temperature} = person.location;
// if(city && temperature){
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'ego',
//     author: 'bob slob',
//     pub: {
//         //name: 'pendant'
//     }
// }

// const {name: pubnm = 'Self-Pubd'} = book.pub
// console.log(`pub name: ${pubnm}`);

//ARAY DESTRUCTURING

const address = ['123 Main St', 'Waco', 'TX', '12345'];

const [, city, state='OH'] = address;

console.log(`You are in ${city}, ${state}.`)