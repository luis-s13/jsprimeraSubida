/*
let notas = [{
    nombre: 'Juan', 
    matematicas: 4, 
    ingles: 3, 
    programacion: 2 
    }, 
    {
    nombre:'Maria',
    matematicas: 5, 
    ingles: 1,
    programacion: 3 
    }];

    nombre = 'juan'; 

let estudianteNota = notas.find(function(notaEst ) { 
return notaEst.nombre == nombre})

console.log(estudianteNota);
*/
let cursos= [ 
    {   id:1,
        nombre:'Mineria de datos',
        duracion:40,
        costo:100       },
    {   id:2,
        nombre:'Introduccion a Python',
        duracion:32,
        costo:80       },
    {   id:3,
        nombre:'Procesos Estocasticos',
        duracion:48,
        costo:120       }
];

idbuscar=6;

let cursobuscado = cursos.find(function(cursox ) { 
    return cursox.id == idbuscar})
if(cursobuscado===undefined)
{
    console.log('err');
}
else
{
    console.log('ok');
}
