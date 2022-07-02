//Haz tú validación en javascript acá

var btnEnviar = document.querySelector(".formcontato__btn");

btnEnviar.addEventListener("click", function(event){
	event.preventDefault();
	var nombre = document.getElementById("floatName").value;
	var email = document.getElementById("floatEmail").value;
	var asunto = document.getElementById("floatAsunto").value;
	var mensaje = document.getElementById("mensagem").value;
	
	re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
	
	if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
		alert("Tiene que escribir su nombre");
		document.getElementById("floatName").focus();
	}
	
	if(!re.exec(email)){
		alert("Tiene que escribir su correo");
		document.getElementById("floatEmail").focus();	
	}		
	
	if( asunto == null || asunto.length == 0) {
		alert("Tiene que escribir el asunto");
		document.getElementById("floatAsunto").focus();
	}
	
	var imagen = document.querySelector(".formcontato__img");
	imagen.setAttribute();
});

