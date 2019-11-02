/*1. Write a console.log statement saying "Hello World!" for each language that you know.*/
console.log("Hello World") //English
console.log("Hallå Värld") //Swedish
console.log("Bonjour Monde") //French

/*2. Consider the following code: console.log('I'm awesome');*/

/*3. Declare a variable x and initialize it with an integer, using these exact steps:
3.1 First, declare your variable x (do not initialize it yet).
3.2 Add a console.log statement that explains in words what you think the value of x is.
3.3 Add a console.log statement that logs the value of x.
3.4 Now initialize your variable x with an integer.
3.5 Next, add a console.log statement that explains what you think the value of x is.
3.6 Add a console.log statement that logs the value of x.*/
var x;
console.log("the value of my variable x will be: undefined");
console.log(x)
var x = 0;
console.log("the value of my variable x will be: 0");
console.log(x)

/*4. Declare a variable y and assign a string to it.
4.1 Write a console.log statement in which you explain in words what you think the value of the string is.
4.2 Now console.log the variable y.
4.3 Now assign a new string to the variable y.
4.4 Just like what you did before write a console.log statement that explains in words what you think will be logged to the console.
4.5 Now console.log y again.*/
var y = ""
console.log("the value of my variable y will be:");
console.log(y)
var y = "Hello"
console.log("the value of my variable y will be: Hello");
console.log(y)

/*5. How do you round the number 7.25, to the nearest integer (i.e., whole number)?
5.1 Declare a variable z and assign the number 7.25 to it.
5.2 console.log z.
5.3 Declare another variable a that has the value of z but rounded to the nearest integer.
5.4 console.log a.
5.5 So now we have z and a find a way to compare the two values and store the highest of the two in a new variable.
5.6 console.log the highest value.*/

var z = 7.25;
console.log(z)
var a = Math.round(z);
console.log(a)
var b = Math.max (z, a);
console.log(b)

/*6. Arrays
6.1 Declare an empty array. Make sure that the name you choose indicates 'plurality', because an array is capable of containing more than one element. (See Naming conventions).
6.2 Write a console.log statement that explains in words what you think the value of the array is.
6.3 console.log your array.
6.4 Create an array that has your favorite animals inside (see if you can find a good name that exactly describes what this variable will hold).
6.5 Log your array.
6.6 Add a statement that adds Daan's favorite animal ('baby pig') to the existing array.
6.7 Log your new array!*/

var myEmptyArray = [];
console.log("the value of my array will be:");
console.log(myEmptyArray)
var myFavAnimals = ["Cats, Rats, Toads"];
console.log(myFavAnimals);
myFavAnimals.push("Baby Pig");
console.log(myFavAnimals);

/*7. More strings
Let's consider the following string: let myString = "this is a test".
7.1 Add the string to your file and console.log it.
7.2 Find a way to get the length of myString.
7.3 console.log the length of myString.*/

var myString = "this is a test";
console.log(myString);
myString = myString.length;
console.log(myString);

/*
8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.
8.1 First declare at least four variables and assign them different data types.
8.2 For each variable write a console.log statement that logs the value
8.3 Now write a console.log statement wherein you first explain in words what you think the type of your variables is.
8.4 Now use typeof to log the actual type of your variables.
8.5 Now compare the types of your different variables with one another.
8.6 Make sure to also show a message when the variables you are comparing are not the same type.
*/

var myNumber = 42;
var mySecondNumber = 43;
console.log("myNumber's value is", myNumber);
console.log("the type of my variable myNumber will be: number");
console.log(typeof (myNumber));

var myStringVar = "so long and thanks for all the fish"
console.log("myStringVar's value is", myStringVar);
console.log("the type of my variable myStringVar will be: string");
console.log(typeof (myStringVar));

var myBoolean = false;
console.log("myBoolean's value is", myBoolean);
console.log("the type of my variable myBoolean will be: boolean");
console.log(typeof (myBoolean));

var myUndefinedVar;
console.log("myUndefinedVar's value is", myUndefinedVar);
console.log("the type of my variable myUndefinedVar will be: undefined");
console.log(typeof (myUndefinedVar));

var myNumberType = typeof(myNumber) // "number"
var mySecondNumberType = typeof(mySecondNumber)
var myStringType = typeof(myStringVar) // "string"
var myBooleanType = typeof(myBoolean)
var myUndefinedType = typeof(myUndefinedVar)

if (myNumberType === myStringType) {
    console.log("same type")
} else {
    console.log("not the same type")
}

if (myNumberType === mySecondNumberType) {
    console.log("same type")
} else {
    console.log("not the same type")
}

if (myBooleanType === myUndefinedType) {
    console.log("same type")
} else {
    console.log("not the same type")
}

/*
9. If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?
9.1 Add at least 3 console.log statements in which you show that you understand what % does.
*/

var x = 7;
console.log("if x % 3, then x should be 1");
console.log("x = 1 because although 7/3 = 2.3, we are not permorning neat division");
console.log("rather % = modulo operator, which returns the remainder left over when two things are divided");
console.log("so, x = 7, and when x % 3 we divide 7 by 3, which creates 3x2(6) with a reminder of 1");
x = x % 3;
console.log("x % 3 =", x)

/*
10. Write a program to answer the following questions:
10.1 Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.
10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?
10.3 Add console.log statements to the above program in which you show that you understand the concepts (just like you've done in the above assignments).*/

var multipleTypes = ["Nicola", 31];