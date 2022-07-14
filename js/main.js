// let nombre = prompt("ingrese su nombre");
// alert("Bienvenido/a " + nombre )

// let edadNino = 7;
// let edadPadre = 18;
// let pagoEntrada = true;
// if (pagoEntrada == false && (edadNino >= 8 || edadPadre >= 30)){
//     console.log("Puede subir")
// }else{
//     console.log("No puede subir")
// }

// let resultado;
// for(let i = 1; i <= 50; i++){
//     resultado = i + i;
//     console.log(i + " + " + i + " es igual a " + resultado)
// }  

// let resultados;
// let numero = 3;
// for (let i = 0; i <= 2; i++) {
//     prompt(resultados = numero * i)
// }

// for (let i = 0; i <= 3; i++) {
//     prompt("Hola")
// }

// let entrada = prompt("Escriba que piensa");
// while (entrada != "ESC"){
//     alert("El usuario piensa que " + entrada);
//     entrada = prompt("Ingrese otro pensamiento")
//     alert("Para salir de esto escriba ESC, si quiere proseguir siga escribiendo")
// }

// let noRepetir = false;
// let repetir = true;
// do{
//     console.log("No se tilda la pc");
// }while(noRepetir)


// for (let i = 1; i <= 5; i++){
//     let apellido = prompt("Ingresar apellido");
//     let nombre = prompt("Ingresar nombre");
//     while (apellido, nombre != "ESC"){
//         alert ("Turno Nº "+ i + " Apellido y Nombre: " + apellido +" "+ nombre);        
//     }
// }


// let ingresarMonto = parseInt(prompt("Ingresar monto"));
// let ingresarCuotas = parseInt(prompt("Ingresar cuotas"));
//     alert("Su monto de "+ ingresarMonto+ " lo pagaria en cuotas de "+ ingresarCuotas + " que seria un total de "+ ingresarMonto / ingresarCuotas) 

let resultado;
let ingresarMonto = parseInt(prompt("Ingresar monto"));
let ingresarCuotas = parseInt(prompt("Ingresar cuotas"));
    function cuotas(ingresarMonto, ingresarCuotas) {
    resultado = ingresarMonto / ingresarCuotas
    }
    cuotas(ingresarMonto,ingresarCuotas);
console.log(resultado);