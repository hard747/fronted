export class Persona{
    constructor(nombre, edad){
        this.nombre=nombre
        this.edad=edad
    }
    mostrarInfo(){

        console.log(`${this.nombre} tiene ${this.edad} años`)
    }



}