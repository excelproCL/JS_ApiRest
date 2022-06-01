//Documentacion https://nodejs.dev/learn/reading-files-with-nodejs
//Video: https://youtu.be/8JYBwCaZviE

//Modulo fs
const fs=require('fs');

/* //Escribe un archivo
fs.writeFile('data1.txt', 'Hola Mundo',(error)=>{
    if(error){
        console.log(`Error : ${error}`);

    }
});

//Lee un archivo
fs.readFile('data1.txt','utf-8',(error,data)=>{
    //Si NO hay error
    if(!error){ 
        console.log(`Contenido del archivo: ${data} `);
    }else {
        console.log(`Error : ${error}`);
    }
});

//Renombrar archivo
var oldFileName = 'data1.txt'
var newFileName = 'data2.txt';
fs.rename(oldFileName, newFileName , (error)=>{
    if(!error) {
        console.log(`archivo ${oldFileName} fue renombrado a ${newFileName}`);
    } else {
        console.log(`Error : ${error}`);
    }
});  */

//Agregar Datos al archivo
fs.appendFile('newdata.txt', '\n Esta es una nueva linea en el archivo' ,(error)=>{
    if(!error) {
        let contentsFile=fs.readFileSync('newdata.txt','utf-8');//sincrona
        console.log(`Exito! : ${contentsFile} `);
        
    } else {
        console.log(`Error : ${error}`);
    }
})

//Copiar un archivo
fs.createReadStream('newdata.txt').pipe(fs.createWriteStream('newdata2.txt'));

//Borrar un archivo !!WARNING
let deleteFile='newdata2.txt';
fs.unlink(deleteFile,(error)=>{
    if(error){
        console.log(`Error : ${error}`);
    }else {
        console.log('Archivo borrado');
    }
})

//Mostrar Archivos
fs.readdir('./', (error, archivos)=>{
    archivos.forEach(archivo=>{
        console.log(archivo);
    });
});




