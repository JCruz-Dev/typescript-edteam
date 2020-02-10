"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Miembros publicos
//Por default typescript pone como publicos los atributos y metodos de una clase
var Curso = /** @class */ (function () {
    function Curso(_id, _nombre) {
        this._id = _id;
        this._nombre = _nombre;
    }
    Object.defineProperty(Curso.prototype, "id", {
        //Los modificadores de acceso private no nos permite acceder de forma directa a los atributos de una clase
        //Los metodos de acceso2 get y set nos ayudan con esta tarea
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Curso.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    return Curso;
}());
var EscuelaDigital = /** @class */ (function () {
    function EscuelaDigital(_nombre) {
        this._nombre = _nombre;
        this.cursos = [];
    }
    Object.defineProperty(EscuelaDigital.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        enumerable: true,
        configurable: true
    });
    EscuelaDigital.prototype.agregarCurso = function (curso) {
        this.cursos.push(curso);
    };
    return EscuelaDigital;
}());
var escuela = new EscuelaDigital('PR school');
var curso = new Curso(1, 'Javascript');
var curso2 = new Curso(2, 'Angular');
escuela.agregarCurso(curso);
escuela.agregarCurso(curso2);
console.log(escuela);
curso.nombre = 'San jose de ya tu sabe';
console.log(curso.nombre);
console.log(escuela.nombre);
