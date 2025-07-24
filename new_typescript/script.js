"use strict";
const getHello = (s) => {
    return "";
};
const heros = ["thor", "spiderman", "ironman"];
//const heros=[1,2,3]
heros.map((hero) => {
    return 'hero is ${hero}';
});
function consoleError(errmsg) {
    console.log(errmsg);
    return;
}
function handleError(errmsg) {
    throw new Error(errmsg);
} //the never type represents values which are never observed. In return type, this means that function throws an exception or terminated execution of program 
//any
let hero;
function getHero() {
    return "hero";
}
hero = getHero(); // whenever you dont want a value to cause typechecking errors
const getHi = (s) => {
    return "";
};
// tyo bahira ko string bhaneko return type must be string 
