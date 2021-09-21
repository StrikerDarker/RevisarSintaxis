document.getElementById('id-archivo').addEventListener('change', leerArchivo, false);

let contenido1="";
let archivo="";
function leerArchivo(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
      return;
    }
    var lector = new FileReader();
    lector.readAsText(archivo);
    lector.onload=function  (e) {  
        contenido1 = e.target.result;
        //contenido1 = contenido1.replace(/\n/gm, '');
        contenido1= contenido1.replace(/\t/gm, '');
        //contenido1 = contenido1.replace(/\s+/gm, '');
        mostrarContenido1();

    };
  }

  function mostrarContenido1() {
    let t=0;
    let pala="";
        for (let i=0; i<=contenido1.length; i++){
            if(contenido1.charAt(i)=="/"&&contenido1.charAt(i+1)=="*"){              
                let j=i+2;
                let t=true;
                while(t){
                    if(contenido1.charAt(j)=="*"&&contenido1.charAt(j+1)=="/" || j==contenido1.length){      
                             t=false;
                    }
                    j++;             
                }
                i=++j;
            }
            else if(contenido1.charAt(i)=="/"&&contenido1.charAt(i+1)=="/"){
                let h=i+2;
                let g=true;
                while(g){
                    if(contenido1.charAt(h)=="\n"){
                        g=false;
                    }
                    h++;
                }
                    i=h;     
            }
            if(contenido1.charAt(i)==contenido1.charAt(i+1)){
                console.log(contenido1.charAt(i)+contenido1.charAt(i));
                archivo+=contenido1.charAt(i)+contenido1.charAt(i)+"\n";
                i=i+2;
            }
        
            if(buscar(i)){
                t=1;
                if(t=1){
                    if(pala!=="") {
                        archivo+=pala+"\n"; 
                        console.log(pala); 
                    }
                    if(contenido1.charAt(i)!=" ") {
                        archivo+=contenido1.charAt(i)+"\n";
                        console.log(contenido1.charAt(i));
                    }
                    pala="";
                    t=0;
                }
               
            }
            else{
                if(contenido1.charAt(i)!=="\n"){
                    pala+=contenido1.charAt(i);
                }
            }
        }       
        archivo+=pala; console.log(pala);
        mostrarContenido(archivo);
}
function mostrarContenido(contenido) {
    var elemento = document.getElementById('contenido-archivo');
    elemento.innerHTML = contenido;
  }

function buscar(j){
    let signos = ["#","(",")","{","}",";",",","=","<",">"," ","'",'"',"/","*","-","%",":","+","!","&"];
    for(let i=0; i<=signos.length;i++){
        if(signos[i]==contenido1.charAt(j)){
            return true;
        }
    }
    return false;

}