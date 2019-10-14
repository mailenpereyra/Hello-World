(function(){
//variables
let lista = document.getElementById("lista");
let tareaInput = document.getElementById("tareaInput");
let btnNuevaTarea = document.getElementById("btn-agregar");

//Funciones
let agregarTarea = function(){
   let tarea = tareaInput.value;
   let nuevaTarea = document.createElement("li");
   let enlace = document.createElement("a");
   let contenido = document.createTextNode(tarea);

   if(tarea === "") {
   tareaInput.setAttribute("placeholder", "agrega una tarea valida");
   tareaInput.className = "error";
   return false;
   }
   
   //agregamos el contenido al enlace
   enlace.appendChild(contenido);
   //le establecemos un atributo href
   enlace.setAttribute("href", "#");
   //agregamos el enlace (a) a la nueva tarea (li)
   nuevaTarea.appendChild(enlace);
   //agregamos la nueva tarea a la lista
   lista.appendChild(nuevaTarea);

   tareaInput.value = "";

   for(i = 0; i <= lista.children.length -1; i++) {
       lista.children[i].addEventListener("click", function(){
           this.parentNode.removeChild(this);
           alert("borrar?");
       });
   }
};
let comprobarInput = function(){
    tareaInput.className = "";
    tareaInput.setAttribute("placeholder", "agrega tu tarea");
};
let eliminarTarea = function(){
    this.parentNode.removeChild(this);
    alert("borrar?");
};
//Eventos
// agregar Tarea
btnNuevaTarea.addEventListener("click", agregarTarea);
//comprobar input
tareaInput.addEventListener("click", comprobarInput);
//borrando elementos de la lista
for(i=0; i <= lista.children.length -1; i++){
lista.children[i].addEventListener("click", eliminarTarea);
}


}());