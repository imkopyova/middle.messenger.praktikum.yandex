import { registerHelper, SafeString } from "handlebars";

export const childComponentHelper = () => registerHelper("childComponent", function (object, propertyName) {
    const stub = object[propertyName].firstElementChild;
    stub.setAttribute("data-child", propertyName);
    return new SafeString(stub.outerHTML);
});

export const childComponentArrayHelper = () => registerHelper("childComponentArray", function (object, propertyName) {
    const stubs = [];
    for (const stub of object[propertyName]) {
        stub.setAttribute("data-child", propertyName);
        stubs.push(stub.innerHTML);
    }
    return new SafeString(`${stubs.join("")}`);
});

export const isEqualHelper = () => registerHelper("isEqual", function (a, b) {
    return a == b;
});