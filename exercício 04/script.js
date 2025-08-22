const validarIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validarIp.test("190.167.1.1")); //true
console.log(validarIp.test("8.8.8.8")); //true
console.log(validarIp.test("191")) //false
console.log(validarIp.test("1932.1204.01.1")); //false