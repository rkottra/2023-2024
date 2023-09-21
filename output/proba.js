"use strict";
var element = document.getElementById("content");
if (element != null) {
    element.style.backgroundColor = "red";
}
else {
    console.error("Nincs content azonosítójú html elem.");
}
