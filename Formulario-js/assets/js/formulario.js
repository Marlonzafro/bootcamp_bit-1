function validarFormulario() {
    let inputNombre = document.getElementById("nombreUsuario").value
    if (inputNombre == ``){
        alert("llene el campo")
        console.log(inputNombre)
    }
    let inputTelefono = document.getElementById("telefonoUsuario").value
    if (inputTelefono== ``){
        alert("Agrege su nùmero telefónico")
    }

    let correo = document.getElementById("correoUsuario").value
    if (correo == ``){
        alert("agregue su corre electrònico")
    }

    let ciudad = document.getElementById("ciudadUsuario").value
    if (ciudad == ``){
        alert("Indique su cuidad de resudencia")

    }

let opciones = document.getElementById("selecUsiario")
if (opciones.value == ``){
    alert("seleccione el producto de su interés")
}

    



    
}






