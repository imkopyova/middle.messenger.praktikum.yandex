function getTextareaValues(form) {
    const fieldsList = form.querySelectorAll("textarea");
    for (field of fieldsList) {
        console.log(field.value);
    }
}