// import { leerSuperheroes, agregarSuperheroes } from './utils.mjs'; 
// const rutas = ['archivoOriginal.json', 'archivoNuevos.json'];
// // const archivoOriginal = './superheroes.txt';
// // const archivoNuevos = './agregarSuperheroes.txt';

// // Leer superhéroes de todas las rutas
// const superheroes = leerSuperheroes(rutas);
// //Agregar nuevos superhéroes
// agregarSuperheroes(archivoOriginal, archivoNuevos);


// // Leer y mostrar la lista actualizada de superhéroes ordenada 
// //const superheroes = leerSuperheroes('archivoOriginal, archivoNuevos'); 
// console.log('Superhéroes ordenados:'); 
// console.log(superheroes); 

import { leerSuperheroes, agregarSuperheroes } from './utils.mjs'; 

const archivoOriginal = 'superheroes.txt';
const archivoNuevos = 'agregarSuperheroes.txt';

// Leer superhéroes existentes
const superheroes = leerSuperheroes([archivoOriginal, archivoNuevos]);

// Agregar nuevos superhéroes al archivo original
agregarSuperheroes(archivoOriginal, archivoNuevos);

// Leer y mostrar la lista actualizada
const superheroesActualizados = leerSuperheroes(archivoOriginal);
console.log('Superhéroes ordenados:');
console.log(superheroesActualizados);

