 $(document).ready(function(){

$('#sign-out').on('click', function(){
    swal("Are you sure you want to exit?", {
        buttons: ["No", true],
      });

});

$('[data-toggle="tooltip"]').tooltip();



 });