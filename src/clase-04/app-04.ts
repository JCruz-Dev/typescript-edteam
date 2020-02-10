//Metodos Get y Set
export {};

//Miembros publicos
//Por default typescript pone como publicos los atributos y metodos de una clase
class Curso {
    constructor(private _id: number, private _nombre: string) {}
    //Los modificadores de acceso private no nos permite acceder de forma directa a los atributos de una clase
    //Los metodos de acceso2 get y set nos ayudan con esta tarea
    get id() {
        return this._id;
    }
    get nombre() {
        return this._nombre;
    }
    set id(id: number) {
        this._id = id;
    }
    set nombre(nombre: string) {
        this._nombre = nombre;
    }
}

class EscuelaDigital {
    private cursos: Curso[] = [];

    constructor(private _nombre: string) {}

    get nombre() {
        return this._nombre;
    }

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
curso.nombre = 'San jose de ya tu sabe';
console.log(curso.nombre);
console.log(escuela.nombre);
