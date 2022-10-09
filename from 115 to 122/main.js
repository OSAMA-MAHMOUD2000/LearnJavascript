/**
 * Destructuring
 * "is a javascript expression that allows us to extract data from arrays,
 * objects, and maps and set them into new distinct variables."
 * - Destructuring array.
 */

let a = 1;
let b = 2;
let c = 3;
let d = 4;

let myFriends = ["Osama", "Haider", "Ali", "Avantee"];

[a = "O", b, c, d, e = "Maram"] = myFriends;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

/**
 * Destructuring
 * - destructuring array advanced example
 */

let friends = [
  "Ahmad",
  "Sayed",
  "Ali",
  ["Shady", "Amr", ["Mohammad", "Gamal"]],
];

console.log(friends[3][2][1]);

let [, , , [aa, , [, bb]]] = friends;
console.log(aa);
console.log(bb);

/**
 * Destructuring array => swapping Variables
 */
let book = "video";
let video = "book";

// //old method = > save book value in stash
// let stach=book;
// book=video;

// //change video value
// video=stash;

// destructuring method
[book, video] = [video, book];

console.log(book);
console.log(video);

/**
 * Destructuring object.
 */

const user = {
  name: "Osama",
  age: "20",
  title: "Developer",
  country: "United States",
};

console.log(user.age);
console.log(user.name);
console.log(user.title);
console.log(user.country);

// let name=user.name
// let age=user.age;
// let country=user.country
// let title=user.title

console.log(user.age);
console.log(user.name);
console.log(user.title);
console.log(user.country);

({ name, age, country } = user);
console.log(age);
console.log(name);
console.log(country);

/**
 * Destructuring Object.
 * -renaming the variables
 * -add new property
 * -nested object .
 * -destructuring the nested object only
 */

const User = {
  name: "Osama",
  age: "20",
  title: "Developer",
  country: "UK",
  color: "green",
  skills: {
    html: 70,
    css: 40,
  },
};

const {
  name: n,
  age: A,
  country: cou,
  color: co = "red",
  skills: { html: h, css },
} = User;

console.log(n);
console.log(A);
console.log(cou);
console.log(co);
console.log(`my html skills progress ${h}`);
console.log(`my css skills progress ${css}`);

const { html: skillOne, css: skillTwo } = User.skills;
console.log(`my html skills progress ${skillOne}`);
console.log(`my css skills progress ${skillTwo}`);

/**
 * Destructuring function parameters.
 */

showDetails(User);

// function showDetails(obj) {
//   console.log(`your name is ${obj.name}`);
//   console.log(`your age is ${obj.age}`);
//   console.log(`your css skill progress ${obj.skills.css}`);
// }

function showDetails({ name, age, skills: { css } } = obj) {
  console.log(`Function parameters destructuring`);
  console.log(`your name is ${name}`);
  console.log(`your age is ${age}`);
  console.log(`your css skill progress ${css}`);
}

/**
 * Destructuring mixed content
 */

const newUser = {
  userName: "Osama",
  userAge: 33,
  skills: ["HTML", "CSS", "JAVASCRIPT"],
  addresses: {
    egypt: "cairo",
    Syria: "Damascus",
  },
};

const {
  userName: un,
  userAge: ua,
  skills: [, , three],
  addresses: { egypt: ee },
} = newUser;

console.log(`Your name is ${un}`);
console.log(`Your age is ${ua}`);
console.log(`Your last skill is ${three}`);
console.log(`You are living in ${ee}`);

let team = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmad", age: 39, available: false, skills: ["python", "Djanjo"] },
  { title: "Haider", age: 39, available: true, skills: ["Java", "servlet"] },
];
function display(num) {
  switch (num) {
    case 1:
      [{ title, age, available, skills }] = team;
      console.log(`your name ${title}`);
      console.log(`your age ${age}`);
      if ((available = true)) console.log(`you are available`);
      console.log(`your skills are ${skills}`);
      break;
    case 2:
      [, { title, age, available, skills }] = team;
      console.log(`your name ${title}`);
      console.log(`your age ${age}`);
      if ((available = false)) console.log(`you aren't available`);
      console.log(`your skills are ${skills}`);
      break;
    case 3:
      [, , { title, age, available, skills }] = team;
      console.log(`your name ${title}`);
      console.log(`your age ${age}`);
      if ((available = true)) console.log(`you are available`);
      console.log(`your skills are ${skills}`);
      break;
  }
}

display(1)
display(2);
display(3);