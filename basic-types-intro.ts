"use strict";

//Declaro una variable tipada
let nombre: string = "Gustavo";

let edad: number = 22;

let verdadero: boolean = true;

//Typescript no me permite asignarle un tipo distinto a la variable
nombre = 2;

verdadero = "a";

//Creo un objeto y queda guardado el tipo de dato de cada variable
let objeto = {
    nombre: "Luciano",
    apellido: "Torre"
}

//ENUM estructura de datos de TS que nos asigna un valor numerico incremental a las propiedades
enum Fases{
    primero, //0
    segundo, //1
    tercero  //2
}

enum userActions{
    fetchUser = "FETCH_USER",
    postUser = "POST_USER"
}

userActions.fetchUser //me va a dar "FETCH_USER" y lo puedo usar para un switch en redux

//No me permite acceder a una propiedad que no corresponde al objeto, en cambio JS puro me daria undefined
objeto.nomre;

