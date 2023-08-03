const names = ["Peter", "Pavel", "Margit", "Luca", "Attila"];

names.forEach(name => {
    if (name === 'Attila') {
        name = `<strong>${name}</strong>`;
    }
    let element = `<li>${name}</li>`;
    $("ul").append(element);
})

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
};

$("main").append("<section></section>");
$("section").append(`<h2>${additionalBlock.title}</h2>`);
$("h2:last-of-type").after(`<p>${additionalBlock.text}</p>`);
