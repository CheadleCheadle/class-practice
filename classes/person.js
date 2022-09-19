// Your code here
class Person {

constructor(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

introduce() {
  console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
}

static introducePeople (people) {

  const isInstanceOf = function(arr) {
    const isTrue = (currentValue) => {
      return currentValue instanceof Person;
}
return arr.every(isTrue);
}

  if (!(Array.isArray(people))) {
      console.log("introducePeople only takes an array as an argument.");
  } else if (!(isInstanceOf(people))) {
    console.log("All items in array must be Person class instances.")
  } else {
       people.forEach((el) => {
        return el.introduce();
       });
  }
}
}

const person1 = new Person('Guy','lName', '80');
const person2 = new Person('Person','lName', '20');
const person3 = new Person('John', 'smith', '65');
const person4 = 'notAnInstance';
let newArr = [person1, person2, person3, person4];
console.log(Person.introducePeople('some string')); // => "All items in array must be Person class instances."
console.log(Person.introducePeople(newArr)); // => "All items in array must be Person class instances."
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}