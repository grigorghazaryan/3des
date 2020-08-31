window.onscroll = function () {
    let fixedNavbar = document.getElementById('fixedNavbar'),
        scrollTop = document.getElementById('scrollTop');

    if(fixedNavbar) {
        if (pageYOffset == 0) {
            fixedNavbar.classList.remove('shadow')
        } else {
            fixedNavbar.classList.add('shadow')
        }
    }

    if(scrollTop) {
        if (pageYOffset >= 400) {
            scrollTop.style.visibility = "visible";
        } else {
            scrollTop.style.visibility = "hidden";
        }
    }
    
};

document.querySelector( '.support-icon-wrapper' ).onclick = function () {
    document.querySelector('.live-chat-wrapper').style.display = 'block'
}

document.getElementById('navbarToggler').onclick = function () {
    document.querySelector('.mobile-menu').style.display = 'block'
    document.querySelector('.mobile-menu-wrapper').style.display = 'block'
}

document.querySelector('.mobile-menu__items').onclick = function() {
    document.querySelector('.mobile-menu').style.display = 'none'
    document.querySelector('.mobile-menu-wrapper').style.display = 'none'
}

document.querySelector('.mobile-menu-wrapper').onclick = function() {
    document.querySelector('.mobile-menu').style.display = 'none'
    document.querySelector('.mobile-menu-wrapper').style.display = 'none'
}

document.getElementById('openChat').onclick = function() {
    document.querySelector('.live-chat-wrapper').style.display = 'block'
}

document.querySelector('.chat-close').onclick = function(e) {
    console.log('asdasd')
    document.querySelector('.live-chat-wrapper').style.display = 'none'
    e.stopPropagation();
}

// Open popup
$('.sign-in').click(function() {
    let black = document.querySelector('.sign-in-black'),
        popup = document.querySelector('.sign-in__parent');

        black.style.visibility = 'visible';
        black.style.opacity = '1'
        popup.style.visibility = 'visible';
        popup.style.opacity = '1'
});

// Close popup
document.querySelector('.sign-in-black').onclick = function() {
    let popup = document.querySelector('.sign-in__parent');

        this.style.visibility = 'hidden';
        this.style.opacity = '0'
        popup.style.visibility = 'hidden';
        popup.style.opacity = '0'

        document.querySelector('.sin').style.display = "block"
        document.querySelector('.sup').style.display = "none"
        document.querySelector('.reset-password').style.display = "none"
}

document.querySelector('.popup-close').onclick = function() {
    let popup = document.querySelector('.sign-in__parent'),
        black = document.querySelector('.sign-in-black');

        black.style.visibility = 'hidden';
        black.style.opacity = '0'
        popup.style.visibility = 'hidden';
        popup.style.opacity = '0'
}

// Open sign up
document.querySelector('.s-up').onclick = function() {
    document.querySelector('.sin').style.display = "none"
    document.querySelector('.sup').style.display = "block"
}

// Open sign in
document.querySelector('.s-in').onclick = function() {
    document.querySelector('.sup').style.display = "none"
    document.querySelector('.sin').style.display = "block"
}

// Open reset password
document.querySelector('.f-pass').onclick = function() {
    document.querySelector('.sup').style.display = "none"
    document.querySelector('.sin').style.display = "none"
    document.querySelector('.reset-password').style.display = "block"
}

// Go to sign
document.querySelector('.to-sign').onclick = function() {
    document.querySelector('.sup').style.display = "none"
    document.querySelector('.reset-password').style.display = "none"
    document.querySelector('.sin').style.display = "block"
}

// language change
$('.languages > div').click( function () {
    $('.languages > div').removeClass('active')
    if($(this).attr( "data-id" ) == 'fr') {
        $('.flag > img').attr("src", "./assets/images/france.png");
    } else {
        $('.flag > img').attr("src", "./assets/images/canada.png");
    }
    $(this).addClass('active')
})

// Send contact us request
function sendContactUs(e) {
    e.preventDefault();

    $(".send").html("Sending...");
    $('.send').attr('disabled', true);

    axios.post('http://admin.3des.ca/api/v1/contact-store', {
        "first_name": $('#c-first-name').val(),
        "last_name": $('#c-last-name').val(),
        "phone": $('#c-phone').val(),
        "email": $('#c-email').val(),
        "message": $('#c-message').val(),
    })
        .then(function (res) {

            if(res.data.status) {
                $('.message-info').html('Thanks for contacting us.')
                $('.message-info').addClass('green');
            } else {
                $('.message-info').html('Message not sent!');
                $('.message-info').addClass('red');
            }

            $(".send").html("Send");
            $('.send').attr('disabled', false);
        })
}
// Send subscribe request
function sendSubscribe(e) {
    e.preventDefault();

    $(".subscribe-button").html("Sending...");
    $('.subscribe-button').attr('disabled', true);

    axios.post('http://admin.3des.ca/api/v1/subscriber-store', {
        "name": $('#first-name-newsletter').val(),
        "email": $('#email-address-newsletter').val()
    })
        .then(function (res) {

            if(res.data.status) {
                $('.subscribe-info').html('Thank You For Subscribing!')
                $('.subscribe-info').addClass('green');
            } else {
                $('.subscribe-info').html('Error subscribing!');
                $('.subscribe-info').addClass('red');
            }

            $(".subscribe-button").html("Send");
            $('.subscribe-button').attr('disabled', false);
        })
}

$("#form").validate({
    rules: {
        "firstName": {
            required: true,
            minlength: 3
        },
        "lastName": {
            required: true,
            minlength: 3
        },
        "phone": {
            required: true
        },
        "email": {
            required: true,
            email: true
        },
        "message": {
            required: true
        }
    },
    messages: {
        "email": {
            required: "Please, enter an email",
            email: "Email is invalid"
        }
    }
});

$("#subscribe-form").validate({
    rules: {
        "firstName": {
            required: true,
            minlength: 3
        },
        "email": {
            required: true,
            email: true
        }
    },
    messages: {
        "email": {
            required: "Please, enter an email",
            email: "Email is invalid"
        }
    }
});

$("#form").on('submit', function (e) {
    var isValid = $("#form").valid();
    if (isValid) {
        sendContactUs(e)
    }
});

$("#subscribe-form").on('submit', function (e) {
    var isValid = $("#subscribe-form").valid();
    if (isValid) {
        sendSubscribe(e)
    }
});