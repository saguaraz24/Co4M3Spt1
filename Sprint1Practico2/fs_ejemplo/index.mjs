import fs from 'fs';


// Leer un archivo de manera asíncrona
fs.readFile('ejemplo2.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Contenido del archivo: ------', data);
});


// Escribir en un nuevo archivo
fs.writeFile('ejemplo5.txt', 'Contenido nuevo Prueba5////////' , (err) => {
    if (err) throw err;
    console.log('Archivo creado y escrito');
});


// Renombrar un archivo
fs.rename('ejemplo3.txt', 'ejemplo6.txt', (err) => {
    if (err) throw err;
    console.log('Archivo renombrado');
});
