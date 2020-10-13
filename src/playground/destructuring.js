// const person ={
//     name: 'Richerd',
//     age:37,
//     location:{
//         city:'Boston',
//         temp:50
//     }
// };

// const {name= 'Anonyomus',age} = person

// console.log(`${name} is ${age}`)

// const {temp:temperature =90,city} = person.location

// if(temperature && city)
// console.log(`Its ${temperature} in ${city}`)

// const book ={
//     title:'Ego is the enemy',
//     author:'Ryan',
//     pubisher:{
//         name:'Penguin'
//     }
// }

// const {title,author} = book;
// const {name:publisherName= 'Self publish'} = book.pubisher

// console.log(publisherName)



const address =['319 wellman ave', 'Chelmsford', 'MA','01863']

const [,city,state='guam'] = address

console.log(`you are in ${city} ${state}`)

const items =['coffee (hot)',' $2.00','$2.5','$2.75']
const [name,,cost] = items
console.log(`Amedium ${name} costs ${cost}`)