   $(document).ready(function(){
    
    });
        
  
      var mensaje=function(){
         let name = $("#nameForm").val();
         let email = $("#emailForm").val();
         
         swal({
            title: "Nos hemos contactado",
            text: 'Correo enviado exitosamente ' + name + ' a ' + email,
            icon: "success",
          });
         $("#nameForm").val('');
         $("#emailForm").val('');
      }
      $("#linkModal").click(function(){
         $("#modalGaleria").modal({backdrop: true});
             });
      
