$(document).on("scroll",function(){
	    if($(document).scrollTop()>50){
	        $("#navegacion").removeClass("bg-lightxd").addClass("bg-light");
	    	} else{
	    	if($(window).width()<767){
				$("#navegacion").addClass("bg-light").removeClass("bg-lightxd");
			}
			else{
				$("#navegacion").removeClass("bg-light").addClass("bg-lightxd");
			}
	    }
});

$(document).on("scroll",function(){
    if($(document).scrollTop()>100){
        $(".enlace").removeClass("grande").addClass("pequeño");
    } else{
        $(".enlace").removeClass("pequeño").addClass("grande");
    }
});

$(document).on("scroll",function(){
    if($(document).scrollTop()>100){
        $("#escudin").removeClass("Egrande").addClass("Epequeño");
    } else{
        $("#escudin").removeClass("Epequeño").addClass("Egrande");
    }
});

$(document).on("scroll",function(){
    if($(document).scrollTop()>100){
        $("nav").removeClass("Ngrande").addClass("Npequeño");
    } else{
        $("nav").removeClass("Npequeño").addClass("Ngrande");
    }
});

document.addEventListener("DOMContentLoaded", function(){
    if($(window).width()<767){
		$("#navegacion").removeClass("bg-lightxd").addClass("bg-light");
	}
}); 


//boton

$(window).scroll(function(){

if ( $(this).scrollTop() > 100 ) {

$('.scroll-to-top').fadeIn();

} else {

$('.scroll-to-top').fadeOut();

}

});

$('.scroll-to-top').click( function( e ) {

e.preventDefault();
$('html, body').animate( {scrollTop : 0}, 800 );

});