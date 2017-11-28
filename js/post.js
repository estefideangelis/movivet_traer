header("Access-Control-Allow-Origin: http://movivet.tk");

$(document).bind('deviceready', function(){
    $(function(){
		    $('form').submit(function(){
			alert("entrodatadatos");
            var dataID = $(this).parent().attr('data-datos-id');
            var postData = $(this).serialize();
            $.ajax({
				type: 'POST',
                data: postData+'&lid='+dataID,
                // cargamos la url del servidor externo
                url: 'http://movivet.tk/app/guardar.php',
                success: function(data){
                    console.log(data);
                    $('#email').val('');
                    $('#comment').val('');
					alert('Tu comentario fue agregado');
                },
                error: function(data){
                    console.log(data);
                    alert('Ocurrio un error al enviar tu comentario');
                }
            });
            return false;
        });
    });
});// JavaScript Document