const boton1 = document.getElementById('boton1');
boton1.addEventListener('click', function(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'empleado.json', true);

    xhr.onload = function(){
        if (this.status === 200){
                const persona = JSON.parse(this.responseText);

                const htmlTemplate = `
                    <ul>
                        <li>ID: ${persona.id}</li>
                        <li>NOMBRE: ${persona.nombre}</li>
                        <li>EMPRESA: ${persona.empresa}</li>
                        <li>ACTIVIDADES: ${persona.trabajo}</li>
                    </ul>                          
                `;
                document.getElementById('empleado').innerHTML = htmlTemplate;
        }
    }
    xhr.send();
});


const boton2 = document.getElementById('boton2');
boton2.addEventListener('click', function(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'empleados.json', true);

    xhr.onload = function(){
        if (this.status === 200){
                const personal = JSON.parse(this.responseText);

                let htmlTemplate = '';
                personal.forEach(function(persona){
                    htmlTemplate += `
                    <ul>
                        <li>ID: ${persona.id}</li>
                        <li>NOMBRE: ${persona.nombre}</li>
                        <li>EMPRESA: ${persona.empresa}</li>
                        <li>ACTIVIDADES: ${persona.trabajo}</li>
                    </ul>                          
                `;
            })
            document.getElementById('empleados').innerHTML = htmlTemplate;
        }
    }
    xhr.send();
});


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

