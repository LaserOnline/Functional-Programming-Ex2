// * Higher-Order Functions

const persons = [
    { name: "John", age:17},
    { name: "JoJo", age:15},
    { name: "JoStar", age:25},
]

// * Filter

const kids = persons.filter(persons => 
     persons.age <= 20
);

console.log('Kids',kids)

// * Filter

// * Map

const olderPersons = persons.map((persons)=> {
    return {
        ...persons,
        age: persons.age * 2
    }
});

console.log('Older Persons',olderPersons)

// * Map


// * Reduce
const totalAge = persons.reduce((age,person) => {
    return age + person.age
},0)

console.log('totalAge',totalAge)
// * Reduce

persons.forEach(persons=> {
    console.log(`Name ${persons.name}, age ${persons.age}`)
})

const jojo = persons.find((person) => {
    return person.name === 'JoJo';
})

const Index = persons.findIndex(person => person.name === 'JoStar')

console.log(`Index`,Index)

const isKid = persons.every((persons) => {
    return persons.age <= 20;
})

console.log(`isKid`,isKid)

const isKids = persons.some((persons) => {
    return persons.age <= 15;
})

console.log(`isKids`,isKids)