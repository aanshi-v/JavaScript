// live server extension in VS Code
// Code runner extension in Vs Code
// Babel JavaScript extension

console.log("Hello world")

var myName = 'Aanshi Vishwakarma'     // values and Variables
console.log(myName)
console.log(typeof(myName))         //typeof operator to know datatype
var a = true
console.log(a)
console.log(typeof(a))

console.log(10 + "20")                    // o/p: 1020
console.log(9 - "5")                     //output: 4, its like a bug
console.log("Java  " + "Script")
console.log("" + "")
console.log("" + 0)
console.log("Aanshi" - "Vishwakarma")     //not a number NAN
console.log(true + true)                  //o/p: 2,because true=1
console.log(true + false)                 //o/p: 1, coz false=0
console.log(false + false)
console.log(false - false)
console.log(false - true)               //o/p: -1

//Question 1: Difference between null and undefined__________________________
var a1 = null
console.log("value of a1: ", a1)
console.log(typeof(a1))      //2nd JS bug. coz null should not be object

var a2                   //not assigned any value so it will give undefined output
console.log(a2)
console.log(typeof(a2))
//______________________________________________________________________

var phoneNo = 9876543210
var myName = 'Aanshi'
console.log(isNaN(phoneNo))       //false
console.log(isNaN(myName))        //true

if(isNaN(myName)){
    console.log("Plz enter valid phone no")
}


console.log(NaN === NaN) 
console.log(Number.NaN === NaN)
console.log(isNaN(NaN))
console.log(isNaN(Number.NaN))
console.log(Number.isNaN(NaN))

/**************************************************************************** */
//Expression and Operator_____
// Assignment Operator: =
// Arithmethic Operator: +, -, /, *, %, x++, ++x, x--, --x
// Comparizon Operator: ==, !=, >, <, >=, <= 
// Logical Operator: &&, ||, !
// String Operator: concatenation operator +
// Conditional (ternary) Operator:    variableName = (Condition)? value1: value2

var x = 5
var y = 5
console.log(x == y)                             //true
console.log("are x and y equal: " + x == y)      //false, coz of + operator
console.log("are x and y equal: ", x == y)       //true
console.log(`are x and u equal: ${x == y}`)       //true

var num = 5
var newNum = num++
console.log("num: ", num)
console.log("newNum: ", newNum)
//var newNum2 = num++ + 5
//console.log("newNum2: ", num)
//console.log("newNum3: ", newNum2)

var num = 5
var newNum = ++num
console.log("num: ", num)
console.log("newNum: ", newNum)

var num = 5
var newNum = num--
console.log("num: ", num)
console.log("newNum: ", newNum)

var num = 5
var newNum = --num
console.log("num: ", num)
console.log("newNum: ", newNum)

var a = 30
var b = -20
console.log(a > b || b > 0 || b < 0) 
console.log(!(a > b || b > 0 || b < 0) )
console.log(!true)

console.log(3**5)         //3 to the power of 5 or 3 raised to power of 5
console.log(10 ** -1)     //is equal to 1/10

//Q 2: write a program to swap to number
var a = 5
var b = 10
var c = b   //c = 10
b = a //b = 5
a = c //a = 10
console.log("a: "+  a +"  " + "b: "+ b)
//console.log("b: ", b)

//Q 3: write a program to swap to number without using 3rd variable
var a = 5
var b = 10
a = a + b  //a=5+10=15
b = a - b  //b=15-10=5
a = a - b  //a=15-5=10
console.log("a: "+  a +"  " + "b: "+ b)

//Q 4: Difference between == and ===
var num1 = 5
var num2 = '5'
console.log(num1 == num2)     // == checks only value
console.log(num1 === num2)   //=== checks values as well as datatype

/***************************************************************************** */
//Control statements and loops
// if...else
// switch
// while loop
// do - while loop
// for loop
// for in loop
// for of loop
// conditional (ternary) operator

var tomr = 'sunny'
if(tomr == 'rainy'){
    console.log("take a rain coat")
}else{
    console.log('no need to take rain coat')
}

//Q 5: write a program that works out whether if a given years is leap year or not
 var year = 2020
 debugger;
 if( year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 === 0){
            console.log("The year " + year + " is a leap year")
        }else{
            console.log("The year " + year + " is not a leap year")
        }
    }else{
        console.log("The year " + year + " is a leap year")
    }
 }else{
    console.log("The year " + year + " is not a leap year")
 }
//________________________________________________________________________
 //Q 6: what is truthy and falsy values in JavaScript
 //There are 5 falsy values in Javascript: 0, "", undefined, null, NaN, false
 if(score = 0){
    console.log("OMG, we loss the game")
 }else{
    console.log("Yey, we won the game")
 }
//_________________________________________________________
 if(true){
    console.log("OMG, we loss the game")
 }else{
    console.log("Yey, we won the game")
 }
//_________________________________________________________
//Ternary operator
//variableName = (Condition)? value1: value2
var age = 17
console.log((age >= 18) ? "you can vote" : "You can't vote")
//____________________________________________________________

// Function Definition
// Calling a function
// function parameter
// Function Argument
// Function Expression
// return keyword
// Anonymous function = function without name
//______________________________________________
function sum(a, b){                  // function parameter
console.log(a + b)
}
sum(4, 7)                            // Function Argument and Calling a function
//______________________________________________

function sum(a, b){
    return (a + b)
}
//console.log(sum(8, 9)) 
var funExpresion = sum(8, 9)         //function expression
console.log(funExpresion) 
//__________________________________________________
 
var anonymousFun = function(a, b){          //Anonymous function
    return a+b
}
console.log(anonymousFun(3,5))

//********************************************************** */

// ECMAScript 2015/ ES6:-
// let and const
// Template String (template literals): `${ }`
// Default argument
// Rest operator
// Destructuring
// Object property
// Arrow function:  const functionName = () => { } or const functionName = () => `${ }`
// Spread operator

//Q 7: Difference between let, const and var

var a = 3
console.log(a)
a = 5
console.log(a)

let b = 6
console.log(b)
b = 2
console.log(b)

const c = 8
console.log(c)
c = 7
console.log(c)

//var => function scope
//let and const => block scope

function biodata(){
var firstName = 'Aanshi'
if(true){
    var lastName = 'Vishwakarma'
    console.log("inner last name: " + lastName)
    console.log("inner first name: " + firstName)
}
console.log("inner outer last name: "+ lastName)
}
//console.log("outer first name: " + firstName)        //will get error
biodata();
//____________________________________________________

function biodata(){
    let firstName = 'Aanshi'
    if(true){
        let lastName = 'Vishwakarma'
        console.log("inner last name: " + lastName)
        console.log("inner first name: " + firstName)
    }
    console.log("inner outer last name: "+ lastName)      //in case of let, will get error here, coz lastName will be accessible withing inner block { }
    }
 //   console.log("outer first name: " + firstName)         // here will get error, variable can't be accessess outside of function
    biodata();
//__________________________________________________________

// Template String (template literals)
for(let num = 1; num <= 10; num++){
    let tableof = 8
 //   console.log(tableof + " * " + num + " = " + tableof*num)
    console.log(`${tableof} * ${num} = ${tableof * num}`)           //`` its called backtick
}
//____________________________________________________________

// Default argument, default parameter
function mult(a, b){
    return a*b
}
console.log(mult(4))     //output- NaN

function mult(a, b = 3){       //default parameter
    return a*b
}
console.log(mult(4))
//________________________________________________________________

// Fat Arrow function
const mult = () => {
    return `the multiplication of two no is: ${(a = 4) * (b = 8)}`
}
console.log(mult()) 
//or
const mult = () => `the mult of two no is: ${(a = 4) * (b = 8)}`
console.log(mult()) 
//or with parameters
const mult = (a,b) => `the mult of two no is: ${a * b}`
console.log(mult(3, 5)) 
//or
const mult = (a,b = 2) => `the mult of two no is: ${a * b}`
console.log(mult(3)) 


/********_____Array_____*****************************************/
//In JavaScript, element of different data type can also be added in a array
// Traversal of Array
// Searching and Filter in an array
// How to Sort and Compare an array
// How to insert, add, replace and delete elements in an array(CRUD)
// Map(), Reduce(), Filter()

var people = ['Aanshi', "Aish", 'Aashi', 'Nikki']
console.log(people[0])
console.log(people.length)
console.log(people[people.length - 1])

//Q 8: Difference between for...in loop and for...of loop
var arr1 = ['Aanshi', 'Aish', 'Aashi', 'Nikki', 8, 3, 4.5]
for(var i = 0; i<arr1.length; i++){
    console.log(arr1[i]);
}

var arr2 = ['Aanshi', 'Aish', 'Aashi', 'Nikki', 8, 3, 4.5]
for(let elements in arr2){                                  //in for..in loop, variable retuen index of element array
 //   console.log(arr2[elements])
    console.log(elements)
}

var arr3 = ['Aanshi', 'Aish', 'Aashi', 'Nikki', 8, 3, 4.5]
for(let elements of arr3){                                //in for..of loop, varible return element of array
    console.log(elements)
}

//____For each loop_______________________________________________________
var arr4 = [4,  8, 2, 9]
arr4.forEach(function(element, index, array){
//console.log("element: " + element + " index: " + index + " Array: " + arr4)
console.log(`element: ${element} index: ${index} Array: ${arr4}`)
})
//or
var arr4 = [6,  8, 2, 9]
arr4.forEach((e, i, a) => {
    console.log(`element: ${e} index: ${i} Array: ${a}`)
})

//_________Searching in an array________________________________

var array = [4, 8, 3, 9, 8, 6, 10]
console.log(array.indexOf(8))
console.log(array.indexOf(8, 2))      //here it will search 8 from 2nd index no in forward direction
console.log(array.lastIndexOf(8))     //it search from backward direction
console.log(array.lastIndexOf(8, 3))   //it will search 8 from index no 3 in backward direction
console.log(array.includes(8))         //it checks whether 8 is present in array or not
console.log(array.includes(9, 4))     //it search in forward direction, here it search whether 9 is present from 4 index no or not

//__________Filter in an array__________________________________________

const price = [300, 200, 250, 400, 600, 500]
const findPrice = price.find((currentVal) => {    //find() returns only one value, here it not returning all values which is less then 400
    return currentVal < 400
})
console.log(findPrice) 
//or we can write in one line of above code
console.log(price.find((currentVal) => currentVal < 400))

console.log(price.findIndex((currentVal) => currentVal < 400))   //here, findIndex() returns index no of 200

//Question: what value return find() and findIndex() and filter() if value is not present in array or if condition does not satisfy
//Ans: find() return undefined and findIndex() return -1 and filter() returns empty array

console.log(price.filter((currentVal) => currentVal < 400))  //here, filter() returns all values which is less then 400

console.log(price.filter((currentVal) => currentVal > 1300)) //if condition does not setisty then it will teruen empty array


//___________Sort and Compare in array______________________________________

const mon = ['April', 'January', 'Mar', 'June']
console.log(mon.sort())

const num1 = [1, 30, 4, 21, 100000, 99]
console.log(num1.sort())        //it does not work for numbers. here, firstly it convert number into string then comparing only 1st number

const num2 = [2, 1, 5, 6, 3, 8]
console.log(num2.sort())

//_____________________

let y = [28,12,5,78,3,89,2]
console.log(y.sort((a,b)=> a-b));       //here its working on number


const array1 = [1,30,4,21,10000000000,99,40,121,17];
const asc1 = array1.sort(function(a,b){
    return  a - b;
})
console.log(asc1);


const arrayDesc = [1, 30, 4, 21, 10000000000, 99, 40, 121, 17];
const desc1 = arrayDesc.sort((a, b) => b - a);
console.log(desc1);


//_______________CRUD________________________________________________
//push() methos adds elements in an array at end and return length of the new array
const arr = [3, 6, 2, 8]
const newArr = arr.push(9, 4)   
console.log(arr)
console.log(newArr)

//unshift() methos adds elements at beginning of the array and return the length
const arr1 = [3, 6, 2, 8]
arr1.unshift(7, 2)  
console.log(arr1)
console.log(arr1.unshift(7, 2))

//pop() removes last element from an array and return that element
const arr2 = [5, 2, 1, 9]
console.log(arr2)
console.log(arr2.pop())           //output: 9
console.log(arr2)

//shift() removes first element from an array and return that element
const arr2 = [5, 2, 1, 9]
console.log(arr2)
console.log(arr2.shift())           //output: 5
console.log(arr2)

//________________
//Q1:Add Dec at the end of array using splice()
//Q2:what is return value of splice method:  returns all deleted elements
//Q3:update mar to march
//Q4:Delete Jun from an array

//sol:1
const months = ['Jan', 'Mar', 'Apr', 'Jun', 'July']
months.splice(months.length, 0, "Dec")               //here 0 means we don't have to delete element
console.log(months) 

//Add Oct at 3rd last of arrar
const m = ['Jan', 'Mar', 'Apr', 'Jun', 'July']
m.splice(m.length - 2, 0, "Oct")
console.log(m)

const m2nd = ['Jan', 'Mar', 'Apr', 'Jun', 'July']
m2nd.splice(2 , 0, "Oct")          //adding at 2nd index no
console.log(m2nd)

//sol:2
const m1 = ['Jan', 'Mar', 'Apr', 'Jun', 'July']
const newm1 = m1.splice(m1.length - 2, 0, "Oct")   //splice() returns all deleted elements,
console.log(newm1)                //So in this case, we haven't deleted any element, so it return empty array

//sol:3
const m2 = ['Jan', 'Mar', 'Apr', 'Jun', 'July']
const updateM2 = m2.splice(1, 1, 'March')   //splice(index number of exist element, here deleteing 1 element, that updated element name)
console.log(m2)

//update using indexof() method_______________
const m3 = ['Jan', 'Mar', 'Apr', 'Jun', 'July', 'Aug']
const indexOfElement = m3.indexOf('Apr')
console.log(`index of Apr: ${indexOfElement}`)
if(indexOfElement != -1){
    m3.splice(indexOfElement, 1, 'April')
    console.log(m3)
}else{
    console.log('No such data found')
} 
//______________________________________________
//sol:4: Delete element

const m4 = ['Jan', 'Feb', 'Oct', 'Dec','March', 'Apr', 'May']
const indexOfOct = m4.indexOf('Oct')
const indexOfDec = m4.indexOf('Dec')
console.log(`index of Oct: ${indexOfOct}`)
console.log(`index of Dec: ${indexOfDec}`)
if(indexOfOct != -1  && indexOfDec != -1){
    const deletedElements1 = m4.splice(indexOfOct, 2)      //deleting 2 elements from index no 2
    console.log(m4)
    console.log(`Deleted elements: ${deletedElements1} `)
}else{
    console.log('No such element found')
} 
//___________________________________________________
//delete all data after specified index no
const arrNum = [3, 8, 6, 1, 3, 0, 6, 9]
console.log(arrNum.indexOf(6))
const d = arrNum.splice(arrNum.indexOf(6), Infinity)
console.log(arrNum)
console.log(d)
//_____________________________________________


//**************************************************************************** */
//map() : returns new array, containing the result of calling a function on every element in array
//arr1.map(() => {}) : arrow function
//() : callback function

const arr1 = [1, 4, 9, 16, 25]             
let newArr1 = arr1.map((element, index, array) => {
  return    element > 9
}) 
console.log(arr1)     
console.log(newArr1) 
//______________________________________

const a1 = [4, 2, 1, 6, 7]
let newa1 = a1.map((e, i, a) => {
return `element= ${e} index= ${i} array= ${a}`
})
console.log(newa1)
//_________________________________________________
//Q: Difference between forEach and map() functions
//forEach return undefined value and map return new array
//__________________________________________________

const a1 = [4, 2, 1, 6, 7]
let newa2 = a1.forEach((e, i, a) => {
return `element= ${e} index= ${i} array= ${a}`
//console.log(`element= ${e} index= ${i} array= ${a}`)
})
console.log(newa2)
//___________________________________________________

//Q 9: Find squalre root of each element in a array
// let arr1 = [25, 36, 9, 49]
// let arrSqr = arr1.map((element) => {
// return Math.sqrt(element)
// })
// console.log(arrSqr)
// let arr1 = [25, 36, 9, 49]
// let arrSqr = arr1.map((element) => Math.sqrt(element))
// console.log(arrSqr)
let arr1 = [25, 36, 9, 49]
arr1.map((element) => console.log(Math.sqrt(element)))

//or
// let arr1 = [25, 36, 9, 49]
// arr1.forEach((element) => {
// console.log(Math.sqrt(element))
// })
let arr1 = [25, 36, 9, 49]
arr1.forEach((element) => console.log(Math.sqrt(element)))
//____________________________________________________

//Q 10: return those elemnts which is greater then 10 using map() and filter(), we will use chaining
let arr5 = [4, 7, 2, 1, 10, 13]
let newArr5 = arr5.map((element) => {
return element * 2
}).filter((element) => {
    return element > 10
})
console.log(newArr5) 
//or
let arr6 = [4, 7, 2, 1, 10, 13]
let newArr6 = arr6.map((element) => element * 2).filter((element) => element > 10)
console.log(newArr6)
//________________________________________________________________________________________


/******Reduce Method******************************** */
//Reduce method convert 2, 3 dimentional array into 1 dimentional array. Can use to add all elements
//it takes four arguments
// Accumulator : Data gets store
// Current value
// current index
// source Array

//Q 11: Sum of element using reduce()
let arr7 = [2, 4, 1]
debugger
let arr7sum = arr7.reduce((Accumulator, element, index, array) => {
return Accumulator += element
}, 2)                                            //here 2 is initial value of Accumulator
console.log(arr7sum)
//or
let arr8 = [2, 4, 7, 1, 9]
let arr8sum = arr8.map((e) => e * 2).filter((e) => e > 10).reduce((sum, e) => sum += e)
//let arr8sum = arr8.reduce((Accumulator, element) => Accumulator += element)
console.log(arr8sum)

//=====================================================================
//quest: -ve and +ve array
// const sort=(arr)=>{
// const l=arr.length;
// let p1=0;
// let p2=l-1
// let swap
// while(p2>p1){
//    if(arr[p1]>0 && arr[p2]<0){
//     swap=arr[p1];
//     arr[p1]=arr[p2];
//     arr[p2]=swap;
//     p1+=1;
//     p2-=1;
//    }
//    if(arr[p1]<0 && arr[p2]<0){
//         p1+=1
//    }
//    if(arr[p1]>0 && arr[p2]>0){
//     p2-=1
// }
// console.log("arr",arr)
// }
   
// }
// console.log("aaaaa")
// sort([-12,11,-13,-5,6,-7,5,-3,-6])
//+===============================================================================


//Q 12: Convert 2-D into 1-D array using reduce()
let arr9 = [                                        //two-D Array
    ['z1', 'z2'],['z3', 'z4'], ['z5', 'z6']
]
let oneDArr = arr9.reduce((accum, ele) => accum.concat(ele))    //used concat() to convert in 1-D array
console.log(oneDArr)
//____________________________________________________________


/****_____String_____*************************************************** */
// Escape Character
// Finding a String in a String:  indexOf() - return index no
// Searching for a String in a String:  search() - return index no
// Extracting String parts:  slice(), substring(), substr()
// Replacing String Content:  replace(searchFor, replaceWith)
// Extracting String Characters:  charAt(indexNo), charCodeAt(indexNo), stringName[indexNo]
// Other useful method

//String can be created as primitives
//from string literals, or as objects, using the String() constructor

let myName = "Aanshi Vishwakarma"
let myName2 = 'Aish Vishwakarma'
let myName3 = new String("Nikki Vishwakarma")
console.log(myName.length)
console.log(myName2)
console.log(myName3) 

let n = "Aanshi Vishwakarma"
console.log(n.indexOf('s')) 
console.log(n.indexOf('s', 4))    //it will find that index of s character after 4 index 
console.log(n.indexOf('y'))       //As y is not present in String , so it will return -1 index number

console.log(n.lastIndexOf('s', 4))    //it will find that index of s character before 4 index
//  console.log(n.lastIndexOf('r')) 
// console.log(n.indexOf('r'))

console.log(n.search('Vish'))         //search() method find index no and can not take 2 parameters, whereas indexof() can take 2 parameters

//__________________________________________________

// Extracting String parts:- there are 3 methods for extracting a part of string
// slice(start, end): extract a part of string and return extracted part of in new string
// substring(start, end)
// substr(start, length)

let str = "Apple, Banana, Orange"
console.log(str.slice(0, 4))               //return elements from index no 0 to 4-1 index
console.log(str.slice(8, -2))              //return elements from index no 8 to except last 2 index element
console.log(str.slice(8))                 //return elements from index no 8 to end

//console.log(str.substring(2, 8))
console.log(str.substring(8, -3))         //return elements before index no 8-1, means till 7th elements.If we give negative value then characters will count from 0th position
//console.log(str.substring(-2))   

console.log(str.substr(-4))              //return elements from last index

let str1 = "I am aanshi Vishwakarma aanshi"    //here aanshi is two time but it will update only 1st aanshi 
let newStr = str1.replace('aanshi', 'Aanshi')      
console.log(newStr)

//_____________________________________________

//Quest: Display only 280 characters of a string like the one used in Twitter
let lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
console.log(lorem.length)
console.log(lorem.slice(0, 280))
console.log(lorem.slice(0, 280).length)
//_________________________________________________________________________________

// Extracting String Characters:
//charAt(indexNo)
//charCodeAt(indexNo)
//Property access [ ], stringName[indexNo]

let h = "Hello World"
console.log(h.charAt(1))           
console.log(h.charCodeAt(1))           //it return ASCII code
let lastChar = h.length - 1
console.log(h.charCodeAt(lastChar))
console.log(`ASCII code of last character: ${h.charCodeAt(lastChar)}`)

console.log(h[8]);         //ECMA Script (2009) allows property access 

// Other useful method
console.log(h.toUpperCase())
console.log(h.toLowerCase())
console.log(h)

let fName = 'Aanshi'
let lName = 'Vishwakarma'
console.log(fName + lName)
console.log(`${fName} ${lName}`)
console.log(fName.concat(lName))
console.log(fName.concat(" ", lName))

let s = '    Hello World     '
console.log(s.trim())            //remove white space from start and end in string

//_____________________________________________________

//converting String to Array
// let stri = "Aanshi Vishwakarma"
// let stri = "Km,Aanshi,Vishwakarma"
let stri = "Km|Aanshi|Vishwakarma"
//console.log(stri)
console.log(stri.split())
console.log(stri.split(","))
console.log(stri.split(" "))
console.log(stri.split("|"))


/******_______Date and Time________****************************************************/

//There are 4 ways to create new date object
//date object are created with new Date() constructor
// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// new Date(milliseconds)
// new Date(date string)

console.log(new Date())
console.log(new Date().toString())
console.log(new Date().toLocaleString())

console.log(new Date().toDateString())
console.log(new Date().toLocaleDateString())

console.log(new Date().toTimeString())
console.log(new Date().toLocaleTimeString())

console.log(Date.now())     //it returns milliseconds since January 1, 1970


let d1 = new Date(2024, 0, 5, 20, 33, 30, 0)
console.log(d1)
console.log(d1.toLocaleString())

let d2 = new Date("Oct 13, 2024 11:13:00")
console.log(d2.toLocaleString())

console.log(new Date().toLocaleString())
console.log(new Date().getFullYear())
console.log(new Date().getMonth())
console.log(new Date().getDate())
console.log(new Date().getDay())

console.log(new Date().getHours())
console.log(new Date().getMinutes())
console.log(new Date().getSeconds())
console.log(new Date().getMilliseconds())



/********_________Math Object______________********************************************** */

console.log(Math.PI)

let num = 10.537
console.log(Math.round(num))

console.log(Math.pow(2, 3))
console.log(Math.sqrt(66))
console.log(Math.abs(-56.3))   //convert -ve to +ve number
console.log(Math.abs(4 - 2))
console.log(Math.ceil(99.1))
console.log(Math.floor(4.6))
console.log(Math.min(5, 0, 150, 8, 18))
console.log(Math.max(0, 170, 7, 3, 10))

console.log(Math.random())     //it generate number between 0 to 1
console.log(Math.random() * 10) 
console.log(Math.floor(Math.random() * 10))

console.log(Math.trunc(78.64))    //it return only integer value before decimal value
console.log(Math.trunc(-78.64)) 


/**********_______DOM, BOM in JavaScript__________******************************************** */

// window vs Document
// DOM vs BOM
// DOM Nevigation
// Searching and getting Elements Reference

//DOM (Document object model):-
//document.body.style.background = "red"

//BOM (Browser object Model):-

//windows object properties:-
// window.innerHeight
// innerWidth
//window.history.back()

// alert(location.href)   //shows current URL
// if(confirm("eant to visit current URL?")){
//     location.href = "youtube URL"
// }


//_____DOM Navigation_____

//___element childnode____
//document.body.hasChildNodes()

//_____________________
//Quest: How to find child in DOM tree
//document.body.firstElementChild
//____________________
// document.body.parentNode
// document.body.parentElement
// document.head.parentElement
// document.body.previousElementSibling
// document.head.nextElementSibling

//___How to search the elements and references_____
//DOM Example
//<h1 id = "idName">change the content of h1</h1>
//const functionName = () => {
//document.getElementById('idName').innerHTML = "new Content to display"}

//document.querySelector('.className').innerHTML = "new Content to display"   //querySeclector change only 1st text
//document.querySelector('#idName').innerHTML = "new Content to display"

//Question: Difference between getElementById and querySelector



/***********________Events in Javascript_______*********************************************** */
// 4 ways of writing events in JS
// what is Event object
// MouseEvent in jS
// KeyboardEvent
// InputEvents
//Timing based event

// 4 ways of writing events in JS:-
// 1- using inline events alert()
// 2- by calling a function
// 3- using inline Event (HTML onclick="" property and element.onclick)
// 4- using Event Listeners (addEventListener and IE's attachEvent) 

//Question: what is Event object
//Event object is Parent object of event object. eg: MouseEvent, focusEvent, KeyBoardEvent etc

//Question: Difference between onClick and addEventListener?
//______________________________________

/**********______Timing based Event______********************** */
// setTimeout()
// setInterval()
// clearTimeout()
// clearInterval()

//Q: Difference between setTimeout() and setInterval()


/*********____________OOPs in JS_______*************************************************** */

// Object Literals - key value pair
// this object

// let names = "Aanshi"
// console.log(names)

const bio3 = {
    myName : "Aanshi",
    age : 26
}
console.log(bio3)

let bioData = {
    myName : 'Aanshi',
    contactNo : 121212,
    getData : function(){
        console.log(`My name is ${bioData.myName} and no is ${bioData.contactNo}`)
    }
}
console.log(bioData.myName)
bioData.getData()
//_________________________________________________
//No need to write function after ES6

let bioData2 = {
    myName : 'Aanshi',
    contactNo : 121212,
    getData (){                 //here
        console.log(`My name is ${bioData2.myName} and no is ${bioData2.contactNo}`)
    }
}
console.log(bioData2.myName)
bioData2.getData()
//_____________________________________________________________
let bioData3 = {
    myName : {
        fName : 'Aanshi',
        lName : 'Vishwakarma'
    },
    contactNo : 121212,
    getData (){                 //here
        console.log(`My name is ${bioData3.myName.fName} and no is ${bioData3.contactNo}`)
    }
}
console.log(bioData3.myName.lName)
bioData3.getData()
//_____________________________________________________________

/********___________this________********************************** */
//Quest: What is this object?
//ex1
console.log(this)
//ex2
console.log(this.alert('awesome'))

//ex3
var a = 'Aanshi'
function myName(){
    console.log(this.a)
}
myName()

//ex4
const obj = {
    age : 27,
    myAge() {
        console.log(this.age)        //this can access global variable. here the current context of this is object not window. coz we r using this inside object
    }
}
obj.myAge()

//ex5
const obj1 = {
    age : 27,
    myAge : () => {
        console.log(this)        //we cannot use this object in fat arrow function
    }
}
obj1.myAge()

//ex6
let bio = {
    myName : {
        fName: 'Aanshi',
        lName: 'Vishwakarma'
    },
    age: 27,
    detail () {
        console.log(`My name is ${this.myName.fName} ${this.myName.lName} and age is ${this.age}`)
    }
}
bio.detail();


/************__________Destructuring in ES6____________******************************* */

//1- Array Destructuring

const arr1 = ['Aanshi', 'Vishwakarma', '121212']
// let fN = arr1[0]
// let lN = arr1[1]
let  [fN, lN, no, age = 27] = arr1               //Array Destructuring and we can assighn value also
//console.log(lN)
console.log(age)

//2- Object Destructuring
const bio1 = {
    fn : 'Aanshi',
    ln : "Vishwakarma",
    age : 27
}
//let {fn, ln, age} = bio1                           //Object Destructuring
let {fn, ln, age, degree = "B.Tech"} = bio1         //and we can assighn value also
console.log(degree)


/***********_______Object Property_______******************************** */

let myName = 'Aanshi'
const bio2 = {
    [myName] : "hello how r u?",      //used [] for dynamic data, means value of myName ie 'Aanshi" will print in place of [myName]
    [20+7] : 'is my age?'
}
console.log(bio2)
//________________________

let n1 = "Aanshi"
let n2 = "Vishwakarma"
let n3 = {n1, n2}
console.log(n3)


/**********_________Spread operator______************************************ */

const c1 = ['red', 'pink', 'white']
const c2 = ['red', 'pink', 'white', 'black', 'yellow']    //instead of 'red', 'pink', 'white', we can add array name ie c1
const cSpred = [...c1, 'black', 'yellow']              //...arrayName is spread operator
console.log(cSpred)


/*************__________ECMAScript 2016/ ES7___________******************************* */
// Array.prototype.includes   :check searching heading in this file above line no 348
// Exponentiation Operator
console.log(2**3)


/*************__________ECMAScript 2017/ ES8___________******************************* */
//Async function
//string padding
//Object.values()
//Object.entries()

// let name1 = 'Aanshi'.padStart(10)
// console.log(name1)
console.log("Aanshi".padStart(10))  //it will add 4 space before name, coz 6+4=10
console.log('Aanshi'.padEnd(10))    //it will add 4 space after name

const person = { Pname : "Aanshi", pno : 23445 }
console.log(Object.values(person))     //here, with the help of Object.value() function we can access value of key
console.log(Object.entries(person))


/*************__________ECMAScript 2018/ ES9___________******************************* */
//Spread operator which we can use in object also
const person1 = { Pname : "Aanshi", pno : 23445 }
const person2 = {Pname2 : "Nikki", pno2 : 893446 }
const person3 = {...person1, ...person2}
console.log(person3)


/*************__________ECMAScript 2019/ ES10___________******************************* */
//flat() method
//Array.prototype.flat
//flatMap()
//Object.fromEntries()
//trimStart(), trimEnd()

let arr2d1 = [                                        //2-D Array
    [3, 8],[5, 1], [3, 6]
]
let oneDarr2d1 = arr2d1.reduce((accum, ele) => accum.concat(ele))    //used concat() to convert in 1-D array
console.log(oneDarr2d1)

let arr3d1 = [                                        //3-D Array
    [3, 8],
    [5, 1], 
    [3, 6,
        [8, 3]
    ]
]
let oneDarr3d1 = arr3d1.reduce((accum, ele) => accum.concat(ele))    //here, concat() cannot convert 3-D array into 1-D array
console.log(oneDarr3d1)


const arr2d = [             //2-D Array
    [2, 3, 4 ,1],
    [4, 2, 7]
]
console.log(arr2d.flat())

const arr3d2 = [           //3-D Array
    [2, 3, 4 ,1],
    [4, 2, 7,
        [3, 5, 1, 8]
    ]
]
//console.log(arr3d2.flat(2))     //to convert 3-D array to 1-D array we need to add 2 as argument or we can add infinity
console.log(arr3d2.flat(Infinity))

const arr4d = [3, 5, [1, 4, [5, 9, 6, [3, 1, 9]]]]      //4-D Array
console.log(arr4d.flat(3))

//______________Object.fromEntries()__________________________________________________

const de = {fname : 'Aanshi', lName : 'Vishwakarma'}
console.log(Object.entries(de))          //it convert in array   
const objToarr = Object.entries(de)
console.log(Object.fromEntries(objToarr))       //back to object


/*************__________ECMAScript 2020/ ES11___________******************************* */
//datatype BigInt

let oldn = Number.MAX_SAFE_INTEGER;
console.log(oldn)
//console.log(oldn + 8)
console.log(typeof(oldn))

const newn = 9007199254740991n + 12n
console.log(newn)
console.log(typeof(newn))


/*************__________ECMAScript 2014___________******************************* */

"use strict"
let x = 3.14
console.log(x)


/******************__________Advanced JavaScript__________************************************* */

// Event propagation ( Event Bubbling and Event Capturing)
// Higher order function
// Callback Function
// Function Currying ( we will see after Async JS section)
// Callback Hell
// AJAX call using XMLHttpRequest
// BONUS Section JSON
// Fetch API
// Promises
// Async-Await
// Error handeling in JS

//___Higher order function and Callback Function____________________
const add = (a, b) => {
    return a+b
}
const sub = (a,b) => {
    return a-b
}
const mul = (a,b) => {
    return a*b
}
const calculator = (num1, num2, operator) => {
    return operator(num1, num2)
} 
console.log(calculator(5, 2, sub))   //here calculator() is Higher order function and sub is callback function

//Question: Difference between Higher order function and callback?


/***********_____________Asynchronous JavaScript________________*************/
// Hoisting in JS
// Scope Chain
// Lexical Scoping in JS
// Use strict mode
// this keyword
// Closures in JS
// What is Asynchronous JavaScript programming
// what is Event loop


//_____Lexical Scoping in JS_____
//means inner function can access property of parent function and global schope
let a = "hello guys"          //global scope
const first = () => {
    let b = "How r you"
    const second = () => {
        let c = "Hi! I am fine thank u"
        console.log(a+b+c)
    }
    second();
}
first();

//vice-versa of Lexical Scoping
let a = "hello guys"          //global scope
const first1 = () => {
    let b = "How r you"
    const second = () => {
        let c = "Hi! I am fine thank u"
        // console.log(a+b+c)
    }
    second();
    console.log(a+b+c)      //here c cannot acccess outside of inner block
}
first1();

//____Closures in JS_________
//inner function can access variable and parameter of outer function
const outerFun = (a) => {
    let b = 10;
    const innerFun = () => {
        let sum = a+b
        console.log(`The sum of two numbers is ${sum}`)
    }
    innerFun()
}
outerFun(5)

//____synchronous and Asynchronous___________
//Quest: Difference between synchronous and Asynchronous JavaScript?
//________synchronous______

const fun2 = () => {
    console.log('fun2 is called')
}
const fun1 = () => {
    console.log('fun1 is called')
    fun2();
    console.log('fun1 is called again')
}
fun1();

//_______Asynchronous___________
const fun4 = () => {
    setTimeout(() => {                      //setTimeout, it will wait for 2 sec for fun3 to run
        console.log('fun4 is called')
    }, 2000)
}
const fun3 = () => {
    console.log('fun3 is called')
    fun4();
    console.log('fun3 is called again')
}
fun3();

/**************_____Advanced JavaScript_____heading Again***************** */
//____Function Currying____

//Quest: What is output of sum(5)(3)(8)

function sum(num1){
    return function(num2){              //Anonymous Functions, means function without name
        return function(num3){
            console.log(num1 + num2 + num3)
        }
    }
}
sum(5)(3)(8)
//or we can write above code like this

const sum = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3)
sum(5)(3)(8) 


//_____________Callback Hell_______________
//when a function is called inside another function is called callback function

setTimeout(() => {
    console.log('1 work in done')
    setTimeout(() => {
        console.log('2 work done')
        setTimeout(() => {
            console.log('3 work done')
            setTimeout(() => {
                console.log('4 work done')
            })
        }, 1000)
    }, 1000)
}, 1000)

/************************************* */
//_______coversion from Object to JSON____________________

var myObj = {key1 : "some_text", key2 : true, key3 : 5}
var obj_as_string = JSON.stringify(myObj)
console.log(obj_as_string)
console.log(typeof(obj_as_string))

//____JSON to object____
var jsonToObj = JSON.parse(obj_as_string)
console.log(jsonToObj) 
console.log(typeof(jsonToObj)) 

//______________check p.js file_____________________
// Fetch API
// Promises
// Async-Await





/******************************************************************************************************* */

//onclick




























