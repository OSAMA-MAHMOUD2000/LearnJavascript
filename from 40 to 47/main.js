/**
 * Arrays
 * - create arrays [two methods]: new array () + []
 * - access array elements 
 * - nested arrays 
 * -change arrays elements 
 * - check for array Array.isArray(arr)
 * 
 */



let friends =["Osama", "Mahmoud", "Manaf",["Maram", "Manar"]];

console.log(`Hello ${friends[0]}`);
console.log(`Hello ${friends[2]}`);
console.log(` ${friends[0][1]}`);
console.log(`Hello ${friends[3][1]}`);
console.log(`${friends[3][1][2]}`);


console.log(friends);
friends[1]="Gamal";

console.log(friends);
friends[3]="Muhammad";
console.log(friends);



/**
 * Arrays length
 * 
 * -length
 */

// add an element at the end of the array using length
friends[friends.length]="Hanaa";
console.log(friends )

// update the last element in the array using length
friends[friends.length-1]="wafaa";
console.log(friends )

// resize the array length
friends.length=3;
console.log(friends)


/**
 * Arrays methods [adding and removing]
 * unshift("","") add element to the first 
 * push("","") add element to the last 
 * shift() remove first element from array
 * pop() remove last element from array 
 */

console.log(friends);

friends.unshift("Eyad","Montaha");

console.log(friends);

friends.push("Hazem", "Murhaf")

console.log(friends)

let first =friends.shift();
console.log(friends)
console.log(`the first is ${first}`);

let last = friends.pop();
console.log(friends)
console.log(`the first is ${last}`);

/**
 * arrays methods (search methods )
 * - indexOf(search element , from index[opt])
 * - lastIndexOf(search element , from index[opt])
 * - includes(value to find , from index[opt]) [ES7]

 */

console.log(friends);

console.log(friends.indexOf("Osama"));
console.log(friends.indexOf("Osama",2));

console.log(friends.lastIndexOf("Osama"));
console.log(friends.lastIndexOf("Osama",2));

console.log(friends.includes("Osama"));
console.log(friends.includes("Osama",1));


if (friends.lastIndexOf("Osama")===1){
    console.log("found")
}
if (friends.lastIndexOf("Osamaa") === -1) {
    console.log("not found")
}


/**
 * Arrays methods( sorting )
 * - sort (function[opt])
 * - reverse
 */

let myArray =[10,"sayed","Mohammad","90",9000,100,20,"10",-20,-10];

console.log(myArray)
console.log(myArray.sort())
console.log(myArray.reverse())


/**
 * Arrays Methods [slicing]
 * slice( start[opt], end[opt] not including end )
 * - slice() => all array
 * - if start is undefined =>0
 * - negative count from end 
 * - if end is undefined || > indexes => slice to the end of array.length
 * - return new array 
 * 
 * splice( start [mand], deleteCount [opt] [0 means no remove], the items to add [opt])
 * - if negative => start from the end 
 */

console.log(friends);
console.log(friends.slice())
console.log(friends.slice(1))
console.log(friends.slice(2,3))
console.log(friends.slice(-3))
console.log(friends.slice(1,-2))
console.log(friends.slice(-4,-2))

let myfriends = ["Osama", "Mahmoud", "Manaf", ["Maram", "Manar"]];
myfriends.splice(0, 0, "Jafar", "Hasan")
console.log(myfriends)

/**
 * Arrays methods (joining)
 * concat(array, array) => return a new array
 * join (separator)
 */

let names=["fayez","Hamdan"]
let numbers=["1","2","3","4","5","6","7"]

let all=myfriends.concat(names,numbers)
console.log(all)
console.log(all.join("||"))
console.log(all.join("@"))


/**
 * arrays challenges
 */

let zero=0;
let counter=3;
let my =["Ahmad","Mazero","Elham","Osama","Gamal","Ameer"];

// write code here   
my=my.slice(0,-2).reverse();  
console.log(my); // ["Osama","Elham","Mazero","Ahmad"]
console.log(my.slice(1,-1))//["Elham","Mazero"]
console.log((my[1].slice(0,2))+ (my[2].slice(2))); // "Elzero"
console.log((my[2].slice(4,5))+my[2].slice(5).toUpperCase()); // "rO"