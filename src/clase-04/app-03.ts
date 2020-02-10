export {};

//Miembros publicos
//Por default typescript pone como publicos los atributos y metodos de una clase
class Curso {
    constructor(private id: number, private nombre: string) {}
}

class EscuelaDigital {
    private cursos: Curso[] = [];

    constructor(private nombre: string) {}

    public agregarCurso(curso: Curso): void {
        this.cursos.push(curso);
    }
}

const escuela = new EscuelaDigital('PR school');
const curso = new Curso(1, 'Javascript');
const curso2 = new Curso(2, 'Angular');
escuela.agregarCurso(curso);
escuela.agregarCurso(curso2);
console.log(escuela);
