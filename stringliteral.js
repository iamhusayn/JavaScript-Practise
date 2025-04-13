`string text``string text line 1
 string text line 2``string text ${expression} string text`;

tagFunction`string text ${expression} string text`;

//tagFunction is my function name - I can change it to whatever I want.

//string text that will become part of the template literal. Almost all characters are allowed literally, including line breaks and other whitespace characters. However, invalid escape sequences will cause a syntax error, unless a tag function is used.

//expression - this is where I can put my code to generate the string I want. It can be a function. Therefore its value can be a string or passed to the tag function. It can also be a function that returns a string.

//${} is a placeholder for the expression I want to evaluate. I can change it to whatever I want, but it has to be a valid JavaScript expression.

//To escape backticks
(`\`` ===
  "`" // true
  `\${}`) ===
  "${}"; // true

console.log("string text line 1\n" + "string text line 2");
console.log(`string text line 1
string text line 2`); //to create multi-line string using line break(\n)
// "string text line 1
// string text line 2"

//I can write a single-line string across multiple lines for source code readability, by escaping the newline with a backslash (\):
console.log(`string text line 1 \
string text line 2`);
// "string text line 1 string text line 2"

// STRING CONCATENATION
// its best to use template literals to concatenate strings with a variable number of arguments than operators because template literals are more readable and more efficient than string concatenation with operators.
const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);

// NESTING tEMPLATES
// Unnested template literals are evaluated in the order they appear in the code. Nested template literals are evaluated in the order.
// The inner template literal is evaluated first, and then the outer template literal is evaluated with the result.
// Unnested template literal
let classes = "header";
classes += isLargeScreen()
  ? ""
  : item.isCollapsed
  ? " icon-expander"
  : " icon-collapser";

// Wrongly Nested template literal
const classes1 = `header ${
  isLargeScreen() ? "" : item.isCollapsed ? "icon-expander" : "icon-collapser"
}`;

// Correctly Nested template literal
const classesA = `header ${
  isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`
}`;

const person = "Husayn";
const age = 16;

function introMessage(strings, persongExp, ageExp) {
  const str0 = strings[0]; // "Hello, "
  const str1 = strings[1]; // "my name is "
  const str2 = strings[2]; // " and I am "
  const str3 = strings[3]; // " years old."

  const ageStr = ageExp < 18 ? "Teenage" : "Adult";

  // return `${str0}, ${str1} ${persongExp} ${str2}${ageExp} ${str3}`;
}

const output = introMessage`Hello, my name is ${person} and I am ${age} years old.`;
console.log(output);

const person = "Husayn";
const age = 16;

function introMessage(strings, personExp, ageExp) {
  const str0 = strings[0]; // "Hello, "
  const str1 = strings[1]; // "my name is "
  const str2 = strings[2]; // " and I am "

  const ageStr = ageExp < 18 ? "a Teenage" : "an Adult";

  return `${str0}, ${str1}${personExp}${str2}${ageStr}`; // wrong expression
  return `${str0}${personExp}${str1}${ageStr}${str2}`; // Correct expression
}
const introduction = introMessage`Hello, my name is ${person}, and I am ${age}.`;

console.log(introduction);
