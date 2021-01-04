
function iniciar(){


    apellidos2=document.getElementById("apellidos");
    nombres1=document.getElementById("nombres");
    dni1=document.getElementById('dni');
    telefono1=document.getElementById("telefono");
    

   
   apellidos2.addEventListener("input", validacion, false);
   nombres1.addEventListener("input",validacion,false);
   dni1.addEventListener("input",validacion,false);
   telefono1.addEventListener("input", validacion, false);

   validacion();
   
}

//validar solo letras
function soloLetras(e){
   key = e.keyCode || e.which;
   tecla = String.fromCharCode(key).toLowerCase();
   letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
   especiales = "8-37-39-46";

   tecla_especial = false
   for(var i in especiales){
        if(key == especiales[i]){
            tecla_especial = true;
            break;
        }
    }

    if(letras.indexOf(tecla)==-1 && !tecla_especial){
        return false;
    }
}



function validacion(){
   
 
   //validamos los apellidos
   if(apellidos2.value=='' ){
       apellidos2.setCustomValidity('LLenar los Apellidos');
       apellidos2.style.background='#FFDDDD';
   }else{
       apellidos2.setCustomValidity('');
       apellidos2.style.background='#FFFFFF';
   }

   //validamos los apellidos
   if(nombres1.value==''){
       nombres1.setCustomValidity('LLenar los Nombres');
       nombres1.style.background='#FFDDDD';
   }else{
       nombres1.setCustomValidity('');
       nombres1.style.background='#FFFFFF';
   }

    //validamos el dni
    if(dni1.value==''){
        dni1.setCustomValidity('LLenar los Nombres');
        dni1.style.background='#FFDDDD';
    }else{
        dni1.setCustomValidity('');
        dni1.style.background='#FFFFFF';
    }

   //validamos el teléfono
   if(telefono1.value==''){
       telefono1.setCustomValidity('Ingresar un teléfono');
       telefono1.style.background='#FFDDDD';
   }else{
       telefono1.setCustomValidity('');
       telefono1.style.background='#FFFFFF';
   }

   
}
window.addEventListener("load", iniciar, false);