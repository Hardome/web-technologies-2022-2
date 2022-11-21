// Задание 1
const students = [
    {name: "Павел", age: 20},
    {name: "Иван", age: 20},
    {name: "Эдем", age: 20},
    {name: "Денис", age: 20},
    {name: "Виктория", age: 20},
    {age: 40}
]

const result = pickPropArray(students, "name");

console.log(result);

// [ 'Павел', 'Иван', 'Эдем', 'Денис', 'Виктория' ]

function pickPropArray(students, propertyName) {
    return students.filter(student => student[propertyName] != null).map(student => student[propertyName])
}

// Задание 2
function createCounter() {
    let count = 1
    return function () {
        return count++;
    }
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2

console.log(counter2()); // 1
console.log(counter2()); // 2

// Задание 3
function spinWords(str) {
    let words = str.split(" ");
    words = words.map(word => word.length > 4 ? word.split("").reverse().join("") : word)
    return words.join(" ")
}

const result1 = spinWords("Привет от Legacy")
console.log(result1) // тевирП от ycageL

const result2 = spinWords("This is a test")
console.log(result2) // This is a test

//Задание 4
function findTarget(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

console.log(findTarget([2, 7, 11, 15], 9))