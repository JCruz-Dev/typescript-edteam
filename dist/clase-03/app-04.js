"use strict";
//Enumerados
//Son una forma de definir un set reducido de datos que ya conocemos y que es manejable
var Figuras;
(function (Figuras) {
    Figuras[Figuras["Circulo"] = 0] = "Circulo";
    Figuras[Figuras["Triangulo"] = 1] = "Triangulo";
    Figuras[Figuras["Cuadrado"] = 2] = "Cuadrado";
    Figuras[Figuras["Rectangulo"] = 3] = "Rectangulo";
})(Figuras || (Figuras = {}));
var fig = Figuras.Circulo;
console.log(fig);
console.log(Figuras[0]);
//Tambien se pueden controlar los valores de un enum para que no sean numeros o al reves
var Peliculas;
(function (Peliculas) {
    Peliculas["A"] = "Avengers";
    Peliculas["B"] = "Black Panther";
    Peliculas["C"] = "Infinity War I";
})(Peliculas || (Peliculas = {}));
console.log(Peliculas.A);
