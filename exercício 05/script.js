const validarNomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarNomeUsuario.test("joao_123")); //true
console.log(validarNomeUsuario.test("12")); //false
console.log(validarNomeUsuario.test("aaaaaaaaaa11111111111111111111")); //false