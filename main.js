let btnEncriptar = document.querySelector(".btn-encriptar");
let btnDesencriptar = document.querySelector(".btn-desencriptar");
let btnCopiar = document.querySelector(".btn-copiar");

let imgMunieco = document.querySelector(".img-munieco");
let txtH2 = document.querySelector(".h2-nomensaje");
let txtParrafo1 = document.querySelector(".txt-parrado");
let divBefore = document.querySelector(".contendor__before");
let resultado = document.querySelector(".txt-area2");
let textoOriginal = document.querySelector(".txt-area1");

//------------------------------------------FUNCIONES---------------------------------------------------

//------------------FUNCIONES OCULTAR Y DESOCULTAR
function ocultarElementos(){
    imgMunieco.classList.add("ocultar");
    txtH2.classList.add("ocultar");
    txtParrafo1.classList.add("ocultar");
    divBefore.classList.add("ocultar");
}
function mostrarElementos(){
    let divAfter = document.querySelector(".contenedor__after");
    divAfter.classList.remove("ocultar");
}


//------------------FUNCION CAPTURAR TEXTO DE TEXTAREA
function capturarTexto(){
    let txtEntrada = document.querySelector(".txt-area1").value;
    return txtEntrada;
}


//------------------FUNCIONES DE ENCRIPTAR Y DESENCRIPTAR
function encriptarTexto(mensaje){
    let texto = mensaje;
    let textoResultado = "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoResultado += "ai";
        }else if(texto[i] == "e"){
            textoResultado += "enter";
        }else if(texto[i] == "i"){
            textoResultado += "imes";
        }else if(texto[i] == "o"){
            textoResultado+= "ober";
        }else if(texto[i] == "u"){
            textoResultado += "ufat";
        }else{
            textoResultado+= texto[i]
        }
    }
    return textoResultado;
}

function desencriptarTexto(mensaje){
    let texto = mensaje;
    let textoResultado = "";
    
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoResultado += "a";
            i+=1;
        }else if(texto[i] == "e"){
            textoResultado += "e";
            i+=4;
        }else if(texto[i] == "i"){
            textoResultado += "i";
            i+=3;
        }else if(texto[i] == "o"){
            textoResultado += "o";
            i+=3;
        }else if(texto[i] == "u"){
            textoResultado += "u";
            i+=3;
        }else{
            textoResultado+= texto[i]
        }
        
    }
    return textoResultado;
}

//------------------FUNCION COPIAR TEXTO
function copiarTexto() {
    ocultarAlCopiar();
    mostrarAlCopiar();
    textoOriginal.value = capturarTexto2()
}
function capturarTexto2(){
    let texto = document.querySelector(".txt-area2").value; 
    return texto;
}

function ocultarAlCopiar(){
    let divBefore = document.querySelector(".contendor__before");
    divBefore.classList.remove("ocultar");
    imgMunieco.classList.remove("ocultar");
    txtH2.classList.remove("ocultar");
    txtParrafo1.classList.remove("ocultar");
}
function mostrarAlCopiar(){
    let divAfter = document.querySelector(".contenedor__after");
    divAfter.classList.add("ocultar");
}


//------------------FUNCIONES DE EJECUCION
function mostrarResultadoEnc(){
    if (capturarTexto()!= "") {
        ocultarElementos();
        mostrarElementos();
        resultado.textContent = encriptarTexto(capturarTexto());
        textoOriginal.value="";
    } else {
        alert("Ingresa un texto para encriptar");
    }  
    
}

function mostrarResultadoDes(){
    if (capturarTexto() != "") {
        ocultarElementos();
        mostrarElementos();  
        resultado.textContent = desencriptarTexto(capturarTexto());
        textoOriginal.value="";
    } else {
        alert("Ingrese un texto para desencriptar");
    }
}



//------------------------------------------EVENTOS------------------------------------------------------
btnEncriptar.addEventListener("click", mostrarResultadoEnc);
btnDesencriptar.addEventListener("click", mostrarResultadoDes);
btnCopiar.addEventListener("click", copiarTexto)
