const _ = require ("lodash");
console.log("Мое имя к разным стилям написания слов в программировании");
let name = "Журавлев Федор Алексеевич"
console.log("kebab case: " + _.kebabCase(name));
console.log("camel case: " + _.camelCase(name));
console.log("lower case: " + _.lowerCase(name));
console.log("start case: " + _.startCase(name));
console.log("upper case: " + _.upperCase(name));