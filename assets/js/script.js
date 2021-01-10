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
      
