let marcaAuto = document.querySelector("#autoSelection")    
let operacion = document.querySelector("#operacionSelection")    
let formulario = document.querySelector("#formulario")
let btnSubmit = document.querySelector("#submit")
let mensaje = document.querySelector("#mensaje")

                    
                    
                    
                  

btnSubmit.addEventListener("click", ()=> {


   
    if (infoAutos.find( p => p.marca.toLocaleLowerCase() === marcaAuto.value.toLocaleLowerCase()) && operacion.value.toLocaleLowerCase() == "seguro"){
        let resultado = infoAutos.find( p => p.marca.toLocaleLowerCase() === marcaAuto.value.toLocaleLowerCase())
        let seguro = parseInt(resultado.precio - (resultado.año * 3))
        alert ("El seguro del " + resultado.marca +" "+ resultado.modelo + " sale $" + seguro + " por mes.")


     } else if
        (infoAutos.find( p => p.marca.toLocaleLowerCase() === marcaAuto.value.toLocaleLowerCase()) && operacion.value.toLocaleLowerCase() == "precio final"){
        let resultado = infoAutos.find( p => p.marca.toLocaleLowerCase() === marcaAuto.value.toLocaleLowerCase())
        let precioFinal = parseInt(resultado.precio * resultado.iva)
        alert ("El precio final del " + resultado.marca +" "+ resultado.modelo + " es de $" + precioFinal + " (IVA incluido)")
        } 
        else if
        ( marcaAuto.value.toLocaleLowerCase() === "" || operacion.value.toLocaleLowerCase() == ""){
        alert ("⚠️ Recuerda completar todos los campos")
        } 
        else {
           mensajeFinal()
                }
              


})


function mensajeFinal(){
  mensaje.innerHTML = "<h2>Sorry, no tenemos ese auto 😔</h2>"
}