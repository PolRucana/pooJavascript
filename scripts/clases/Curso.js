export default class Curso {
    constructor(nombre,poster,nroClases) {
        this.nombre=nombre,
        this.poster=poster,
        this.nroClases=nroClases,
        this.inscritosAl= new Array()
        this.inscritosDoc= new Array()
    }

    getNombre(){
        return this.nombre
    }
    getPoster(){
        return this.poster
    }
    getNroClases(){
        return this.nroClases
    }
    getInscritosAl(){
        return this.inscritosAl
    }
    getInscritosDoc(){
        return this.inscritosDoc
    }

    setNombre(nombre){
        this.nombre = nombre
    }
    setPoster(poster){
        this.poster = poster
    }
    setNroClases(nroClases){
        this.nroClases = nroClases
    }
    setInscritosAl(inscritosAl){
        this.inscritosAl = inscritosAl
    }
    setInscritosDoc(inscritosDoc){
        this.inscritosDoc = inscritosDoc
    }
}