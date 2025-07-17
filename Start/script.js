console.log(`Learning js with Talha Tariq`);

//edabit
// access dom eliments by two ways i.e; by class, by tag
// if you are accessig by tag using queryselector than tag should be only one otherwise it will select first one

let heading = document.querySelector("h1");
console.log(heading);

let headingb = document.querySelector("h1");
console.log(heading);

// by class
let info = document.querySelector(".info");
console.log(info);

// by id
let learn = document.querySelector("#learn");
console.log(learn);

//chnaging content by innerhtml or textcontent
let firstName = document.querySelector(".name");
console.log(firstName);

firstName.innerHTML = "Hasnain";
console.log(`After .innerhtml: ${firstName}`);

firstName.textContent = "Hasnain";
console.log(`After .textContent: ${firstName}`);

