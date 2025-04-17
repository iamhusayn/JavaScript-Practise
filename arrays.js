//An array is a group of variables - The array can be adjusted similar to the CRUD operations. C-Create, R-Read, U-Update, D-Delete. Similarly, we can add, read, update, and delete elements in an array. push() - Adds an element to the end of the array. pop() - Removes the last element from the array. join() - Combines all elements in the array into a single string. splice() - Adds or removes elements from the array.
const sequence = [1, 1, 2, 3, 5, 8, 13];
const shopping = [
  "bread",
  "milk",
  "cheese",
  "hummus",
  "noodles",
  `${sequence}`,
];
const random = ["tree", 795, [0, 1, 2]]; //A multidimensional array is an array that contains another array
console.log(random.length);
console.log(shopping[5].length);

//Finding the lenght of an Array
console.log(random.length); //returns 3
console.log(shopping[5].length); //returns 14

//accessing and modifying an array items
console.log(shopping[5]); //accesing the 6th item in the array
shopping[2] = "Garri"; //modifying an item in the array //retruns
console.log(shopping); //returns (6) ['bread', 'milk', 'Garri', 'hummus', 'noodles', '1,1,2,3,5,8,13']

const randomA = ["tree", 795, [0, 1, 2]];
random[2][2]; //accessing the 3rd item in the 3rd item in the array

//FINDING THE INDEX OF ITEMS IN AN ARRAY.
//The indexOf() method takes an item as an argument and will either return the item's index or -1 if the item is not in the array:
const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1

//Adding items to an array
const cities = ["Lagos", "Abuja", "Kaduna"];
cities.push("Port Harcourt");
console.log(cities); //returns ['Lagos', 'Abuja', 'Kaduna', 'Port Harcourt']

//Adding items to the end of an array
const citiesB = ["Benue", "Kastina", "Abia"];
const newLength = citiesB.push("Ogun");
console.log(citiesB); //returns ['Benue', 'Kastina', 'Abia, 'Ogun']
console.log(newLength); //returns 4

//Adding items to the begining of an array
const citiesC = ["Machester", "Maiduguri", "Freetown"];
citiesC.unshift("Lagos");
console.log(citiesC); //returns ['Lagos', 'Machester', 'Maiduguri', 'Freetown']

//Removing items from an array
const citiesD = ["Lagos", "Abuja", "Kaduna"];
citiesD.pop(); //removes the last item in the array
console.log(citiesD); //returns ['Lagos', 'Abuja']

//pop() returns the removed item. This item can be stored in a new variable.
const citiesE = ["Lagos", "Abuja", "Kaduna"];
const removedCities = citiesE.pop(); //removes the last item in the array, returns it and stores it in the removedCities variable.
console.log(citiesE); //returns ['Lagos', 'Abuja']

//Removing the first item in an array
const citiesF = ["Lagos", "Abuja", "Kaduna"];
citiesF.shift(); //removes the first item in the array
const removedCitiesF = citiesF.shift(); //removes the first item and stores it in the removedCitiesF variable.
console.log(citiesF); // returns ['Abuja', 'Kaduna']

//Adding items to an array at a specific position
const citieZ = ["Lagos", "Abuja", "Kaduna"];
citiesZ.splice(2, 0, "Port Harcourt"); //starts from index 2, don't remove any item (0), replace with/add "Port Harcourt"
console.log(citiesZ); //returns ['Lagos', 'Abuja', 'Port Harcourt']

//Removing an item with a known index from an array
const students = ["Yemi", "Farida", "Tinuola", "Badeji"];
const index = students.indexOf("Tinuola");
if (index !== -1) {
  students.splice(index, 1);
}
console.log(students); //returns ['Yemi', 'Farida', 'Badeji']
console.log(index); //returns 2 - Tinuola
students.splice(2, 1); //removes the item at index 2 and remove only 1 item
