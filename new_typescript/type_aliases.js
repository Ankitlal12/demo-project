"use strict";
const createUser = (user) => {
    return { name: "", email: "", isActive: true };
};
createUser({ name: "", email: "", isActive: true });
let myUser = {
    _id: "12",
    name: "h",
    email: "mabsk@gmail.com",
    price: 5,
    active: true,
};
myUser.email = "akdakd@gmail.com";
//myUser._id="46"// this is coming error because _id cannot be used again due to readonly
