

let moneda = prompt("SELECCIONAR COTIZACION \n\n 1 - PESOS A DOLARES \n 2 - DOLARES A PESOS \n\n 3 - SALIR");

while (moneda != "3"){ 

    if (moneda == "1"){

        let cantidad = prompt("INGRESE CANTIDAD DE PESOS");
        alert(cotizarDolar(cantidad));

    }else if (moneda == "2"){ 

        let cantidad2 = prompt("INGRESE CANTIDAD DE DOLARES");
        alert(cotizarPesos(cantidad2));
        
    }else {
        alert("ERROR: SELECCION INVALIDA");
    }
    moneda = prompt("SELECCIONAR COTIZACION \n\n 1 - PESOS A DOLARES \n 2 - DOLARES A PESOS \n\n 3 - SALIR");
}

function cotizarDolar(pesos){
    return "RECIBIRA USD:\n\n$"+ pesos / 300;
}

function cotizarPesos(dolar){
    return "RECIBIRA PESOS:\n\n$"+ dolar * 300;
}


/*Otra manera

function cotizarDolar(pesos){

    return pesos / 300;

}

function cotizarPesos(dolar){

    return dolar * 200;
}

let seleccion = prompt("SELECCIONES OPCION: \n\n 1 - PESOS A DOLARES \n 2 - DOLARES A PESOS \n\n 3 - SALIR");

while(seleccion != "3"){

    switch(seleccion){ 
        case "1":
            let pesos = prompt("Cantidad de pesos");
            alert(cotizarDolar(pesos));
            seleccion = prompt("SELECCIONES OPCION: \n\n 1 - PESOS A DOLARES \n 2 - DOLARES A PESOS \n\n 3 - SALIR");
            break;
        case "2":
            let dolares = prompt("Cantidad de dolares");
            alert(cotizarPesos(dolares));
            seleccion = prompt("SELECCIONES OPCION: \n\n 1 - PESOS A DOLARES \n 2 - DOLARES A PESOS \n\n 3 - SALIR");
            break;
        default:
            alert("ERROR: SELECCIONA UNA OPCION VALIDA");
            seleccion = prompt("SELECCIONES OPCION: \n\n 1 - PESOS A DOLARES \n 2 - DOLARES A PESOS \n\n 3 - SALIR");
            break;
    }
}*/ 