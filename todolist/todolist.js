$("button").click(() => {
    let actualContent = $("input").val();
    console.log(actualContent);
    if (actualContent != '') {
        $("ul").append(`<li>${actualContent}</li>`);

    }
});


document.addEventListener('click', mouseEventsListener);

function mouseEventsListener(event) {
    switch (event.target.tagName) {
        case 'LI':
            $(event.target).toggleClass("stricken")
            break;
        default:
            break;
    }
}