//Clases abstractas: Son clases demasiado generales para crear un objeto del mismo.

//Metodos Get y Set
//Atributos de solo lectura
export {};

//Miembros publicos
//Por default typescript pone como publicos los atributos y metodos de una clase
class Curso {
    constructor(
        private readonly _id: number,
        private readonly _nombre: string
    ) {}
    //Los modificadores de acceso private no nos permite acceder de forma directa a los atributos de una clase
    //Los metodos de acceso2 get y set nos ayudan con esta tarea
    get id() {
        return this._id;
    }
    get nombre() {
        return this._nombre;
    }
}
abstract class Escuela {
    private cursos: Curso[] = [];
    // Las propiedades de acceso privado no se heradan pero si las que esten con protected. Son terminos intermedios de acceso
    constructor(protected _id: number, protected _nombre: string) {}

    get id() {
        return this._id;
    }
    get nombre(): string {
        return this._nombre;
    }
    set __id(id: number) {
        this._id = id;
    }
    set __nombre(nombre: string) {
        this._nombre = nombre;
    }
    agregarCurso(curso: Curso): void {
        this.cursos.push(curso);
    }
}

class EscuelaDigital extends Escuela {
    constructor(id: number, nombre: string, private paginaWeb: string) {
        super(id, nombre);
    }
    get _paginaWeb() {
        return this.paginaWeb;
    }
    set _paginaWeb(pagina: string) {
        this.paginaWeb = pagina;
    }
}
const escuela = new EscuelaDigital(1, 'Tech School', 'techschool.com');
const curso = new Curso(1, 'javascript');
const curso2 = new Curso(2, 'REACT');
const curso3 = new Curso(3, 'Svelte');
escuela.agregarCurso(curso);
escuela.agregarCurso(curso2);
escuela.agregarCurso(curso3);
escuela._paginaWeb = 'ya tu sabe.com';
console.log(escuela);
