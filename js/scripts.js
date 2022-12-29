// +++++++++++++++++++++++++++++++++++++++++ JQUERY DEL NAV

$(window).scroll(function () {
    if ($(window).scrollTop() >= 70) {
        // if($(window).width() > 631) {
        //     $('nav').css('height', '60');
        //     $('.nav-link').css('font-size', '1.35rem');
        //     $('.nav-link').css('color', 'white');
        // }
        $('nav').css('height', '70');
    } else {
        $('nav').css('background', 'var(--main-color)');
        $('nav').css('height', '85');
    }
});


// +++++++++++++++++++++++++++++++++++++++++ JQUERY DEL INDEX

function appointmentOne() {
    $('.appointment-one').css('opacity', '0.9');
}

function appointmentTwo() {
    $('.appointment-two').css('right', '-60px');
    $('.appointment-two').css('opacity', '0.9');
}

$(document).ready(function () {
    setTimeout(appointmentOne, 500);
    setTimeout(appointmentTwo, 700);
});

// $( document ).ready(function() {
//     $('.logged-menu').css('visibility', 'visible');
//     $('.logged-menu').css('opacity', '1');
// });


// +++++++++++++++++++++++++++++++++++++++++ JQUERY DE LA PÁGINA DE LOGIN

// $('#login').on('click', function(){
//     $('#register').css('background-color', 'var(--secondary-color)');
//     $('.log-container').css('height', '390');
//     $('#register').css('color', 'white');
//     $('#login').css('background-color', 'var(--main-color)');
//     $('#login').css('color', 'black');
//     document.getElementById('changing-form').innerHTML = '';
//     document.getElementById('changing-form').innerHTML = '<span><label for="email">E-mail:</label><input required type="email" name="email" id="email" placeholder="E-mail"></span><span><label for="pass">Contraseña:</label><input required type="password" name="pass" id="pass" placeholder="Contraseña"></span><input required type="submit" value="Iniciar sesión">';
// });

// $('#register').on('click', function(){
//     $('#login').css('background-color', 'var(--secondary-color)');
//     $('.log-container').css('height', '630');
//     $('#login').css('color', 'white');
//     $('#register').css('background-color', 'var(--main-color)');
//     $('#register').css('color', 'black');
//     document.getElementById('changing-form').innerHTML = '';
//     document.getElementById('changing-form').innerHTML = '<span><label for="nombre">Introduce tu nombre:</label><input required type="text" name="nombre" id="nombre" placeholder="Nombre"></span><span><label for="email">Introduce tu e-mail:</label><input required type="email" name="email" id="email" placeholder="E-mail"></span><span><label for="pass">Introduce una contraseña:</label><input required type="password" name="pass" id="pass" placeholder="Contraseña"></span><span><label for="pass2">Confirma la contraseña:</label><input required type="password" name="pass2" id="pass2" placeholder="Confirma la contraseña"></span><span class="remember-me-span"><input required type="checkbox" name="privacy-policy" id="privacy-policy"><label for="privacy-policy">&nbsp;&nbsp;Acepto la <a href="privacy.html">política de privacidad.</a></label></span><input type="submit" value="Registrarse">';
// });


// +++++++++++++++++++++++++++++++++++++++++ JQUERY DEL FILTRO

$('#activar-filtro').on('click', function () {
    $('#activar-filtro').toggleClass('secondary');
});


// +++++++++++++++++++++++++++++++++++++++++ JQUERY DEL BOTÓN DEL LOGIN

$('#logged-menu').on('click', function () {
    $('.logged-menu').toggleClass('no-visible');
});


// +++++++++++++++++++++++++++++++++++++++++ JQUERY DEL NAV DESPLEGABLE

var banderaMenu = true;
var banderaAccount = true;

$('#small-menu').on('click', function () {
    banderaAccount = true;
    $('#small-account-wrapper').css('height', '0');
    $('.hidden-account').css('display', 'none');
    $('.hidden-account').css('opacity', '0');

    if (banderaMenu == true) {
        $('#small-menu-wrapper').css('height', '500');

        $('.hidden-menu').css('display', 'flex');
        $('.hidden-menu').css('opacity', '1');
        banderaMenu = false;
    } else {
        $('#small-menu-wrapper').css('height', '0');

        $('.hidden-menu').css('display', 'none');
        $('.hidden-menu').css('opacity', '0');
        banderaMenu = true;
    }
});

$('#small-account').on('click', function () {
    banderaMenu = true;
    $('#small-menu-wrapper').css('height', '0');
    $('.hidden-menu').css('display', 'none');
    $('.hidden-menu').css('opacity', '0');

    if (banderaAccount == true) {
        $('#small-account-wrapper').css('height', '500');

        $('.hidden-account').css('display', 'flex');
        $('.hidden-account').css('opacity', '1');
        banderaAccount = false;
    } else {
        $('#small-account-wrapper').css('height', '0');

        $('.hidden-account').css('display', 'none');
        $('.hidden-account').css('opacity', '0');
        banderaAccount = true;
    }
});