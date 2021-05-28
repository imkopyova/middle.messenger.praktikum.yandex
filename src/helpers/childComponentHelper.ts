Handlebars.registerHelper("childComponent", function (object, propertyName) {
    const stub = object[propertyName].firstElementChild;
    stub.setAttribute("data-child", propertyName);
    return new Handlebars.SafeString(stub.outerHTML);
});

Handlebars.registerHelper("childComponentArray", function (object, propertyName) {
    const stubs = [];
    for (let stub of object[propertyName]) {
        stub.setAttribute("data-child", propertyName);
        stubs.push(stub.innerHTML);
    }
    return new Handlebars.SafeString(`${stubs.join("")}`);
});


