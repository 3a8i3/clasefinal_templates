//
// function iniciar(){
//    $("#container").html("<h1>H0l4</h1>");
// }
// iniciar();

var titulo;
var descrip;
var template;

/*recupera la plantilla y la guarda en la variable template*/
$.get("templates/temp.html",function(dato){
   template = dato;
   console.log(template);
})

$("#btnGuardar").click(function(event) {
   titulo = $("#titulo").val();
   descrip = $("#descrip").val();
   //guardar la plantilla como un objeto jquery
   var t = $(template);

   //se busca el componente h2 y p y se escribe dentro el valor de las variables
   t.find("h2").text(titulo);
   t.find("p").text(descrip);

   //se inserta en el index la plantilla cargada
   $("#container").append(t);

   limpiar();
   console.log(titulo+" "+descrip);
});

function limpiar(){
   $("#titulo").val("");
   $("#descrip").val("");
}
