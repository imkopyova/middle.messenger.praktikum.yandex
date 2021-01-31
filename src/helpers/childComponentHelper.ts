Handlebars.registerHelper("childComponent", function (object, propertyName) {
    const stub = document.createElement("div");
    stub.append(object[propertyName])
    // stub.setAttribute("data-child", propertyName);
    return new Handlebars.SafeString(stub.outerHTML);
});


