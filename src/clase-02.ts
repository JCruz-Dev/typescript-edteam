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
