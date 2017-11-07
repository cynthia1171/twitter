//obtengo el id del boton
var btnTweet = document.getElementById('tweet');
var boxComment = document.getElementById('box-comment');

//maximo de caracteres
var largoMax = 140;

var contador = document.getElementById('contador');
var numContador = document.createTextNode(largoMax);

contador.appendChild(numContador);

var comment = document.getElementById('comment');
//funcion contador de caracteres
comment.addEventListener('keyup', function() {
    var newChar = largoMax - document.getElementById('comment').value.length;
    var newContador = document.createTextNode(newChar);
    contador.innerHTML = newContador.textContent;

    //si el contador es menor a 0, el boton queda deshabilitado
    if (newContador.textContent < 0) {
        document.getElementById('tweet').disabled = true;
    } else {
        document.getElementById('tweet').disabled = false;
    }
    //si el contador esta entre 140 y 20 caracteres se añade la clase
    //verde, y se eliminan las clases rojo y naranjo.
    if (newContador.textContent <= 140 && newContador.textContent > 20) {
        contador.classList.add('verde');
        contador.classList.remove('rojo');
        contador.classList.remove('naranjo');
    }
    //si el contador esta entre 20 y 11 caracteres se añade la clase
    //naranjo, y se eliminan las clases rojo y verde.
    if (newContador.textContent <= 20 && newContador.textContent > 10) {
        contador.classList.add('naranjo');
        contador.classList.remove('verde');
        contador.classList.remove('rojo');
    }
    //si el contador es menor a 10 se añade la clase
    //rojo, y se eliminan las clases verde y naranjo.
    if (newContador.textContent < 10 && newContador.textContent >= 0) {
        contador.classList.add('rojo');
        contador.classList.remove('naranjo');
        contador.classList.remove('verde');
    }
})

//funcion para crear mensaje nuevo
btnTweet.addEventListener('click', function() {

    //obtengo el contenido del textarea
    var comment = document.getElementById('comment').value;

    //dejo textarea vacio
    document.getElementById('comment').value = '';

    //obtengo id del div padre
    var boxNew = document.getElementById('newMessage');

    //creamos un div con el nuevo comentario
    var newComment = document.createElement('div');

    //validar que textarea tenga un mensaje y no este vacio
    if (comment.length == 0 || comment == null) {
        document.getElementById('tweet').disabled = true;
        alert("debes ingresar un mensaje");
        return false;
    }

    //obtenemos la hora actual
    var actual = new Date();
    var hh = actual.getHours();
    var mm = actual.getUTCMinutes();

    //creamos el parrafo del mensaje
    var mensaje = document.createElement('textarea');

    //creamos el nodo de texto que ingresamos en el textarea
    var txtMensaje = document.createTextNode(comment);

    //crea elemento p que contiene la hora
    var hora = document.createElement('p');

    //creamos nodo de texto con la hora actual
    var txtHora = document.createTextNode(hh + ':' + mm);

    mensaje.appendChild(txtMensaje);
    hora.appendChild(txtHora);
    newComment.appendChild(mensaje);
    newComment.appendChild(hora);

    boxNew.appendChild(newComment);

})