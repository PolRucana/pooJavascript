export default class Usuario {
    constructor(nombre,apellido,correo,activo){
        this.nombre=nombre,
        this.apellido=apellido,
        this.correo=correo,
        this.activo=activo
    }

    presentar(){
        return `Soy ${this.nombre} y mi correo es ${this.correo}`
    }

    getNombre(){
        return this.nombre
    }
    getApellido(){
        return this.apellido
    }
    setApellido(nuevoApellido){
        this.apellido=nuevoApellido
    }
}