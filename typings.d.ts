/**
 * Este archivo sirve para cuando necesitemos utilizar librerias de terceros escritas en javascript y deseamos que las funciones o lo que se vaya a utilizar puedad ser compatible con typescript y que se puedan espeficar los tipos
 *
 * Este archivo ayuda al compilador con información sobre tipo de datos.
 */
declare module 'lodash' {
    //exporta los tipos que se usaran en la funcion que estaremos usando.
    export function random(min: number, max: number): number;
}
