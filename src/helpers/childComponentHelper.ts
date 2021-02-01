Handlebars.registerHelper("childComponent", function (object, propertyName) {
    const stub = object[propertyName].firstElementChild;
    stub.setAttribute("data-child", propertyName);
    return new Handlebars.SafeString(stub.outerHTML);
});


