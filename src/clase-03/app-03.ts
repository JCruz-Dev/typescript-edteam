export {};
//Aserciones de tipos III

let codigoCurso: any;
codigoCurso = 100;

// let numeroCurso:number = codigoCurso

//Convertir una variable a un tipo diferente
let numeroCurso: number = <number>codigoCurso;
console.log(numeroCurso);

/**
 * Forma de declarar sin Aserciones. En Typescript se necesita obligatoriamente referencias el tipo y que se asigne la variables antes de usarse
 *
 * Si solo tengo let estudiante: { nombre: string; edad: number } y trato de usarlo, da error debido a que no se ha asignado a nada.
 */
let estudiante: { nombre: string; edad: number } = { nombre: '', edad: 0 };
estudiante.edad = 25;
estudiante.nombre = 'Juan';
console.log(estudiante);

/**
 * Forma de utilizar aserciones #1
 */
type Estudiante = { nombre: string; edad: number };
let segundoEstudiante = <Estudiante>{};
console.log('Segundo estudiante', segundoEstudiante);

/**
 * Forma de utilizar aserciones #2
 */
let tercerEstudiante = <object>{};
console.log('Contenido del tercer estudiante', tercerEstudiante);
