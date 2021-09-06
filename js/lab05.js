"use strict";
(function() {
    window.onload = function() {
        
        //Botón para extraer
        document.getElementById("btnExtraer").onclick = function() {
            let nomApe = document.getElementById("inpNomApe").value.split(" ");
            let fechaNac = document.getElementById("inpFNac").value;

            document.getElementById("inpApPat").value = nomApe[0];
            document.getElementById("inpApMat").value = nomApe[1];
            document.getElementById("inpNom").value = obtenerNombres(nomApe);

            document.getElementById("inpLongApe").value = nomApe[0].length + nomApe[1].length;
            document.getElementById("inpEdad").value = obtenerEdad(fechaNac);
            document.getElementById("inpMes").value = obtenerNombreMes(fechaNac);

            //functions
            function obtenerNombres(arrayName){
                let nombres = [];
                 for(let i=2; i<=arrayName.length-1; i++){
                     nombres.push(arrayName[2]);
                    } return nombres.join(" ");
            }
            
            function obtenerEdad(dateString){ 
                let hoy = new Date(); 
                let fNac = new Date(dateString); 
                let edad = hoy.getFullYear() - fNac.getFullYear(); 
                let m = hoy.getMonth() - fNac.getMonth(); 
                if (m < 0 || (m === 0 && hoy.getDate() < fNac.getDate())) { 
                    edad--; 
                } return edad; 
            }

            function obtenerNombreMes(dateString){
                let fecha = new Date(dateString);
                let mes = fecha.toLocaleString('es',{month: 'long'});
                return mes.charAt(0).toUpperCase() + mes.slice(1);;
            }
        }

        //Botón para cambiar color de celdas
        document.getElementById("btnColorear").onclick = function() {
            let celdaAzul = document.getElementsByClassName("azul");
            let celdaRoja = document.getElementsByClassName("rojo");

            for(let azul=0; azul<=celdaAzul.length-1; azul++){
                celdaAzul[azul].style.background = (celdaAzul[azul].style.background==="rgb(191, 71, 27)")? "#1F72A6":"#BF471B";
            }

            for(let rojo=0; rojo<=celdaRoja.length-1; rojo++){
                celdaRoja[rojo].style.background = (celdaAzul[rojo].style.background==="rgb(31, 114, 166)")? "#BF471B":"#1F72A6";
            }
        }
    }
})();