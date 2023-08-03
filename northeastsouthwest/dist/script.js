// $("body").css("background-color", "yellow");

color = "purple";
number = 10;
word = "cool";

if (color === "purple") {
    $(".red").css("background-color", "purple");
}

if (number > 100) {
    $(".yellow").text("Whoa, that's a big number.");
} else {
    $(".yellow").text("just a regular number, please.");
}

if (word === "cool") {
    $(".green").text("The power of DOM");
} else {
    $(".blue").text("The power of DOM");
}
