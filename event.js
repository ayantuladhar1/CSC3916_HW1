//Ayan Tuladhar
//HW1
//The program below was compiled from lecture.

var event = require("events");
// emitter class
class myEvent extends event{}
// creating object of class myEvent
var myEventObject = new myEvent();
// object emitter class exposes 'on' method to attach listeners to name Event.
// attaching listener function to 'namedEvent'
myEventObject.on("namedEvent", function () {
    console.log("Called namedEvent in myEventObject's attached listener.");
});
myEventObject.emit("namedEvent");
/*
    *called namedEvent for myEventObject, all the listeners
    *listing to "namedEvent" will be called synchronously
 */