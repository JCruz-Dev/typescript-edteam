//Alias para tipos de datos
let cursoNuevo: string | number; //esta variable puede recibir dos tipos de datos

function obtenerCurso(curso: string | number) {
    return curso;
}
function segundoCurso(): string | number {
    return 1;
}
console.log(obtenerCurso('Javascript'));
console.log(segundoCurso());

//Arreglos
let arr: (string | number)[] = ['Juan', 28, 1991];
console.log(arr);
