let autos=

{
    marca:"Toyota",
    modelo:"Corolla",
    color:"Blanco",
    anio:2019,
    km:0,
    precio:100000,
    cuotas:14,
    patente:"JJK116",
    vendido:false, 

}

let persona = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 7200,
    capacidadDePagoTotal: 100000000
    }
 
let consesionaria = {
    
    puedeComprar:function(auto,persona){
        let precioCuota = (auto.precio / auto.cuotas);
        let condicionUno = auto.precio <= persona.capacidadDePagoTotal;
        let condicionDos = persona.capacidadDePagoEnCuotas > precioCuota
       
        if (condicionUno && condicionDos){
            return true
      
        } else return false
        
     },
}

console.log(consesionaria.puedeComprar(autos,persona))


