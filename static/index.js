(function() {
    const forms = document.forms;

    function onSubmit(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        for (let [name, value] of formData) {
            console.log(`${name}: ${value}`)
        }
    }

    for (form of forms) {
        form.addEventListener("submit", onSubmit);
    }
})();