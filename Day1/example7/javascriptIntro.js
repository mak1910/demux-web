var x = 5.2;
var y = 7;

// Arithmetic Addition
console.log(x+y);

y = '7';
// String addition
console.log(x+y);

/* Variable types
 * Note that floats and ints are treated as numbers.
 * Note that characters and strings are treated as strings.
 */
console.log(typeof(x));
console.log(typeof(y));

// Creating functions
var add = function(a, b) {
	console.log('Adding ' + a + ' and ' + b);
	return (a+b);
}
console.log(add(6, 10));

// Recursive function
var getNumberOfDigits = function(number) {
	var newNumber = parseInt(number/10);
	if(newNumber == 0) {
		return 1;
	} else {
		return 1 + getNumberOfDigits(newNumber);
	}
}
console.log('Number of digits in \'1234\' is ' + getNumberOfDigits(1234));

// Declaring arrays and objects
var myArray = [1, 2, 3, "Javascript is pretty cool!"];
var myObject = {
	name : '',
	college : 'IIT Kharagpur',
	getName : function() {
		return this.name;
	},
	setName : function(name) {
		this.name = name;
	},
	printName : function() {
		console.log(this.name);
	}
}

console.log(typeof(myArray));
console.log(typeof(myObject));
console.log(typeof(add));
console.log(typeof(null));

// Interacting with the object
myObject.setName('Mridul');
console.log('Setting the name as: ' + myObject.getName());
myObject.setName('Kothari');
console.log('Changed the name.');
myObject.printName();

// For loop
for(var i=0; i<myArray.length; i++) {
	console.log(myArray[i]);
}

x = 5;
y = '5';

if( x==y ) {
	console.log ('The string x is equal to the value x, if we don\'t use strict equality.');
}
if(!( x===y )) {
	console.log('However with strict equality they are not equal.');
}

// Getting all words from a string
var sentence = 'IIT Kharagpur is one of the largest IIT\'s in India.';
var tempStr = '';
var arrayOfWords = [];
for(var i=0; i<sentence.length; i++) {
	if(sentence[i] == ' ' || sentence[i] == '.') {
		arrayOfWords.push(tempStr);
		tempStr = '';
	} else {
		tempStr = tempStr + sentence[i];
	}
}
console.log(arrayOfWords);

/* Extra resources
 * Basic : http://www.w3schools.com/js/
 * Advanced : http://book.mixu.net/node/
 */