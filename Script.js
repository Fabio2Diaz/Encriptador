const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")

/*La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`*/

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    mensaje.style.backgroundImage = "none"
    inputTexto.value = ""
}

function encriptar(StringEncriptada){
let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
StringEncriptada = StringEncriptada.toLowerCase();
    for (let i = 0; i < matrizcodigo.length; i++){
        if(StringEncriptada.includes(matrizcodigo[i][0])){
            StringEncriptada = StringEncriptada.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1])
        }
    }
    return StringEncriptada
}
function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    inputTexto.value = ""
}

function desencriptar(StringDesencriptada){
let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
StringDesencriptada = StringDesencriptada.toLowerCase();
    for (let i = 0; i < matrizcodigo.length; i++){
        if(StringDesencriptada.includes(matrizcodigo[i][1])){
                StringDesencriptada = StringDesencriptada.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0])
        }
    }
        return StringDesencriptada
}
function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""
    alert("texto copiado")
}