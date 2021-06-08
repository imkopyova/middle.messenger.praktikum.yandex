import { SafeString } from "handlebars/runtime.js";

export default function(object, propertyName) {
    const stubs = [];
    for (const stub of object[propertyName]) {
        stub.setAttribute("data-child", propertyName);
        stubs.push(stub.innerHTML);
    }
    return new SafeString(`${stubs.join("")}`);
}