/**
 * Object
 * - intro and what is the object?
 * - testing window Object
 * -accessing object
 */

let user = {
  //properties
  theName: "Osama",
  theAge: 22,
  //methods
  sayHello: function () {
    return `Hello`;
  },
};
console.log(user.theName);
console.log(user.theAge);
console.log(user.sayHello());

/**
 * Object
 * - Dig deeper
 * - Dot notation vs Bracket notation\
 * - Dynamic property name
 */

let myVar = "country";
let user2 = {
  theName: "Osama",
  "country of": "Syria",
  country: "Egypt",
};
console.log(user2.theName);
console.log(user2["country of"]);
console.log(user2.country);
console.log(user2.myVar);
console.log(user2[myVar]);

/**
 * Nested object and trainings
 */

let available = true;

let person = {
  name: "Osama",
  age: "38",
  skills: ["HTML", "CSS", "Js"],
  available: false,
  addresses: {
    ksa: "Riyadh",
    egypt: {
      one: "Cairo",
      two: "Giza",
    },
  },
  checkAv: function () {
    if (person.available === true) {
      return `Free for work`;
    } else {
      return `Not Free`;
    }
  },
};

console.log(person.name);
console.log(person.age);
console.log(person.skills);
console.log(person.skills.join(" | "));
console.log(person.skills[2]); //access with index
console.log(person.addresses);
console.log(person.addresses.ksa);
console.log(person.addresses.egypt.one);
console.log(person["addresses"].egypt.one);
console.log(person["addresses"]["egypt"].one);
console.log(person["addresses"]["egypt"]["one"]);
console.log(person.checkAv());

/**
 * Object
 * - create with new keyword -> new Object();
 *
 */

let person2 = new Object({
  age: 20,
});

console.log(person2);

person2.age = 39;
person2["country"] = "Egypt";

person2.sayHello = function () {
  return `Hello`;
};

console.log(person2);
console.log(person2.age);
console.log(person2.country);
console.log(person2.sayHello());

/**
 * Function thiss keyword
 * - this introduction
 * - this inside object method
 * --- when a function is called as a method of an object,
 * --- its this is set to the object of the method is called on
 * - Global object
 * - Test variables with window and this
 * - Global context
 * - function context
 *
 *
 * search about
 * - strict mode
 */

console.log(this);
console.log(this === window);

myVariable = 100;
console.log(window.myVariable);
console.log(this.myVariable);

function sayHello() {
  console.log(this);
  return this;
}
sayHello();

console.log(sayHello === window);

document.getElementById("cl").onclick = function () {
  console.log(this);
};

let user1 = {
  age: 38,
  ageInDays: function () {
    console.log(this);
    return this.age * 365;
  },
};

console.log(user1.age);
console.log(user1.ageInDays());

/**
 * - create object with create method
 */

let username = {
  age: 20,
  doubleAge: function () {
    return this.age * 2;
  },
};

console.log(username);
console.log(username.age);
console.log(username.doubleAge());

let obj = Object.create({});
obj.a = 100;

console.log(obj);

let copyObj = Object.create(username);
copyObj.age = 50;

console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());

/**
 * create object with assign method
 */

let obj1 = {
  prop1: 1,
  meth1: function () {
    return this.prop1;
  },
};

let obj2 = {
  prop2: 2,
  meth2: function () {
    return this.prop2;
  },
};

let targetObject = {
  prop3: 3,
  meth3: function () {
    return this.prop3;
  },
};

//note, when there are multiple variables with the same name, the first onw will be taken

let finalObject = Object.assign(targetObject, obj1, obj2);

console.log(finalObject);

finalObject.prop1 = 100;
finalObject.prop4 = 4;
console.log(finalObject);

let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });

console.log(newObject);
