function init (){
    console.log ("DOM Cargado JQuery");
    $("#form2").validate({
        rules:{
            name:{
                required:true,
                minlength:4
            },
            email:{
                required:true,
            },
            pass:{
                required:true,
                equalTo:"#pass2" 
            },
            condiciones:{
                required:true
            }
        },
        messages:{
            name:"Por favor, introduzca un nombre",
            email:{
                required:"Necesitamos su email para ponernos en contacto con usted",
                email:"su email debe tener formato similar a usuario@gmail.com",
            },
            pass:{
                required:"Debe introducir su contraseña"
            },
            pass2:{
                required:"Debe introducir su contraseña"
            }
        }
    });
    
    
}
$ ("document").ready(init);