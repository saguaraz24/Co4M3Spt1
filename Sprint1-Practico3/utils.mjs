import fs from 'fs';

// Clase para representar un Superhéroe
class Superheroe {
    constructor(id, nombreSuperheroe, nombreReal, nombreSociedad, edad, 
                planetaOrigen, debilidad, poder, habilidadEspecial, aliado, 
                enemigo) {
        this.id = id;
        this.nombreSuperheroe = nombreSuperheroe;
        this.nombreReal = nombreReal;
        this.nombreSociedad = nombreSociedad;
        this.edad = edad;
        this.planetaOrigen = planetaOrigen;
        this.debilidad = debilidad;
        this.poder = poder;
        this.habilidadEspecial = habilidadEspecial;
        this.aliado = aliado;
        this.enemigo = enemigo;
    }
}

// leer supeheroes
export function leerSuperheroes(rutas) {
    let superheroes = [];

    if (!Array.isArray(rutas)) rutas = [rutas];

    rutas.forEach(ruta => {
        try {
            const datos = fs.readFileSync(ruta, 'utf8');
            const arr = JSON.parse(datos);
            const heroes = arr
                .map(hero => new Superheroe(
                    hero.id, hero.nombreSuperheroe, hero.nombreReal,
                    hero.nombreSociedad, hero.edad, hero.planetaOrigen,
                    hero.debilidad, hero.poder, hero.habilidadEspecial,
                    hero.aliado, hero.enemigo
                ))
                .filter(hero => hero && hero.nombreSuperheroe);

            superheroes = superheroes.concat(heroes);
        } catch (err) {
            console.error(`Error al leer o parsear ${ruta}:`, err.message);
        }
    });

    superheroes.sort((a, b) => a.nombreSuperheroe.localeCompare(b.nombreSuperheroe));

    return superheroes;
}

// export function leerSuperheroes(rutas) {
//     let superheroes = [];

//     if (!Array.isArray(rutas)) rutas = [rutas];

//     rutas.forEach(ruta => {
//     try{
//     const datos = fs.readFileSync(ruta, 'utf8');
//     const superheroesArray = JSON.parse(datos);

//     // Convertir a instancias de Superheroe
//     const superheroes = superheroesArray
//     .map(hero => new Superheroe(hero.id, hero.nombreSuperheroe, hero.nombreReal,
//                                hero.nombreSociedad, hero.edad, hero.planetaOrigen,
//                                hero.debilidad, hero.poder, hero.habilidadEspecial,
//                                hero.aliado, hero.enemigo
//     ))
//     .filter(hero => hero && hero.nombreSuperheroe);

//    // Ordenar por nombre de superhéroe
//     superheroes.sort((a, b) => a.nombreSuperheroe.localeCompare
//             (b.nombreSuperheroe));
//     return superheroes;        

// } catch (err) {
//         console.error(`Error al leer o parsear ${ruta}:`, err.message);
//         return [];
//     }
// });

//     superheroes.sort((a, b) => a.nombreSuperheroe.localeCompare(b.nombreSuperheroe));

//     return superheroes;
// }



// Nueva función para agregar superhéroes 
export function agregarSuperheroes (rutaOriginal, rutaNuevos) {
    try { 
        const datosOriginales = fs.readFileSync(rutaOriginal, 'utf8'); 
        const datosNuevos = fs.readFileSync (rutaNuevos, 'utf8'); 
        const superheroesOriginales = JSON.parse(datosOriginales) 
                .map(hero => new Superheroe(
                                hero.id, hero.nombreSuperheroe, hero.nombreReal,
                                hero.nombreSociedad, hero.edad, hero.planetaOrigen,
                                hero.debilidad, hero.poder, hero.habilidadEspecial,
                                hero.aliado, hero.enemigo
                            ));
        const nuevosSuperheroes = JSON.parse(datosNuevos)
                .map(hero => new Superheroe(
                                hero.id, hero.nombreSuperheroe, hero.nombreReal,
                                hero.nombreSociedad, hero.edad, hero.planetaOrigen,
                                hero.debilidad, hero.poder, hero.habilidadEspecial,
                                hero.aliado, hero.enemigo
                            ));

        // // Convertir los nuevos superhéroes a instancias de Superheroe 
        // const instanciasNuevos = nuevosSuperheroes.map( 
        // hero => new Superheroe (hero.id, hero.nombreSuperheroe, 
        // hero.nombreReal, hero.nombreSociedad, hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo) 
        // ); 
        // // Combinar listas 
        // const listaActualizada = [...superheroesOriginales, ...instanciasNuevos]; 
        // // Guardar la lista actualizada 
        // fs.writeFileSync(rutaOriginal, JSON.stringify(listaActualizada, null, 2), 
        // 'utf8'); 
        // console.log('Lista de superhéroes actualizada con éxito.'); 
        // }
          const listaActualizada = [...superheroesOriginales, ...nuevosSuperheroes];

        fs.writeFileSync(rutaOriginal, JSON.stringify(listaActualizada, null, 2), 'utf8');
        console.log('Lista de superhéroes actualizada con éxito.');
    } catch (err) {
        console.error('Error al agregar superhéroes:', err.message);
    }
}