// =====================================
// Sistema de Gestión de Tareas
// =====================================

/*
INSTRUCCIONES GENERALES:

1. Lee cuidadosamente cada sección.
2. Completa únicamente donde se indica con TODO.
3. No borres la estructura base.
4. Agrega comentarios explicando tu lógica.
5. Prueba cada función antes de continuar.
6. NO USAR INTELIGENCIA ARTIFICIAL.
*/


// =====================================
// 1. Arreglo inicial de tareas
// =====================================

/*
Cada tarea tiene:
- nombre: string
- prioridad: number (1 = alta, 2 = media, 3 = baja)
- completada: boolean
*/

const tareas = [
  { nombre: "Ir a la playa", prioridad: 1, completada: false },
  { nombre: "Estudiar JS", prioridad: 2, completada: false },
  { nombre: "Ver películas", prioridad: 3, completada: false }
];


// =====================================
// 2. Funciones
// =====================================

/*
TODO 1:
Crear una función que recorra el arreglo de tareas
y muestre en consola:
- nombre de la tarea
- estado: "Completada" o "Pendiente"
*/

/**
 * Dentrode la funcion se encuentra un for que itera hasta el tamaño que tenga el arreglo
 * y dentro imprime en mensaje el nombre el objeto, usando como indicador de posicion la i
 * asi itera sobre cada uno de los objetos, ademas, dentro de la impresion hay un ternario
 * que dependiendo del valor que tenga el atributo completada mostrara "Completada" / "Pendiente"
 */
function mostrarTareas(lista) {

  for (let i = 0; i < lista.length; i++) {

    console.log(`Nombre: ${lista[i].nombre}, estado: ${lista[i].completada?"Completada":"Pendiente"}`);
  
  }
}


/*
TODO 2:
Crear una función flecha que retorne
solo las tareas completadas.
Usar filter.
*/

/**
 * Dentro de la funcion de flecha hay una lista que usa Filter, donde se filtra 
 * solamente los Objetos que tengan el atributo en Completada
 */
const obtenerCompletadas = (lista) => {
  
  return lista.filter(e => e.completada === true);

};


/*
TODO 3:
Crear una función flecha que retorne
solo las tareas pendientes.
Usar filter.
*/

/**
 * Dentro de la funcion de flecha hay una lista que usa Filter, donde se filtra 
 * solamente los Objetos que tengan el atributo en Pendiente
 */
const obtenerPendientes = (lista) => {
  
  return lista.filter(e => e.completada === false);

};


/*
TODO 4:
Crear una función flecha que retorne
solo los nombres de las tareas.
Usar map.
*/

/**
 * Para esta funcion al usar map se regresa una lista donde solamente se tienen los nombres
 * dado que despues de la flecha se especifica que solamente tenga lista.nombre el cual es 
 * un atributo de la lista de tareas
 * @param {*} lista 
 * @returns 
 */
const obtenerNombres = (lista) => {
  
  return lista.map(e => e.nombre);

};


/*
TODO 5:
Crear una función que retorne
el total de tareas.
*/

/**
 *Lo que hace este for es verificar que cada tarea tenga sus atributos, de manera que ninguna 
 *de las tareas tenga algun atributo faltante o que no este definido
 */
function contarTareas(lista) {

  let listaReal = [];
  for(let i = 0; i < lista.length; i++){
    if(lista[i].nombre && lista[i].completada !== undefined && typeof lista[i].prioridad === 'number'){
      listaReal.push(lista[i]);
    }
  }
  
  return listaReal.length;

}


// =====================================
// 3. Objeto sistema
// =====================================

/*
TODO 6:
Completar los métodos usando this.tareas

- mostrarTareas: debe llamar a la función mostrarTareas
- mostrarCompletadas: debe usar obtenerCompletadas
- mostrarPendientes: debe usar obtenerPendientes
*/

/**
 * Para la funcion de mostrarTareas se establece antes que si el tamaño de las tareas es 0 entonces
 * mostrara el mensaje No hay tareas y terminara ahi, si no entonces mostrara todas las tareas que hay
 * 
 * Para la funcion mostrarCompletadas verifica el numero de las tareas que estan como completadas sea el 
 * mismo que el de la lista y que el tamaño no sea 0, de esta manera se muestra en mensaje Todas las tareas 
 * estan completadas
 * 
 * Y el mismo caso es para la funcion mostrarPendientes, pero aplicado a su contexto, donde se verifica si 
 * es que todas estan pendientes
 */
const sistema = {
  tareas: tareas,

  mostrarTareas: function() {
    if(!this.tareas.length){
      console.log("No hay tareas")
      return;
    }

    console.log(mostrarTareas(this.tareas));
  },

  mostrarCompletadas: function() {
    
    let tareasCompletadas = obtenerCompletadas(this.tareas);

    if(this.tareas.length === tareasCompletadas.length && tareasCompletadas.length){
      console.log("Todas las tareas estan completadas")
    }

    console.log(tareasCompletadas)

  },

  mostrarPendientes: function() {

    let tareasPendientes = obtenerPendientes(this.tareas);

    if(this.tareas.length === tareasPendientes.length && tareasPendientes.length){
      console.log("Todas las tareas estan pendientes")
    }

    console.log(obtenerPendientes(this.tareas));
  }
};


// =====================================
// 4. Condicionales
// =====================================

/*
TODO 7:

- Si el arreglo tareas está vacío:
  mostrar "No hay tareas"

- Si todas las tareas están completadas:
  mostrar "Todas las tareas completadas"
*/


// =====================================
// 5. Switch
// =====================================

/*
TODO 8:

Usar la variable opcion para ejecutar:

1 -> mostrar todas las tareas
2 -> mostrar tareas completadas
3 -> mostrar tareas pendientes
default -> mostrar "Opción inválida"
*/

/**
 * Dentro de cada case esta la funcion correspondiente a la que se indica
 */

const opcion = 1

switch (opcion) {
  case 1:
    sistema.mostrarTareas();
    break;

  case 2:
    sistema.mostrarCompletadas();
    break;

  case 3:
    sistema.mostrarPendientes();
    break;

  default:
    console.log("Opción inválida");
}


// =====================================
// 6. Pruebas
// =====================================

/**
TODO 9:

Llamar funciones para comprobar que todo funciona correctamente.
Usar console.log donde sea necesario.
*/

console.log(obtenerNombres(tareas));

console.log(contarTareas(tareas));