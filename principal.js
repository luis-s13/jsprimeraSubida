
const fs = require('fs');
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
        costo:120       },
];

const opciones={
    //curso-id
    cid:{
        demand:true,
        alias:'i'       }  ,
    //estudiante-nombre
    nombre_e:{
        demand:true,
        alias:'n'       }  ,
    //x-estudiante documento
    documento:{
        demand:true,
        alias:'x'       }  
}
let princ=0;
const argv=require('yargs')

.command('$0', 'the default command', () => {}, (argv) => {
    princ=1; //pasa por la opcion principal
    console.log('El curso denominado '+cursos[0].nombre+
    ' tiene una duracion de '+cursos[0].duracion +
    ' horas y un costo de '+cursos[0].costo+ ' dolares')  
    setTimeout(function(){
        console.log('El curso denominado '+cursos[1].nombre+
        ' tiene una duracion de '+cursos[1].duracion +
        ' horas y un costo de '+cursos[1].costo+ ' dolares')          
        }, 2000);
 
    setTimeout(function(){
        console.log('El curso denominado '+cursos[2].nombre+
        ' tiene una duracion de '+cursos[2].duracion +
        ' horas y un costo de '+cursos[2].costo+ ' dolares')  
        }, 4000);
    
    }
  )

    .command('inscribir','Realizar inscripción',opciones)
    
    .argv

//validar id
idbuscar=argv.cid;

let cursobuscado = cursos.find(function(cursox ) { 
    return cursox.id == idbuscar})
if(cursobuscado===undefined )
{
    if(princ==0)
      { 
        console.log('Error: No se ha encontrado el id del curso ingresado');
        console.log('Recuerde que los cursos disponibles son:');
        for (a=0;a<3;a++)
        {
            console.log(cursos[a].id+' : '+cursos[a].nombre+ ' , Duracion:'+
            cursos[a].duracion+' horas, Costo:'+cursos[a].costo+' dolares');
        }
      }
}
else
{
    texto='Resultado de inscripción \n';
    linea='El estudiante '+argv.nombre_e+
    ' identificado con cedula '+argv.documento;
    texto=texto+linea+'\n';
    console.log(linea);
    linea='ha hecho la preinscripcion en el curso '+cursobuscado.nombre;
    texto=texto+linea+'\n';
    console.log(linea);
    linea='tiene una duracion de '+cursobuscado.duracion+' horas y un costo en dolares de '+cursobuscado.costo;
    texto=texto+linea;
    console.log(linea);

    fs.writeFile('prematricula.txt',texto,(err)=> {
        if(err) throw (err);
        console.log('<<Archivo creado>>')
     } );
   
}

//console.log(cursos[argv.cid].nombre);

