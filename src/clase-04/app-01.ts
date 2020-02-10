export {};

class EscuelaDigital {
    nombre: string = '';
    cursos: string[] = [];

    constructor(nombre: string, cursos: string[]) {
        this.nombre = nombre;
        this.cursos = cursos;
    }

    agregarCurso(curso: string): void {
        this.cursos.push(curso);
    }
}

const escuela = new EscuelaDigital('PR school', ['CSS', 'HTML', 'JS']);

escuela.agregarCurso('Javascript');

console.log(escuela);
