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