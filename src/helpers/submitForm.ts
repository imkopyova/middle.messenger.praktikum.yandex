const forms = document.forms;

const validations: {[key: string]: RegExp} = {
    email: /^\S+@\S+$/i,
    tel: /\+7\s\([0-9]{3}\)\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}/i,
    text: /\w+/,
    password: /\w+/,
}

export function onSubmit(event: Event) {
    event.preventDefault();
    console.log(onSubmit);
    const element = <HTMLFormElement>event.target;
    let formData = new FormData(element);
    let hasErrors = false;

    const fields = document.querySelectorAll(".field");
    for (let field of fields) {
        const input = <HTMLInputElement>field.querySelector("input");
        const isValid = validateInput(input, field);
        if (!isValid) {
            hasErrors = true;
        }
    }

    if (!hasErrors) {
        for (let [name, value] of formData) {
            console.log(`${name}: ${value}`)
        }
    } 
}

function onFocus(field: Element) {
    field.classList.remove("field-state-error");
}

function onBlur(event: Event, field: Element) {
    validateInput(<HTMLInputElement>event.target, field);
}

function validateInput(input: HTMLInputElement, field: Element): boolean {
    const type = input.type;
    const value = input.value;

    let regexp = /\w+/;
    if (type in validations) {
        regexp = validations[type];
    }

    const isValid = regexp.test(value);

    if (!isValid) {
        field.classList.add("field-state-error");
        return false;
    }
    return true;
}

function addBlurFocusListener(field: Element) {
    const input = <HTMLInputElement>field.querySelector("input");
    input.addEventListener("focus", () => onFocus(field));
    input.addEventListener("blur", e => onBlur(e, field));
}

for (let form of forms) {
    const fields = document.querySelectorAll(".field");
    for (let field of fields) {
        addBlurFocusListener(field);
    }

    form.addEventListener("submit", onSubmit);
}