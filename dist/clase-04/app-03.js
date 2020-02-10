"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Miembros publicos
//Por default typescript pone como publicos los atributos y metodos de una clase
var Curso = /** @class */ (function () {
    function Curso(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
    return Curso;
}());
var EscuelaDigital = /** @class */ (function () {
    function EscuelaDigital(nombre) {
        this.nombre = nombre;
        this.cursos = [];
    }
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
