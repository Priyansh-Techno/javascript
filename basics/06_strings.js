const name = "Priyansh";
let repoCount = 100

// console.log(name + " repoCount" + " value"); //Priyansh100 Value

// console.log(`My name is ${name} and my rep count is ${repoCount}`);

const gameName = 'tech-tc'

// console.log(gameName[0]);                //t
// console.log(gameName.length);            //4
// console.log(gameName.toUpperCase());     //TECH
// console.log(gameName.charAt(2));         //c
// console.log(gameName.indexOf('e'));      //1

const newString = gameName.substring(0,3)
console.log(newString);                    //tec

const anotherString = gameName.slice(-8,3)
console.log(anotherString);                //tec

const newStringOne  = "    Priyansh    "
console.log(newStringOne);                 //     Priyansh
console.log(newStringOne.trim());          //Priyansh

const url = "https://priyansh.com/priyansh%20gupta"
console.log(url.replace('%20','-')) 
console.log(url.includes('priyansh'))


console.log(gameName.split('-'));




