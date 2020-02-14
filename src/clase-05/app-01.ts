export {};
//Decoradores en Typescript Se usan para analizar, modificar o reemplazar la definición de una clase.
//Se pueden usar a nivel de clase, metodo y atributo
// El target en la funcion del decorador, obtiene la definicion de la clase, metodo o atributo donde se especifica el decorador
function Entidad(target: any) {
    console.log('entidad', target);
}

@Entidad
class Curso {
    constructor(private _id: number, private _nombre: string) {}
    get id(): number {
        return this._id;
    }
    set id(id: number) {
        this._id = id;
    }
    get nombre(): string {
        return this._nombre;
    }
    set nombre(nombre: string) {
        this._nombre = nombre;
    }
}
let js = new Curso(1, 'Javascript');
console.log(js);
