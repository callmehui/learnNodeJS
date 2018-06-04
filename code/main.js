(function () {
    "use strict";
})();

var greet = require("./hello");

var name = "apple";

greet(name);

if(typeof(window) === "undefined" ){
    console.log("node js");
} else {
    console.log("browser");
}