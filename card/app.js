function sayHello(){
    let nombre = document.getElementById('nombrecompleto')
    console.log(nombre)
    alert('Hola' + nombre.value)
}

function getDataForm(){
    let nombre = document.getElementById('nombrecompleto')
    console.log(nombre.value)

    if(nombre.value ==''){
        alert('El campo es obligatorio')
        nombre.setAttribute('style', 'border-color: red')
        nombre.setAttribute('placeholder', 'Escriba el nombre aqui')
        return
    }

    let email = document.getElementById('email')
    console.log(email.value)
    let fecha = document.getElementById('fecha')
    console.log(fecha.value)
    let sexo = document.getElementById('sexo')
    console.log(sexo.value)

    const datosFormulario = {
        nombre: nombre.value,
        fecha: fecha.value,
        email: email.value,
        sexo: sexo.value
    }
    console.log(datosFormulario)

}

function validateNameState(){
    const nombre = document.getElementById('nombrecompleto')
   
        nombre.setAttribute('placeholder', 'Escriba el nombre aqui')

    if (nombre.value == ''){
        nombre.setAttribute('style', 'border-color: red')
        alert('los campos es obligatorio')
    } else {
        nombre.setAttribute('style', 'border-color: black')
    }
}

//function validateEmailState(){
    //const nombre = document.getElementById('email')
    //if (email.value == ''){
        //email.setAttribute('style', 'border-color: red')
    //} else {
        //email.setAttribute('style', 'border-color: black')
    //}
//}

function verifyRequired(element){
    if (element.value == ''){
        element.setAttribute('style', 'border-color: red')
    } else {
        element.setAttribute('style', 'border-color: black')
    }
}

function verifyIntereses(){
    const intereses = document.querySelectorAll("#intereses")
    for (let i; i<intereses.length; i++){
        if(intereses[i].checked == true){
            return true
        }
    }
    return false
}
function intereses(){
    if ( !verifyIntereses){
        alert ("Debe selecionar por lo menos un interes")
    }
}