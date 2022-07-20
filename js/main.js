    let monto = parseInt(prompt("Ingresar monto"));
    let resultadoB;
    let resultadoT;
    const valores = {
        dolarBlue: [291],
        dolarTurista: [236.69]
    } 
    console.log(valores.dolarBlue.length)
    console.log("Hoy es " +new Date + " y el dolar blue esta a: " + valores.dolarBlue + " mientras que, el turista esta a: " + valores.dolarTurista)
function conversor(cuanto){
    if(cuanto){
        resultadoB = monto / valores.dolarBlue ;
        resultadoT = monto / valores.dolarTurista;
        console.log("El cambia de pesos a dolar blue es: $" + resultadoB.toFixed(2) + " y el cambio de peso a dolar turista es de: $" + resultadoT.toFixed(2)) ;
    }else{
        console.log("tienes que completar los requerimientos");
    }
}
conversor (monto);

