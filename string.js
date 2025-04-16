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

function introMessage(strings, personExp, ageExp) {
  const str0 = strings[0]; // "Hello, "
  const str1 = strings[1]; // "my name is "
  const str2 = strings[2]; // " and I am "

  const ageStr = ageExp < 18 ? "a Teenage" : "an Adult";

  // return `${str0}, ${str1}${personExp}${str2}${ageStr}`; // wrong expression
  return `${str0}${personExp}${str1}${ageStr}${str2}`; // Correct expression
}
const introduction = introMessage`Hello, my name is ${person}, and I am ${age}.`;

console.log(introduction);

// String conversion
const myString = "123";
const myNum = Number(myString); //Converting from string to number
console.log(typeof myNum);

const newNum = 253;
const lump = String(newNum); //Converting from number to string
console.log(typeof lump);

//String Methods
//To find a substring (eg. "Mozilla" to find "Moz")
const browserType = "mozilla";
const contain = browserType.includes("moz")
  ? "Yes, moz is present"
  : "No, moz is not present";
console.log(contain);
// OR
const browserTypeA = "mozilla";

if (browserTypeA.includes("moz")) {
  console.log("Yes, moz is present");
} else {
}

//StartsWith or EndsWith
const browserTypeB = "mozilla";

if (browserTypeB.startsWith("Z")) {
  console.log("Yes, starts with z!");
} else {
  console.log("No, does not start with z!");
}
//EndsWith
const browserTypeC = "mozilla";

if (browserTypeC.endsWith("a")) {
  console.log("Yes, ends with a!");
} else {
  console.log("No, does not end with a!");
}

//To find the position of a substring in a string
const tagline = "MDN - Resources for developers, by developers";

const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence);
console.log(secondOccurrence);

//Extracting a substring from a string
const taglineA = "MDN - Resources for developers, by developers";
const firstOccurrenceA = tagline.slice(20, 30); //slice(start, end)
console.log(firstOccurrenceA); //developers

const taglineX = "MDN - Resources for developers, by developers";
const firstOccurrenceX = tagline.slice(20); //To count from the 20th index to the end
console.log(firstOccurrence); //developers, by developers

//Changing string cases
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());

//Updating parts of a string or To change the case of the first character of a string
const browserTypeZ = "mozilla";
const updated = browserTypeZ.replace("moz", "van"); //to replace "moz" with "van"
// console.log(updated); // "vanilla"
// console.log(browserType); // "mozilla"

let browserTypeG = "mozilla"; //reassigning the "browserTypeZ" variable
browserTypeG = browserTypeG.replace("moz", "van");
console.log(browserTypeG); // "mozilla"

//To change all the character of a string
let quote = "To be or not to be";
quote = quote.replaceAll("be", "code"); //To change all "be" to "code"
console.log(quote); // "To code or not to code"

const food =
  "We are all eating pizza and no one will leave without eating pizza";
const food2 = food.replaceAll("pizza", "sushi");
console.log(food2); // "We are all eating sushi and no one will leave without eating sushi

const list = document.querySelector(".output ul");
list.textContent = "";
const greetings = [
  "Happy Birthday!",
  "Merry Christmas my love",
  "A happy Christmas to all the family",
  "You're all I want for Christmas",
  "Get well soon",
];

for (const greeting of greetings) {
  const christmasGreeting = greetings.slice(1, 4);

  if (greetings.includes("Chirstmas")) {
    list.innerHTML += `<li>${christmasGreeting}</li>`;
  }

  console.log(christmasGreeting); // Merry Christmas my love, A happy Christmas to all

  if (greeting) {
    const listItem = document.createElement("li");
    listItem.textContent = greeting;
    list.appendChild(listItem);
  }
}

const list = document.querySelector(".output ul");
list.textContent = "";
const cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];

for (const city of cities) {
  const lowerCaseCity = city.toLowerCase();
  const firstLetter = lowerCaseCity.slice(0, 1);
  const newLetter = lowerCaseCity.replace(
    firstLetter,
    firstLetter.toUpperCase(0)
  );
  const result = newLetter;

  const listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}

const list = document.querySelector(".output ul");
list.textContent = "";
const stations = [
  "MAN675847583748sjt567654;Manchester Piccadilly",
  "GNF576746573fhdg4737dh4;Greenfield",
  "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
  "SYB4f65hf75f736463;Stalybridge",
  "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
];

for (const station of stations) {
  const stationCode = stations.slice(0, 3);
  const stationName = stations.slice(25); // stations.indexOf(";")
  const newName = stationCode + `${":"}` + " " + stationName; // stations.slice(stationName + 1)
  const result = newName; //`${stationCode}: ${stationName}`;

  const listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}
