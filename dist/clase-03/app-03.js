"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Aserciones de tipos III
var codigoCurso;
codigoCurso = 100;
// let numeroCurso:number = codigoCurso
//Convertir una variable a un tipo diferente
var numeroCurso = codigoCurso;
console.log(numeroCurso);
/**
 * Forma de declarar sin Aserciones. En Typescript se necesita obligatoriamente referencias el tipo y que se asigne la variables antes de usarse
 *
 * Si solo tengo let estudiante: { nombre: string; edad: number } y trato de usarlo, da error debido a que no se ha asignado a nada.
 */
var estudiante = { nombre: '', edad: 0 };
estudiante.edad = 25;
estudiante.nombre = 'Juan';
console.log(estudiante);
var segundoEstudiante = {};
console.log('Segundo estudiante', segundoEstudiante);
/**
 * Forma de utilizar aserciones #2
 */
var tercerEstudiante = {};
console.log('Contenido del tercer estudiante', tercerEstudiante);
