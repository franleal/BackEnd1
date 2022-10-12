class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros || [];
        this.mascotas = mascotas || [];
    }

    getfullname = () => {
        return( `Nombre: ${this.nombre} Apellido:${this.apellido}`)
        
    }
    addMascotas(mascota){
        
        return this.mascotas.push(mascota);  
    }

    misMascotas(){
        return this.mascotas; 
    }

    countMascotas(){

        return this.mascotas.length
        
    }
    
    addBook(nombre,autor){
       this.libros.push({nombre,autor})
    }

    getBookNames(){
        return this.libros.map(({ nombre }) => nombre).join(", ");
    }

        
    
}

let usuario = new Usuario("Franco", "Rivas");
console.log(`El nombre de usuario es: ${usuario.getfullname()}.`);
let mascota1 = usuario.addMascotas("Gata");
let mascota2 = usuario.addMascotas("Perro");
console.log(`Este usuario tiene ${usuario.countMascotas()} mascotas}.`);
usuario.addBook("La Republica", "Platon");
usuario.addBook("Politica", "Aristoteles");
console.log(`Libros del usuario: ${usuario.getBookNames()}`);
console.log(`mascotas del usuario: ${usuario.misMascotas()}`);
