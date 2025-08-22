const valMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(valMarca.test("Marca: Nike"));  
console.log(valMarca.test("Marca: Adidas"));
console.log(valMarca.test("Marca: Puma"));    
console.log(valMarca.test("Marca: Asics"));  
console.log(valMarca.test("Marca: Reebok"));  
console.log(valMarca.test("marca: Nike"));    
