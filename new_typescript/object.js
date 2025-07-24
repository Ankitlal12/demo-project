"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = {
    name: "ankit",
    email: "shresthaankitlal@gmail.com",
    isActive: true
};
function createUser({ name, isPaid }) { }
let newUser = { name: "ankit", isPaid: false, email: "lal@gamil.com" };
createUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 99 };
}
