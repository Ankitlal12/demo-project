"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "ankit",
    email: "shresthaankitlal@gmail.com",
    isActive: true
};
function createUser(_a) {
    var name = _a.name, isPaid = _a.isPaid;
}
var newUser = { name: "ankit", isPaid: false, email: "lal@gamil.com" };
createUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 99 };
}
