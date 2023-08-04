function increase(content) {
    let numeric = parseInt(content);
    let newValue = numeric + 1;
    return newValue;
}

function decrease(content) {
    let numeric = parseInt(content);
    let newValue = numeric - 1;
    return newValue;
}

$("#incr").click(() => {
    let actual = $("h2").text();
    let newValue = increase(actual);
    $("h2").text(newValue);
})

$("#decr").click(() => {
    let actual = $("h2").text();
    let newValue = decrease(actual);
    $("h2").text(newValue);
})

