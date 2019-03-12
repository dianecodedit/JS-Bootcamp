let myBook = {
    title: "1984",
    author:"George Orwell",
    pageCount: 326
}

console.log(myBook.title);

myBook.title = "Animal Farm"


console.log(myBook.title);

let person = {
    name: "Diane",
    age: 28,
    location: "Christchurch"
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)

person.age++

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)
