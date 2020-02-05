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
//Tipos especiales en Typescript
// Tipo Any: cuando declaramos una variable y no le indicamos el tipo de dato o no sabemos el contenido que tendra
var desconocido;
var variablex;
//Tipo void: Ejecuta una acción pero no retorna nada (especificar la ausencia de un retorno). Se utiliza mas en ambito de funcion
var vacio;
function mostrarContenido(curso) {
    var mensaje = curso
        ? "Bienvenido al curso " + curso
        : "Suscribete al curso " + curso;
    console.log(mensaje);
}
mostrarContenido('Angular');
//Tipo never: Se usa en ambito de funcion y significa que nunca va a retornar un valor válido, digase un error o excepcion
function mostrarError(error) {
    throw new Error('Error en contenido en typescript: ' + error);
}
// mostrarError('Valor desconocido');
//Funciones en Typescript
function saludo(nombre) {
    return 'Hola ' + nombre;
}
console.log(saludo('Juank'));
//Parametros opcionales en las funciones colocando el signo de ?
function mencionar(nombre) {
    if (nombre)
        return "@" + nombre + " te han mencionado!";
    return 'No han mencionado a nadie';
}
console.log(mencionar('juan'));
console.log(mencionar());
//Arreglos en Typescript
var arreglo;
arreglo = ['Hello1', 'Hello2'];
console.log(arreglo);
var arreglo2 = [2, 'hello', true];
//Arreglos con Generics
var nombres;
nombres = ['Jc', 'jC', 'JC'];
//Tuplas: Nos permite definir variables que tengan un conjunto de datos. Estas tienen un orden en su contenido y debemos respetarlo
var info = ['Juan', 28];
var course = ['CSS', 100, '12/12/2025'];
console.log(course);
console.log(course[0]); //accediendo a una propiedad de la tupla
