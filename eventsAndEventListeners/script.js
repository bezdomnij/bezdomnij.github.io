$("h1").text("It works!");

$("#b1").click(() => {
    console.log("Yeah, you clicked me");
})

$("#b2").click(() => {
    // 
    let txtButton = $("#b1").text();
    if (txtButton == "Listener") {
        $("#b1").text("B2 was clicked")
    } else {
        $("#b1").text("Listener")
    }
})

$("#b3").click(() => {
    $("button").toggleClass("colorful");
})

let hasChanged = false;

$("#b4").click(() => {
    let colorContent = $("#colorinput").val()
    console.log(colorContent);
    if (!hasChanged) {
        $("button").css("background-color", colorContent)
    }
    hasChanged = true;
})