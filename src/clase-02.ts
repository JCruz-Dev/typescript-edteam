//Tipos primitivos o Tipos básicos en Typescrpt
let estaConectado = true;
//Segunda forma de definir variables
let estaInscrito: boolean;
estaInscrito = false;
estaInscrito = true;

function tieneDescuento(curso: string) {
    if (curso === 'typescript') {
        return {
            curso,
            descuento: true
        };
    }
    return {
        curso,
        descuento: false
    };
}
console.log(`Verificando descuentoo..`);
console.log('El siguiente curso no tiene descuento', tieneDescuento('Angular'));

//Valores numericos
let numericos: number = 25;
let binario: number = 0b110011;
console.log('binario', binario);

//String
let nombre = 'Juan';
let apellido: string = 'Cruz';
let nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

//Tipos especiales en Typescript

// Tipo Any: cuando declaramos una variable y no le indicamos el tipo de dato o no sabemos el contenido que tendra
let desconocido: any;
let variablex;

//Tipo void: Ejecuta una acción pero no retorna nada (especificar la ausencia de un retorno). Se utiliza mas en ambito de funcion
let vacio: void;
function mostrarContenido(curso: string): void {
    const mensaje = curso
        ? `Bienvenido al curso ${curso}`
        : `Suscribete al curso ${curso}`;
    console.log(mensaje);
}
mostrarContenido('Angular');

//Tipo never: Se usa en ambito de funcion y significa que nunca va a retornar un valor válido, digase un error o excepcion

function mostrarError(error: string): never {
    throw new Error('Error en contenido en typescript: ' + error);
}
// mostrarError('Valor desconocido');

//Funciones en Typescript
function saludo(nombre: string): string {
    return 'Hola ' + nombre;
}
console.log(saludo('Juank'));

//Parametros opcionales en las funciones colocando el signo de ?
function mencionar(nombre?: string): string {
    if (nombre) return `@${nombre} te han mencionado!`;
    return 'No han mencionado a nadie';
}
console.log(mencionar('juan'));
console.log(mencionar());

//Arreglos en Typescript
let arreglo: string[];
arreglo = ['Hello1', 'Hello2'];
console.log(arreglo);

let arreglo2: any[] = [2, 'hello', true];

//Arreglos con Generics
let nombres: Array<string>;
nombres = ['Jc', 'jC', 'JC'];

//Tuplas: Nos permite definir variables que tengan un conjunto de datos. Estas tienen un orden en su contenido y debemos respetarlo
let info: [string, number] = ['Juan', 28];
let course: [string, number, string] = ['CSS', 100, '12/12/2025'];
console.log(course);
console.log(course[0]); //accediendo a una propiedad de la tupla
