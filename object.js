
let person= {
    f_name : 'steve',
    l_name: 'roger',
    'heroic_name': 'Captain American',
    start: function (){
        return 'I am avengers'
    }
}

console.log(person)
console.log(person.f_name)
console.log(person['heroic_name'])
console.log(person.start()) // I am avengers


person.f_name='stevan'
person.start =function () { return'i am now avengers'}

// update new value

console.log(person)
console.log(person.start())

// delete l_name

delete person.l_name
delete person.start

console.log(person) // {f_name: 'stevan', heroic_name: 'Captain American'}