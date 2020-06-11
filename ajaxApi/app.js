document.getElementById('cargar').addEventListener('click', cargarDatos);


function cargarDatos() {
    //Crear el objeto xmlhttprequest
    const xhr = new XMLHttpRequest();

    //Abrir una conexión
    xhr.open('GET', 'datos.txt', true);

    xhr.onreadystatechange = function() {

        console.log(`Estado ${this.readyState}`);


        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
        }
    }

    //ready status
    /*
    0.- No inicializado
    1- conexión establecida
    2.- Recibido
    3.-Procesado
    4.- Respuesta Lista
    */


    //Enviar el request
    xhr.send();
}