/**
 * Loop
 * - loop on sequences
 */

let friends = [1,2,"Osama","Ahmad", 3,4,"Sayd","Ali"];
let names = [];

for (let i = 0; i < friends.length;i++){
    if (typeof friends[i] == "string"){
        names.push(friends[i]);
    }
}
document.write(names);

/**
 * Nested loop
 */
let products = ["Keyboard","Mouse",2,3,4,4,"Pen","Pad","Monitor"];
let colors = ["Green","Red","Blue"];
let models = [2020,2021];

for (let i = 0; i < products.length;i++){
    console.log(i,products[i]);
    for (let j = 0; j <colors.length;j++){
        console.log(`- ${colors[j]}`);
    }
    for(let k=0;k<models.length;k++){
        console.log(`- ${models[k]}`);
    }
}


/**
 * Loop control
 * - break
 * - continue
 * - label
 */

for (let i=0;i<products.length;i++){
    console.log(`- ${products[i]}`)
    if(products[i] === "Pen"){
        break;
    }
}
for (let i = 0; i < products.length; i++) {
    if (typeof products[i] === "number") {
        continue;
    }
    console.log(products[i])
}


mainLoop: for (let i = 0; i < products.length; i++){
    console.log(products[i]);
    nestedLoop: for (let j = 0; j < colors.length; j){
        console.log(`- ${colors[j]}`);
        if(colors[j] ==="Green"){
            break nestedLoop;
        }
    }
}

/**
 * for loop advanced example
 */
console.log("for loop abvanced example")
let i=0;
for(;;){
    console.log(products[i]);
    i++;
    if(i==products.length) break;
}

/**
 * Products practice
 */

products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
let showCount = 3;
document.write(`<h1>Show ${showCount} products</h1>`);

for (let i=0; i< showCount; i++){
    document.write(`<div>`);
    document.write(`<p>[${i+1 }]${products[i]}</p>`);
    for(let j=0; j<colors.length; j++){
        document.write(`<p>${colors[j]}</p>`);
    }
    document.write(`<p>${colors.join(" | ")}</p>`);
    document.write(`</div>`)
}

/**
 * while loop
 */
console.log("while loop")
let ii = 0;
while (ii <products.length){
    
    console.log(products[ii]);
    ii++;
}

/**
 * do while loop
 */
console.log("do while loop")
ii=0;
do {
    console.log(products[ii]);
    ii++;
} while (ii < products.length)

/**
 * loop challenge
 */

let myAdmins=["Ahmad","Osama","Sayed","Stop","Samera"]
let myEmployees=["Amgad","Samah","Ameer","Omar","Othman","Amany","Anwar","Saumya"];
let flag=0
if(myAdmins.includes("Stop")){
    length=myAdmins.indexOf("Stop")
}
document.write(`<div>We have ${length}</div>`)
document.write(`<hr>`)
for(let i=0; i<length; i++){
    document.write(`<div>`)
    document.write(`<p>The admin for Team ${i+1} is ${myAdmins[i]}</p>`)
    document.write(`<h2>Team Members:</h2>`);
    flag=0
    for (let j=0; j<myEmployees.length; j++){
        document.write(`<div>`)
        if (myEmployees[j][0]==myAdmins[i][0]){
            
            document.write(`<p>- ${++flag} ${myEmployees[j]}</p>`)
        }
        document.write(`</div>`)
    }
    document.write(`</div>`)
    document.write(`<hr>`)
}