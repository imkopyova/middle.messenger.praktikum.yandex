function getFieldsValues(form) {
    const fieldsList = form.querySelectorAll("input");
    for (field of fieldsList) {
        console.log(field.value);
    }
}