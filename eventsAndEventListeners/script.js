$("h1").text("It works!");

$("#b1").click(() => {
    console.log("Yeah, you clicked me");
})

$("#b2").click(() => {
    // 
    txtButton = $("#b1").text();
    if (txtButton == "Listener") {
        $("#b1").text("B2 was clicked")
    } else {
        $("#b1").text("Listener")
    }
})

$("#b3").click(() => {
    $("button").toggleClass("colorful");
})