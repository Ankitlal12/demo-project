"use strict";
//const user:(string|number)[]=["hc",1]
// the order of array shoulkd be precise
let users;
users = ["hc1", 13, true];
let rgb = [255, 255, 255];
const newuser = [25, "dmad"];
newuser[1] = "ndn";
newuser.push(1, "daad", "dasda");
//enums exist because to restirct something
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["ielts"] = "hello";
    SeatChoice[SeatChoice["Ai"] = 10] = "Ai";
    SeatChoice[SeatChoice["middle"] = 11] = "middle";
    SeatChoice[SeatChoice["final"] = 12] = "final";
    SeatChoice[SeatChoice["Fourth"] = 13] = "Fourth";
})(SeatChoice || (SeatChoice = {}));
const hcSeat = SeatChoice.Fourth;
