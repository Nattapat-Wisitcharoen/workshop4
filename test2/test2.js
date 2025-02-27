// 1. พื้นฐานของตัวแปรและชนิดข้อมูล
let stringVar = "Hello, World!";
let integerVar = 25;
let booleanVar = true;

console.log("String:", stringVar);
console.log("Integer:", integerVar);
console.log("Boolean:", booleanVar);

let intFromString = parseInt("10");
let floatFromString = parseFloat("3.14");
let stringFromInt = String(100);

console.log("Integer from String:", intFromString, typeof intFromString);
console.log("Float from String:", floatFromString, typeof floatFromString);
console.log("String from Integer:", stringFromInt, typeof stringFromInt);

// 2. สร้างและใช้งานโครงสร้างข้อมูล
let fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Mango");
fruits.splice(1, 1);
fruits[0] = "Grape";
console.log("Fruits Array:", fruits);

let student = { name: "Tom", age: 20, grade: "A" };
console.log("Student Object:", student);

let tupleExample = ["Alice", 22, "B"];
console.log("Tuple Example:", tupleExample);

let numbers = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = new Set(numbers);
console.log("Unique Numbers Set:", [...uniqueNumbers]);

// 3. จัดการ JSON Data
let studentJSON = JSON.stringify(student);
console.log("JSON String:", studentJSON);

let parsedStudent = JSON.parse(studentJSON);
console.log("Parsed JSON Object:", parsedStudent);