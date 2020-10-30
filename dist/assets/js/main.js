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

// Close popup
document.querySelector('.sign-in-black').onclick = function() {
    closePopup();
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

// Close popup
function closePopup() {
    let popup = document.querySelector('.sign-in__parent');
    let self = document.querySelector('.sign-in-black');

    self.style.visibility = 'hidden';
    self.style.opacity = '0'
    popup.style.visibility = 'hidden';
    popup.style.opacity = '0'

    document.querySelector('.sin').style.display = "block"
    document.querySelector('.sup').style.display = "none"
    document.querySelector('.reset-password').style.display = "none"
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

window.onload = function() {
    getUser()
}

if($('.logout')) {
    $('.logout').click( function () {
        let token = localStorage.getItem('access_token')
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        axios.get('https://admin.3des.ca/api/v1/user/logout', config)
        .then(function (res) {
            if(res.data.status) {
                headerChecker(false)
                window.location.href = 'index.html'
            }
        })
        .catch(e => {
            headerChecker(true)
        })
    })
}

// Get user
function getUser() {
    let token = localStorage.getItem('access_token')
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    axios.get('https://admin.3des.ca/api/v1/user/get-user', config)
        .then(function (res) {
            if(res.data.status) {
                headerChecker(true)
            }
        })
        .catch(e => {
            headerChecker(false)
        })
}

// Send contact us request
function sendContactUs(e) {
    e.preventDefault();

    $(".send").html("Sending...");
    $('.send').attr('disabled', true);

    axios.post('https://admin.3des.ca/api/v1/contact-store', {
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

    axios.post('https://admin.3des.ca/api/v1/subscriber-store', {
        "name": $('#first-name-newsletter').val(),
        "email": $('#email-address-newsletter').val()
    })
        .then(function (res) {
            if(res.data.status) {
                $('.subscribe-info').html('Thank You For Subscribing!')
                $('.subscribe-info').addClass('green');
            }
        })

        .catch(e => {

            $('.subscribe-info').html('The email has already been taken!');
            $('.subscribe-info').addClass('red');
        
        }) 

        $(".subscribe-button").html("Send");
        $('.subscribe-button').attr('disabled', false);
}

function signIn(e) {
    e.preventDefault();

    $('.sign-in-button').attr('disabled', true);

    axios.post('https://admin.3des.ca/api/v1/user/sign-in', {
            "email": $('#sign-in-email').val(),
            "password": $('#sign-in-password').val()
        })

        .then(function (res) {
            let data = res.data
            if(data.status) {
                localStorage.setItem('access_token', data.data.tokens.access_token)
                localStorage.setItem('user-info', JSON.stringify(data.data.user))
                closePopup()
                headerChecker(true);
                $('.sign-in-button').attr('disabled', false)
            }
        })

        .catch(error => {
            if (error.response) {
                $('.sign-info').html(error.response.data.message);
                $('.sign-info').addClass('red');
                $('.sign-in-button').attr('disabled', false)
            }
        }) 

        

}

function resetPassword(e) {
    e.preventDefault()

    axios.post('https://admin.3des.ca/api/v1/reset/send-mail', {
        "email": $('#password-reset').val()
    }).then((res) => {
        let data = res.data

        if(data.status) {
            $('.password-reset-info').html(data.message)
            $('.password-reset-info').addClass('green')
        }
    })
}

function signUp(e) {
    e.preventDefault();

    $('.sign-up-button').attr('disabled', true);

    axios.post('https://admin.3des.ca/api/v1/user/sign-up', {
            "full_name": $('#sign-up-full-name').val(),
            "email": $('#sign-up-email').val(),
            "phone":  $('#sign-up-phone').val(),
            "password": $('#sign-up-password').val(),
            "confirm_password": $('#sign-up-confirm-password').val(),
        })

        .then(function (res) {
            let data = res.data

            if(data.status) {
                $('.sign-up-info').html('User created successfully!');
                $('.sign-up-info').addClass('green');
                setTimeout(()=> {
                    localStorage.setItem('access_token', data.data.tokens.access_token)
                    localStorage.setItem('user-info', JSON.stringify(data.data.user))
                    closePopup()
                    headerChecker(true);
                }, 1000)
                $('.sign-up-button').attr('disabled', false)
            }
        })
        .catch(function (error) {
            if (error.response) {
                $('.sign-up-info').html(error.response.data.message);
                $('.sign-up-info').addClass('red');
                $('.sign-up-button').attr('disabled', false)
            }
          });

        
}

// Header draw
function headerChecker(bool) {
    let header = document.querySelector('.header-sw')
    $(header).html('');
    if(!bool) {
        let html = '<div class="sign-in">' +
                        '<span>Sign in</span>' +
                        '<span class="dot" style="background-color: rgb(54, 167, 170)"></span>'
                    '</div>';

                    $(header).append(html);
        // Open popup
        $('.sign-in').click(function() {
            let black = document.querySelector('.sign-in-black'),
                popup = document.querySelector('.sign-in__parent');

                black.style.visibility = 'visible';
                black.style.opacity = '1'
                popup.style.visibility = 'visible';
                popup.style.opacity = '1'
        });
    } else {
        let html =' <a href="my-account.html" class="my-account">' +
            '<span>My Account</span>' +
            '<span class="dot" style="background-color: rgb(54, 167, 170)"></span>' +
        '</a>';

        $(header).append(html);
    }
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

//  password reset form validation
$('#password-reset-form').validate({
    rules: {
        "email": {
            required: true,
            email: true
        },
        messages: {
            "email": {
                required: "Please, enter an email",
                email: "Email is invalid"
            }
        }
    }    
})

// Sign in form validation
$("#sign-in-form").validate({
    rules: {
        "email": {
            required: true,
            email: true
        },
        "password": {
            required: true,
            minlength: 6
        }
    },
    messages: {
        "email": {
            required: "Please, enter an email",
            email: "Email is invalid"
        }
    }
});

// Sign in form validation
$("#sign-up-form").validate({
    rules: {
        "fullName": {
            required: true,
            minlength: 3
        },
        "phone": {
            required: true,
            minlength: 10
        },
        "email": {
            required: true,
            email: true
        },
        "password": {
            required: true,
            minlength: 6
        },
        "confirmPassword" : {
            required: true,
            minlength: 6,
            equalTo: "#sign-up-password"
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

if(document.querySelector('#video')) {
    axios.get('https://admin.3des.ca/api/v1/video-get')
        .then(function (res) {
            let data = res.data.data.video.link;
            let video = document.querySelector('#video');
            if(data) {
                video.src = 'https://admin.3des.ca/'+data
            } else {
                video.src="https://www.w3schools.com/html/mov_bbb.mp4"
            }
        });
}

$('#sign-in-form').on('submit', function(e) {
    var isValid = $("#sign-in-form").valid();
    if (isValid) { 
        signIn(e)
    }
})

$('#sign-up-form').on('submit', function(e) {
    var isValid = $("#sign-up-form").valid();
    if (isValid) { 
        signUp(e)
    }
})

$('#password-reset-form').on('submit', (e) => {
    let isValid = $('#password-reset-form').valid()
    if (isValid) resetPassword(e)
})