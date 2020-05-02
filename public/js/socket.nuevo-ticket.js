

//Comando para establecer la conexión 
var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function (){
 
console.log('Conectado al Servidor');

});

socket.on('estadoActual', function(resp) {

label.text(resp.actual);

});

socket.on('disconnection', function(){ 

 console.log('Desconectado al servidor');

});


$('button').on('click', function(){

   socket.emit('siguienteTicket', null, function(siguienteTicket){

    label.text(siguienteTicket);

   });

});
    