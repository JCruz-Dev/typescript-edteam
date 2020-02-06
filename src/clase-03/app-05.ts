/**
 * Las interfaces son agrupadores de tipos de datos. Podemos definir nuestro propio tipo de dato
 */

interface ICurso {
    nombre: string;
    id: number;
}
let typescript: ICurso = {
    nombre: 'Juan',
    id: 23
};
/**
 * Extendiendo interfaces
 */

interface ICurs extends ICurso {
    costo: number;
}

const primerCurso: ICurs = {
    nombre: 'Typescript',
    id: 1,
    costo: 30
};

console.log(primerCurso);
