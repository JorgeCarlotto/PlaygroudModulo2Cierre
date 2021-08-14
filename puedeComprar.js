let autos=
[{
    marca:"Ford",
    modelo:"Fiesta",
    color:"Azul",
    anio:2019,
    km:200,
    precio:150000,
    cuotas:12,
    patente:"APL123",
    vendido:true, 
},
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

}]

let persona = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 30000,
    capacidadDePagoTotal: 100000000
    }
 
let consesionaria = {
    
    autosQuePuedeComprar:function(persona){
        let autosParaLaVenta = this.autosParaLaVenta();
        let puedeComprar = this.puedeComprar(persona,autosParaLaVenta);
        let filtroAutos = puedeComprar.filter(function(auto){
            if(auto === true){
                return auto
            }
        })
        return filtroAutos
    }
}

console.log(consesionaria.autosQuePuedeComprar())


