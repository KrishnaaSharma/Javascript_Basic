
function Avengers (name,age){
    this.name= name,
    this.age= age
    this.Start= function(){
        return 'i am ${this.name} age: ${this.age}'
    }
}

let av = new Avengers('steve', 37)

console.log(av)  // Avengers {name: 'steve', age: 37, Start: ƒ}
console.log(av.name) //  steve
console.log(av.age)// 37
console.log(av.Start()) // constructor.js:15 i am ${this.name} age: ${this.age}

