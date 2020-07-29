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