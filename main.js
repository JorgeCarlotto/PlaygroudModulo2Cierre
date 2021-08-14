const autos = require('./autos');


let persona = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 7200,
    capacidadDePagoTotal: 100000000
    }


let consesionaria ={
    autos: autos,

    buscarAuto : 
    function(patente){
        let auto ="";
    for(let i=0;i<autos.length;i++){
        if (autos[i].patente === patente){
           return auto = autos[i];          
        }else  auto = null
    }
        return auto
    },

    venderAuto:
        function(patente){
           let auto = this.buscarAuto(patente);
           auto.vendido = true
           return auto 

        },
    autosParaLaVenta:function(){
        let totalDeAutos = autos;
        let autosDisponibles = totalDeAutos.filter(function(autos){
            return autos.vendido == false
        })
        return autosDisponibles
    },

    autosNuevos:function(){
        let autosParaLaVenta = this.autosParaLaVenta();
        let auto0km = autosParaLaVenta.filter(function(auto){
            return auto.km <= 100
        })
        return auto0km 
        },
   
    listaDeVentas:function(){
        
        let autosVendidos = autos.filter(function(auto){
            return auto.vendido == true
        })
        let ganancias = autosVendidos.map(function(valor){
            return valor.precio
        })
        return ganancias
    },

    totalDeVentas:function(){
        let autosvendidos = this.listaDeVentas();
        let total = autosvendidos.reduce(function(cont,elemt,){
            return cont + elemt 
        },0)
        return total
        },

        puedeComprar:function(auto,persona){
            let precioCuota = (auto.precio / auto.cuotas);
            let condicionUno = auto.precio <= persona.capacidadDePagoTotal;
            let condicionDos = persona.capacidadDePagoEnCuotas > precioCuota;
            
            if (condicionUno && condicionDos){
                return true
            } else return false
         },

         autosQuePuedeComprar:function(persona){
            let autosParaLaVenta = this.autosParaLaVenta();
            let puedeComprar = this.puedeComprar(autosParaLaVenta[0],persona);
            
            /*let filtroAutos = autosParaLaVenta.filter(function(auto){
                    
                })
            
            return filtroAutos */
            //console.log(autosParaLaVenta)

        }

}

console.log(consesionaria.autosQuePuedeComprar(persona))

