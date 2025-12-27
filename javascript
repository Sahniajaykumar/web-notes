---------------------------🔹 Function in JavaScript-----------------------------------------------------

✅ What is a Function?

A function is a reusable block of code designed to perform a specific task and can be executed (called) whenever needed.

1️⃣ Function Declaration
🔹 Syntax
function functionName(parameters) {
  // code
}

🔹 Example
function add(a, b) {
  return a + b;
}

console.log(add(5, 3));

🔹 Output
8

🔹 Explanation

Function is defined using function keyword

Reusable and hoisted

Called using function name

2️⃣ Function Expression
🔹 Syntax
let variable = function(parameters) {
  // code
};

🔹 Example
let greet = function(name) {
  return "Hello " + name;
};

console.log(greet("Ajay"));

🔹 Output
Hello Ajay

🔹 Explanation

Function stored in variable

Not hoisted

Treated as an object

3️⃣ Arrow Function (ES6)
🔹 Syntax
let fn = (params) => expression;

🔹 Example
let square = (n) => n * n;

console.log(square(4));

🔹 Output
16

🔹 Explanation

Shorter syntax

No own this

Used in modern JS

4️⃣ Function with Return Value
🔹 Example
function multiply(a, b) {
  return a * b;
}

console.log(multiply(4, 5));

🔹 Output
20

🔹 Explanation

return sends value back

Function stops execution after return

5️⃣ Function Without Return (Void)
🔹 Example
function showMessage() {
  console.log("Welcome");
}

showMessage();

🔹 Output
Welcome

🔹 Explanation

No return value

Used for side effects

6️⃣ Function as an Object
🔹 Example
function demo() {}
demo.type = "example";

console.log(demo.type);

🔹 Output
example

🔹 Explanation

Functions can have properties

Proof that function is an object

7️⃣ Function Passed as Argument (Callback)
🔹 Example
function process(fn) {
  fn();
}

function sayHi() {
  console.log("Hi");
}

process(sayHi);

🔹 Output
Hi

🔹 Explanation

Function passed as parameter

Used in async & event handling

8️⃣ Function Returning Function
🔹 Example
function outer() {
  return function inner() {
    return "Inner";
  };
}

let f = outer();
console.log(f());

🔹 Output
Inner

🔹 Explanation

Supports closures

Functional programming concept


--------------------------🔹 Function Types in JavaScript (Based on Input & Output)-------------------------------------

✅ 1️⃣ No Input & No Output
🔹 Syntax
function functionName() {
  // statements
}

🔹 Example
function greet() {
  console.log("Hello Ajay");
}

greet();

🔹 Output
Hello Ajay

🔹 Explanation

Function does not take parameters

Function does not return any value

Used for displaying messages or logging

✅ 2️⃣ No Input but Return Output
🔹 Syntax
function functionName() {
  return value;
}

🔹 Example
function getMessage() {
  return "Welcome Ajay";
}

console.log(getMessage());

🔹 Output
Welcome Ajay

🔹 Explanation

Function has no parameters

Uses return to send output

Used when output is fixed or internally calculated

✅ 3️⃣ Takes Input but No Output (No Return)
🔹 Syntax
function functionName(parameters) {
  // logic
}

🔹 Example
function showSquare(n) {
  console.log(n * n);
}

showSquare(5);

🔹 Output
25

🔹 Explanation

Function accepts input

Does not return value (undefined)

Used for printing, logging, UI updates

✅ 4️⃣ Takes Input and Return Output (Most Common)
🔹 Syntax
function functionName(parameters) {
  return value;
}

🔹 Example
function add(a, b) {
  return a + b;
}

console.log(add(10, 20));

🔹 Output
30

🔹 Explanation

Function accepts input

Returns processed result

Used for calculations and business logic


-----------------------------------------🔹 Hoisting in JavaScript------------------------------------------------------

✅ What is Hoisting?

Hoisting is JavaScript’s default behavior of moving variable and function declarations to the top of their scope before execution.

⚠️ Only declarations are hoisted, not initializations.

1️⃣ Function Hoisting (MOST IMPORTANT)
🔹 Example
sayHello();

function sayHello() {
  console.log("Hello Ajay");
}

🔹 Output
Hello Ajay

🔹 Explanation

Function declarations are fully hoisted

You can call the function before its definition

2️⃣ Variable Hoisting with var
🔹 Example
console.log(x);
var x = 10;

🔹 Output
undefined

🔹 Explanation

var x is hoisted

Initialization (=10) is NOT hoisted

JS treats it as:

var x;
console.log(x);
x = 10;

3️⃣ Hoisting with let
🔹 Example
console.log(a);
let a = 5;

❌ Output
ReferenceError: Cannot access 'a' before initialization

🔹 Explanation

let is hoisted but in Temporal Dead Zone (TDZ)

Cannot access before declaration

4️⃣ Hoisting with const
🔹 Example
console.log(b);
const b = 10;

❌ Output
ReferenceError: Cannot access 'b' before initialization

🔹 Explanation

Same as let

Must be initialized at declaration

5️⃣ Function Expression Hoisting (TRICKY)
🔹 Example
sayHi();

var sayHi = function () {
  console.log("Hi");
};

❌ Output
TypeError: sayHi is not a function

🔹 Explanation

Variable sayHi is hoisted as undefined

Function body is not hoisted

6️⃣ Arrow Function Hoisting
🔹 Example
greet();

const greet = () => {
  console.log("Hello");
};

❌ Output
ReferenceError: Cannot access 'greet' before initialization

🔹 Explanation

Arrow functions behave like let/const

Not hoisted like normal functions



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

----------------🔥 Interview quastions for pass by --------------------------------------------

Question 1 : Will the original value change? Why?

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


-------------------------pass by references-----------------------------------------------------------

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

----------------------Function as object or first class citizen ----------------------------------------

🔹 Function as an Object in JavaScript : 


✅ 1️⃣ Function Assigned to a Variable
🔹 Syntax
let variableName = function() {
  // function body
};

🔹 Example
let greet = function () {
  return "Hello Ajay";
};

console.log(greet());

🔹 Output
Hello Ajay

🔹 Explanation

Function is stored in a variable

Variables can store objects

Hence, function is treated as an object

✅ 2️⃣ Function Has Properties
🔹 Syntax
functionName.propertyName = value;

🔹 Example
function study() {
  console.log("Studying");
}

study.subject = "Math";

console.log(study.subject);

🔹 Output
Math

🔹 Explanation

Properties can be added dynamically

Only objects can have properties

So, function is an object

✅ 3️⃣ Function Passed as Argument (Callback)
🔹 Syntax
function fn(callback) {
  callback();
}

🔹 Example
function sayHello() {
  console.log("Hello");
}

function execute(fn) {
  fn();
}

execute(sayHello);

🔹 Output
Hello

🔹 Explanation

Function passed like a value

Known as callback function

Proves first-class object behavior

✅ 4️⃣ Function Returned from Another Function
🔹 Syntax
function outer() {
  return function inner() {};
}

🔹 Example
function outer() {
  return function inner() {
    return "Inner Function";
  };
}

let result = outer();
console.log(result());

🔹 Output
Inner Function

🔹 Explanation

Function returned like an object

Enables closures

Shows functions behave as objects

✅ 5️⃣ Function Has Built-in Properties
🔹 Syntax
functionName.property

🔹 Example
function demo(a, b) {}

console.log(demo.length);
console.log(demo.name);

🔹 Output
2
demo

🔹 Explanation

.length → number of parameters

.name → function name

Functions contain metadata like objects

✅ 6️⃣ Function Has Methods (call())
🔹 Syntax
functionName.call(object, args);

🔹 Example
function show(city) {
  return this.name + " from " + city;
}

let person = { name: "Ajay" };

console.log(show.call(person, "Delhi"));

🔹 Output
Ajay from Delhi

🔹 Explanation

.call() is an object method

Function borrows context using this

Confirms function behaves as object

📌 FINAL INTERVIEW ONE-LINE ANSWER

In JavaScript, functions are first-class objects. They can be assigned to variables, have properties and methods, be passed as arguments, and returned from other functions.


--------------------------🔹 Object-Oriented Programming (OOP) in JavaScript -----------------------------------------------

✅ What is OOP?

Object-Oriented Programming is a programming paradigm that organizes code using objects that contain data (properties) and behavior (methods).

JavaScript supports OOP using:

Objects

Constructor functions

Prototypes

ES6 Classes (syntactic sugar)

🔥 Four Pillars of OOP in JavaScript
1️⃣ Encapsulation
🔹 Definition

Binding data and methods together inside a single unit (object).

🔹 Syntax / Example
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }

  study() {
    console.log(this.name + " is studying");
  }
}

let s1 = new Student("Ajay", "A");
s1.study();

🔹 Output
Ajay is studying

🔹 Explanation

Data (name, grade) and behavior (study) are wrapped together

Accessed using object reference

2️⃣ Abstraction
🔹 Definition

Hiding implementation details and showing only essential features.

🔹 Example
class Car {
  start() {
    this.#engineOn();
    console.log("Car started");
  }

  #engineOn() {
    console.log("Engine running");
  }
}

let car = new Car();
car.start();

🔹 Output
Engine running
Car started

🔹 Explanation

User interacts only with start()

Internal method #engineOn() is hidden

3️⃣ Inheritance
🔹 Definition

One class acquiring properties and methods of another class.

🔹 Syntax / Example
class Person {
  greet() {
    console.log("Hello");
  }
}

class Student extends Person {
  study() {
    console.log("Student is studying");
  }
}

let s = new Student();
s.greet();
s.study();

🔹 Output
Hello
Student is studying

🔹 Explanation

Student inherits Person

Code reusability achieved

4️⃣ Polymorphism
🔹 Definition

Same method name, different behavior.

🔹 Example
class Animal {
  sound() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Dog barks");
  }
}

let a = new Animal();
let d = new Dog();

a.sound();
d.sound();

🔹 Output
Animal sound
Dog barks

🔹 Explanation

Method overriding

Same method behaves differently

🔹 Constructor Function (Before ES6)
function Student(name) {
  this.name = name;
}

Student.prototype.study = function () {
  console.log(this.name + " is studying");
};

let s1 = new Student("Ajay");
s1.study();

🔹 Prototype-Based OOP (Core JS Concept)
let person = {
  greet() {
    console.log("Hello");
  }
};

let student = Object.create(person);
student.greet();

📌 Interview One-Line Answer

JavaScript supports object-oriented programming using objects, prototypes, and ES6 classes, implementing encapsulation, abstraction, inheritance, and polymorphism.


-------------------🚀 Learn How to Take User Input in JavaScript ?--------------------------------

Taking input from the user is one of the first and most important steps when learning programming.
 Here’s how you can do it easily in JavaScript 👇

💻 In Browser:

let name = prompt("Enter your name:");
alert("Hello, " + name + "!");

⚙️ In Node.js (VS Code / Terminal):

First install the package using : npm install prompt-sync

const input = require("prompt-sync")();
let name = input("Enter your name: ");
console.log("Hello, " + name + "!");

Run program using : node filename.js

-------------------------------------------------------------------------------------------------------------------------------------

📌 What is DOM (Document Object Model)?

The DOM is a programming interface provided by the browser that represents an HTML (or XML) document as a tree of objects.

👉 It allows JavaScript to:
--> Read HTML elements
--> Modify content and styles
--> Add/remove elements
--> Handle user interactions (events)

🔑 Important:
The DOM is not JavaScript — it is a Web API provided by the browser.

📄 HTML              vs             DOM
------------------------------------------------
HTML                                DOM
Static text file          |         In-memory object representation                     
Written by developer      |         Created by browser after parsing HTML
Loaded once               |         Dynamic and mutable

Example:
<p id="msg">Hello</p>

DOM representation:
--------------------
Document
 └── html
     └── body
         └── p (id="msg")
             └── "Hello"

🌳 DOM Tree Structure (Node Hierarchy)
------------------------------------------------
--> Every part of HTML becomes a node in the DOM.

Types of Nodes: 
Node Type               |              	Example
Document Node	          |                document
Element Node	          |                <div>, <p>
Text Node	              |                Text inside elements
Attribute Node	        |                id, class

🧠 How Browser Builds DOM (Critical for Performance)
--> Browser receives HTML
--> Parses HTML → builds DOM Tree
--> Parses CSS → builds CSSOM
--> DOM + CSSOM → Render Tree
--> Layout & Paint

⚠️ DOM manipulation is expensive because it may trigger:
--> Reflow (layout recalculation)
--> Repaint (visual redraw)

🔍 Accessing DOM Elements
-------------------------------
1️⃣ By ID
document.getElementById("title");

2️⃣ By Class
document.getElementsByClassName("box");

3️⃣ By Tag
document.getElementsByTagName("p");

4️⃣ Modern Selectors (Recommended)
document.querySelector(".box");
document.querySelectorAll("p");


✔ querySelector → first match
✔ querySelectorAll → NodeList

✏️ Reading & Modifying DOM
----------------------------------
Change Text
element.innerText = "Hello";
element.textContent = "Hello";
element.innerHTML = "<b>Hello</b>";

🔑 Differences:

innerText → respects CSS
textContent → faster, raw text
innerHTML → parses HTML (security risk if misused)

🎨 Changing Styles & Classes
----------------------------------
Inline Style
element.style.color = "red";

Class Manipulation (Best Practice)
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("active");

➕ Creating & Removing Elements
-------------------------------------
Create Element
const div = document.createElement("div");
div.innerText = "New Div";
document.body.appendChild(div);

Remove Element
div.remove();

🧭 DOM Traversal
---------------------
Move around the DOM tree.

element.parentNode
element.children
element.firstElementChild
element.lastElementChild
element.nextElementSibling
element.previousElementSibling

Note: Used heavily in dynamic UI logic
------------------------------------------------------------------------------------------------------------------------------------------

🖱️ Event Handling (Very Important)
----------------------------------------
Add Event Listener
-------------------
button.addEventListener("click", () => {
  alert("Clicked");
});

Event Object
-----------------
button.addEventListener("click", (event) => {
  console.log(event.target);
});

🔁 Event Propagation

1️⃣ Event Bubbling (Default)
--> Event flows child → parent

2️⃣ Event Capturing
--> Event flows parent → child

parent.addEventListener("click", handler, true); // capture

🎯 Event Delegation (Interview Favorite ⭐)
--> Instead of adding listeners to multiple elements, add one listener to parent.

ul.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.innerText);
  }
});


✔ Better performance

✔ Used in React internally

🚀 DOM Performance Optimization
---------------------------------
❌ Bad:

for (...) {
  document.body.appendChild(el);
}


✅ Good:
----------
const fragment = document.createDocumentFragment();
fragment.appendChild(el);
document.body.appendChild(fragment);

Best Practices:
--> Minimize DOM access
--> Batch updates
--> Use event delegation
--> Avoid frequent layout changes

⚛️ DOM            vs           Virtual DOM (React Angle)
-----------------------------------------------------------------
DOM	                            Virtual DOM
Real browser tree	     |        JS object copy
Slow updates	         |        Fast diffing
Direct manipulation	   |        Efficient re-render
Used by JS	           |        Used by React

Note: 👉 React updates Virtual DOM, then syncs minimal changes to real DOM.

🧪 Common Interview Questions
Q1: Is DOM part of JavaScript?

❌ No
✔ It’s a Browser API

Q2: Why is DOM manipulation slow?

✔ Causes reflow & repaint

Q3: Difference between innerText and textContent?

✔ textContent is faster and ignores styles

Q4: What is event delegation?

✔ Handling events at parent using bubbling

✅ Final Summary (One-Liner for Interview)

“The DOM is a browser-provided tree-like object model of an HTML document that allows JavaScript to dynamically read, modify, and handle user interactions efficiently.”
