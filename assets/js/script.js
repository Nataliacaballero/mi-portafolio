   $(document).ready(function(){
    
    });
        
  
      var mensaje=function(){
         let name = $("#nameForm").val();
         let email = $("#emailForm").val();
         
         if(name.trim()!='' && email.trim()!=''){
            swal({
               title: "Nos hemos contactado",
               text: 'Correo enviado exitosamente ' + name + ' a ' + email,
               icon: "success",
             });
         }else{
            swal({
               title: "Por favor ingresa tus datos",
               text: 'Por favor ingresa tus datos ',
               icon: "error",
             });
         }

       
         $("#nameForm").val('');
         $("#emailForm").val('');
      }
      $("#linkModal").click(function(){
         $("#modalGaleria").modal({backdrop: true});
             });
      
             function verMas(btnExpand, moreText, dots) {
               var dots = document.getElementById(dots);
               var moreText = document.getElementById(moreText);
               var btnText = document.getElementById(btnExpand);
             
               if (dots.style.display === "none") {
                 dots.style.display = "inline";
                 btnText.innerHTML = "Leer más";
                 moreText.style.display = "none";
               } else {
                 dots.style.display = "none";
                 btnText.innerHTML = "Leer menos";
                 moreText.style.display = "inline";
               }
            }