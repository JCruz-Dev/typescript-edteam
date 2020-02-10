"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EscuelaDigital = /** @class */ (function () {
    function EscuelaDigital(nombre, cursos) {
        this.nombre = '';
        this.cursos = [];
        this.nombre = nombre;
        this.cursos = cursos;
    }
    EscuelaDigital.prototype.agregarCurso = function (curso) {
        this.cursos.push(curso);
    };
    return EscuelaDigital;
}());
var escuela = new EscuelaDigital('PR school', ['CSS', 'HTML', 'JS']);
escuela.agregarCurso('Javascript');
console.log(escuela);
