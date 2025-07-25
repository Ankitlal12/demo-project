"use strict";
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
