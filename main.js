let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contraseña = document.getElementById('contrasena');
let mensaje = document.getElementById('mensaje');

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstvwxyz0123456789!@#$%^&*()"

function generar() {
   
    let numeroDigitado = parseInt(cantidad.value);
    console.log(numeroDigitado);

      // Verificar si no se especificó cantidad
      if (cantidad.value === '') {
        mensaje.textContent = "Escribe el número de caracteres que quieres que tenga tu contraseña";
        mensaje.style.color = "orange"; 
        contrasena.value = ''; 
        return;
    }

    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor que 8");
        contrasena.value = ''; 
        mensaje.textContent = ''; 
        return;
    }
    
    let password = '';

    for(let i = 0; i < numeroDigitado; i++){
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password+=caracterAleatorio;
       
    }
   contrasena.value =  password;

    validarFortaleza(password);
}

function validarFortaleza(password) {
    let tieneMinuscula = /[a-z]/.test(password);
    let tieneMayuscula = /[A-Z]/.test(password);
    let tieneNumero = /\d/.test(password);
    let tieneCaracterEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?¿]/.test(password);

    if (tieneMinuscula && tieneMayuscula && tieneNumero && tieneCaracterEspecial) {
        mensaje.textContent = "Tu contraseña es fuerte";
        mensaje.style.color = "green";
    } else {
        mensaje.textContent = "Tu contraseña es débil, debe incluir una letra minúscula, una letra mayúscula, un número y un carácter especial";
        mensaje.style.color = "red";
    }
}

contrasena.addEventListener('input', function() {
    validarFortaleza(contrasena.value);
});

function limpiar() {
    contrasena.value = '';
    mensaje.textContent = '';
   cantidad.value = '';
}












