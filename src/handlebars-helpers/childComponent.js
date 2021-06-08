import { SafeString } from "handlebars/runtime.js";

export default function(object, propertyName) {
    const stub = object[propertyName].firstElementChild;
    stub.setAttribute("data-child", propertyName);
    return new SafeString(stub.outerHTML);
}