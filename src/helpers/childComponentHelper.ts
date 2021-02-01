Handlebars.registerHelper("childComponent", function (object, propertyName) {
    const stub = document.createElement("div");
    stub.append(object[propertyName]);
    return new Handlebars.SafeString(stub.outerHTML);
});


