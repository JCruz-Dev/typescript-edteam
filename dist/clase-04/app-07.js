"use strict";
//Clases abstractas: Son clases demasiado generales para crear un objeto del mismo.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Curso.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        enumerable: true,
        configurable: true
    });
    return Curso;
}());
var Escuela = /** @class */ (function () {
    // Las propiedades de acceso privado no se heradan pero si las que esten con protected. Son terminos intermedios de acceso
    function Escuela(_id, _nombre) {
        this._id = _id;
        this._nombre = _nombre;
        this.cursos = [];
    }
    Object.defineProperty(Escuela.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Escuela.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Escuela.prototype, "__id", {
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Escuela.prototype, "__nombre", {
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    Escuela.prototype.agregarCurso = function (curso) {
        this.cursos.push(curso);
    };
    return Escuela;
}());
var EscuelaDigital = /** @class */ (function (_super) {
    __extends(EscuelaDigital, _super);
    function EscuelaDigital(id, nombre, paginaWeb) {
        var _this = _super.call(this, id, nombre) || this;
        _this.paginaWeb = paginaWeb;
        return _this;
    }
    Object.defineProperty(EscuelaDigital.prototype, "_paginaWeb", {
        get: function () {
            return this.paginaWeb;
        },
        set: function (pagina) {
            this.paginaWeb = pagina;
        },
        enumerable: true,
        configurable: true
    });
    return EscuelaDigital;
}(Escuela));
var escuela = new EscuelaDigital(1, 'Tech School', 'techschool.com');
var curso = new Curso(1, 'javascript');
var curso2 = new Curso(2, 'REACT');
var curso3 = new Curso(3, 'Svelte');
escuela.agregarCurso(curso);
escuela.agregarCurso(curso2);
escuela.agregarCurso(curso3);
escuela._paginaWeb = 'ya tu sabe.com';
console.log(escuela);
