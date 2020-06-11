// Función

let aprendiendo;


aprendiendo = function(){
    console.log('Aprendiendo JavaScript');
}

aprendiendo = () => {
    console.log('Aprendiendo JavaScript');
}
// Una linea no requiere llave
aprendiendo = () => console.log('Aprendiendo JavaScript');
//Retorna valor
aprendiendo = () => 'Aprendiendo JavaScript';
// Retorna objeto
aprendiendo = () => ({aprendiendo: 'Aprendiendo JavaScript'});
//Pasar parametros
aprendiendo = (tecnologia) => console.log( `Aprendiendo ${tecnologia}`);
//Pasando 1 parametros
aprendiendo = tecnologia => console.log( `Aprendiendo ${tecnologia}`);
//Pasando 1 parametros
aprendiendo = (tecn1, tecn2) => console.log( `Aprendiendo ${tecn1} y ${tecn2}`);

const productos = ['Disco', 'Camisa', 'Guitarra'];
/*
const letrasProducto = productos.map(function(productos) {
    return producto.length;
});
*/
productos.forEach(producto => console.log(producto));