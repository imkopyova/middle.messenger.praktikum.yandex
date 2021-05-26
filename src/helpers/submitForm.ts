const forms = document.forms;

const validations: {[key: string]: RegExp} = {
    email: /^\S+@\S+$/i,
    tel: /\+7\s\([0-9]{3}\)\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}/i,
    text: /\w+/,
    password: /\w+/,
};

export function onSubmit(event: Event): unknown {
    event.preventDefault();
    
    const element = <HTMLFormElement>event.target;
    const form = element.closest("form");
    if (!form) {
        return;
    }
    const formData = new FormData(form);
    let hasErrors = document.querySelectorAll(".field-state-error").length > 0;

    if (!hasErrors) {
        const dataObj: any = {};
        for (const [name, value] of formData) {
            dataObj[name] = value;
        }
        return dataObj;
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

for (const form of forms) {
    const fields = form.querySelectorAll(".field");
    for (const field of fields) {
        addBlurFocusListener(field);
    }
}