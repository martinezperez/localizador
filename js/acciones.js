// JavaScript Document
$(document).ready(function (e){
//watchID se refiere a actual

var watchID=null
document.addEventListener("deviceready",Dispositivo_Listo,false);

//Cuando esta Listo el Dispositivo
function Dispositivo_Listo(){
Comienza();
}

//Empieza la observacion de la aceleracion
function Comienza(){

//Actualizar la aceleracion cada 2 segundos
//
var opciones={frequency:2000};

WatchID=navigator.accelerometro.watchAcceleration(Correcto, Error, opciones);
navigator.geolocation.getCurrentPosition(Localiza, ErrorLocalizacion);
}
//Detiene la observacion de la aceleracion

function Detener(){
if(watchID){
navigator .accelerometer.clearWatch (watchID);
watchID=null;
}
}
//Correcto Toma una captura de la aceleracion
function Correcto(acceleration){
var element=document.getElementById('acelerometro');

element.innerHTML='Aceleracion en X;'+acceleration.x+'<br/>'+
'Aceleraccion en Y:'+acceleration.y+'<br/>'+
'Intervalo:'+acceleration.timestamp+'<br/>'+;
}

//eRROR:FALLA al obtener la aceleracion
function Error(){
alert('Error!');
}
//Exito al localizar
function Localizar(posicion){
var element=document.getElementById('geolocalizacion');
element.innerHTML='Latitud:'+posicionn.coords.latitude+'<br/>' +
'Longitud:' +posicion.coords.longitude +'<br/>' +
'Precision:' +posicion.coords.accuracy +'<br/>' +
'Intervalo:' +posicion.timestamp +'<br/>';
}
//Error en la geolocalizacion
function ErrorLocalizacion(error){
alert('codigo:' +error.code +'\n'+
'mensaje: '+error.message+'\n');
}
});//document ready
	