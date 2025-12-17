--------------------------------------------------🔹 Object Creation in JavaScript ?--------------------------------------------------

👉 Total Common Ways: 5 (Interview Standard)
  ---------------------------------------------

1️⃣ Object Literal (Most Common)
  ---------------------------------- 
let obj = {
  name: "Ajay",
  age: 25
};

✔️ Simple
✔️ Most used
✔️ Fast creation

  ---------------------------- Json formate object creation ----------------------------------------
Eg : let a = {
  studentName: "ajay",
  studentEmail: "ajaysahni@gmail.com",
  studentMobile: "7542055096",
  studentGrade: "A",

  study: function () {
    console.log("Students are studying in schools");
  },

  sleep: function () {
    console.log("Student can sleep for 20 minutes");
  }
};

// Access object properties
console.log(a.studentName);
console.log(a.studentEmail);
console.log(a.studentMobile);
console.log(a.studentGrade);

// Call object methods
a.study();
a.sleep();

-----------------------------------------------------------
  
2️⃣ Using new Object() : 
 -------------------------- 
let obj = new Object();
obj.name = "Ajay";
obj.age = 25;


❌ Less preferred
✔️ Interview concept

3️⃣ Constructor Function
  -------------------------
function Student(name, age) {
  this.name = name;
  this.age = age;
}

let s1 = new Student("Ajay", 25);


✔️ Before ES6
✔️ Uses new keyword

4️⃣ ES6 Class (Modern Way)
  --------------------------------
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let s1 = new Student("Ajay", 25);


✔️ Clean syntax
✔️ Industry standard

5️⃣ Object.create()
  ------------------------
let parent = {
  greet() {
    console.log("Hello");
  }
};

let child = Object.create(parent);
child.name = "Ajay";


✔️ Prototype-based
✔️ Advanced concept



  .

--------------------------------------------🔹 What is Pass by Value in JavaScript?-----------------------------------------------------------

Pass by Value means a copy of the variable’s value is passed to a function.
Changes made inside the function do NOT affect the original variable.

✅ Pass by Value Applies To

Primitive data types:

number

string

boolean

null

undefined

symbol

bigint

✅ Example 1: Pass by Value (Primitive)
function changeValue(x) {
  x = 20;
  console.log("Inside function:", x);
}

let a = 10;
changeValue(a);
console.log("Outside function:", a);

🔹 Output
Inside function: 20
Outside function: 10


✔️ Original value NOT changed
✔️ a is passed as a copy

🧠 Memory Explanation
a = 10   → copy →  x = 10


Changing x does not affect a.

❌ Common Confusion

People think JavaScript is pass by reference — ❌ WRONG

👉 JavaScript is always pass by value

But for objects, the value passed is a reference (important interview line).

🔹 Example 2: Pass by Value with String
function updateName(name) {
  name = "Rahul";
}

let student = "Ajay";
updateName(student);
console.log(student);

Output
Ajay

🔥 Objects Case (Interview Trap)
function updateObj(obj) {
  obj.age = 30;
}

let person = { age: 25 };
updateObj(person);

console.log(person.age);

Output
30


❓ Why did object change?

✔️ Because:

A copy of the reference is passed

Both point to the same object in memory

👉 Still pass by value, but value = reference

❌ Reassigning Object (No Change)
function changeObj(obj) {
  obj = { age: 40 };
}

let person = { age: 25 };
changeObj(person);

console.log(person.age);

Output
25


✔️ Reference changed locally
✔️ Original object untouched


🔥 Interview Question 1

Will the original value change? Why?

function increment(x) {
  x = x + 1;
}

let num = 10;
increment(num);
console.log(num);

✅ Answer
10

🎯 Interview Explanation

num is a primitive

A copy of the value is passed

JavaScript is pass by value

Original value remains unchanged

🔥 Interview Question 2

What is the output? Explain.

function updateName(name) {
  name = "Rahul";
}

let student = "Ajay";
updateName(student);
console.log(student);

✅ Output
Ajay

🎯 Explanation

String is immutable

Function receives a copy

Reassignment does not affect original

🔥 Interview Question 3 (TRICKY 🔥)

JavaScript pass by value or reference?

function updateAge(person) {
  person.age = 30;
}

let person = { age: 25 };
updateAge(person);
console.log(person.age);

✅ Output
30

🎯 Interview-Correct Explanation

JavaScript is pass by value, but the value passed for objects is a reference, so modifying object properties affects the original object.

🔥 Interview Question 4 (TRAP QUESTION)

Why doesn’t this change the object?

function changePerson(person) {
  person = { age: 40 };
}

let p = { age: 25 };
changePerson(p);
console.log(p.age);

✅ Output
25

🎯 Explanation

Reference is passed by value

Reassigning reference does not affect original

Only property mutation affects original object

🔥 Interview Question 5 (Array Case)
function addItem(arr) {
  arr.push(4);
}

let nums = [1, 2, 3];
addItem(nums);
console.log(nums);

✅ Output
[1, 2, 3, 4]

🎯 Explanation

Arrays are objects

Reference copy passed

Mutation reflects outside

🔥 Interview Question 6 (Reassignment with Array)
function replaceArray(arr) {
  arr = [10, 20];
}

let nums = [1, 2, 3];
replaceArray(nums);
console.log(nums);

✅ Output
[1, 2, 3]

📌 Final Interview One-Liner (MEMORIZE THIS)

JavaScript is always pass by value. For objects and arrays, the value passed is the reference, which allows modification of their contents but not reassignment.

🧠 Bonus: If Interviewer Pushes You

Q: Is JavaScript pass by reference?
A: ❌ No. It is pass by value — object references are passed by value.



  ❌ First, the Truth (Very Important)

JavaScript does NOT support pass by reference.
JavaScript is ALWAYS pass by value.

⚠️ Interviewers often check whether you know this clearly.

✅ Then Why Do People Say “Pass by Reference”?

Because objects behave LIKE pass by reference, but technically they are pass by value of reference.

🔥 Interview-Style Explanation
Interview Question:

Does JavaScript support pass by reference?

✅ Correct Answer:

No. JavaScript is always pass by value.
For objects and arrays, the value passed is a reference to the object, which allows modifying the object’s properties.

🔹 Example 1: Looks Like Pass by Reference
function update(obj) {
  obj.name = "Rahul";
}

let person = { name: "Ajay" };
update(person);

console.log(person.name);

✅ Output
Rahul

🎯 Interview Explanation

A copy of the reference is passed

Both point to the same object

Property mutation affects original

👉 People wrongly call this pass by reference

🔹 Example 2: Proof It Is NOT Pass by Reference
function change(obj) {
  obj = { name: "Rahul" };
}

let person = { name: "Ajay" };
change(person);

console.log(person.name);

✅ Output
Ajay

🎯 Why?

Reference is passed by value

Reassigning reference affects only local variable

Original object unchanged

✔️ If it were pass by reference, this would change the object — but it doesn’t.

🔥 Array Example (Interview Favorite)
function modify(arr) {
  arr.push(4);
}

let nums = [1, 2, 3];
modify(nums);

console.log(nums);

Output
[1, 2, 3, 4]


✔️ Same reason — reference value passed

🧠 Memory Explanation (One Line)
person → reference → { name: "Ajay" }
copy of reference → function parameter


  
