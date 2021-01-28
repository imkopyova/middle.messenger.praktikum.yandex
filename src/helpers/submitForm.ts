const forms = document.forms;

function onSubmit(e: Event) {
    e.preventDefault();
    console.log(e.target)
    let formData = new FormData(e.target);
    for (let [name, value] of formData) {
        console.log(`${name}: ${value}`)
    }
}

for (let form of forms) {
    form.addEventListener("submit", onSubmit);
}