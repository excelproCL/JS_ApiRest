var clc= require ('cli-color');
//imprime titulos
function tlog (arg) {
    txt=arg.toUpperCase();
    console.log(clc.yellow.underline(txt+'\n'));
}

//imprime subtitulos
function slog (arg) {
    txt=arg.toUpperCase();
    console.log(clc.white('\n'+"*** "+txt+" ***"));
}

function clog (arg) {
    console.log(arg);
}

//Limpia la consola
console.clear(); 
