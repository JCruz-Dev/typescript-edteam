//Enumerados
//Son una forma de definir un set reducido de datos que ya conocemos y que es manejable

enum Figuras { //Por default los enums trabajan con numeros o array de numeros
    Circulo,
    Triangulo,
    Cuadrado,
    Rectangulo
}
let fig: Figuras = Figuras.Circulo;
console.log(fig);
console.log(Figuras[0]);

//Tambien se pueden controlar los valores de un enum para que no sean numeros o al reves
enum Peliculas {
    A = 'Avengers',
    B = 'Black Panther',
    C = 'Infinity War I'
}
console.log(Peliculas.A);
