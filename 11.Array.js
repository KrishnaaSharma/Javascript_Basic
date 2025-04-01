let number = [10,20,30,40,50];

number.push(60); // add 60 st last
document.write(number, "<br>");


number.pop(60); // remove the last element
document.write(number, "<br>")


number.unshift(60); // remove first element
document.write(number, "<br>")


number.shift(60); // add 60 at start
document.write(number, "<br>")


console.log(number.indexOf(30), "<br>") // output:2

let arr1 = [1,2,3]
let arr2 = [4,5,6]

let mergedarray = arr1.concat(arr2)
console.log(mergedarray) // [1, 2, 3, 4, 5, 6]


let slidearray = number.slice(1,5) // (4) [20, 30, 40, 50]
console.log(slidearray)


let fruit_splice = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
fruit_splice.splice(2, 2, 'mango', 'peach')
console.log(fruit_splice) // (5) ['apple', 'banana', 'mango', 'peach', 'kiwi']