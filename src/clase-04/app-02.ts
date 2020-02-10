export {};

//Miembros publicos
//Por default typescript pone como publicos los atributos y metodos de una clase
class Curso {
    public id: number;
    public nombre: string;

    constructor(id: number, nombre: string) {
        this.id = id;
        this.nombre = nombre;
    }
}

class EscuelaDigital {
    public nombre: string = '';
    public cursos: Curso[] = [];

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    public agregarCurso(curso: Curso): void {
        this.cursos.push(curso);
    }
}

const escuela = new EscuelaDigital('PR school');
const curso = new Curso(1, 'Javascript');

escuela.agregarCurso(curso);

console.log(escuela.cursos);
