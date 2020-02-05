"use strict";
//Tipos primitivos o Tipos básicos en Typescrpt
var estaConectado = true;
//Segunda forma de definir variables
var estaInscrito;
estaInscrito = false;
estaInscrito = true;
function tieneDescuento(curso) {
    if (curso === 'typescript') {
        return {
            curso: curso,
            descuento: true
        };
    }
    return {
        curso: curso,
        descuento: false
    };
}
console.log("Verificando descuentoo..");
console.log('El siguiente curso no tiene descuento', tieneDescuento('Angular'));
//Valores numericos
var numericos = 25;
var binario = 51;
console.log('binario', binario);
//String
var nombre = 'Juan';
var apellido = 'Cruz';
var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);
