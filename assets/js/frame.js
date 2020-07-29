let counter = 0;

checkDefaultFont();

$( ".draggable" ).draggable( {
    helper: "clone",
    appendTo: "body",
    revert: false,
    //snap: ".ui-droppable",
    //stack: ".draggable",
    scroll: false,
} );

function setDroppable(id) {
    $(id).droppable({
        accept: ".draggable",
        activeClass: "snaptarget-hover",
        drop: function (event, ui) {

            var ct = $(this);
            var item = $(ui.draggable);
            var origPos;
            var ctPos = ct.offset();
        
            if (item.is('.fr')) {
                origPos = item.offset();
                ct.append(item);
            } else {

                origPos = ui.offset;
                item = item.clone();
                ct.append(item);
                item.removeClass("ui-draggable");
                item.addClass('fr');

                item.draggable({
                    containment: $(id),
                    //snap: false,
                    //stack: ".draggable",
                    //scroll: false
                });
            }
            item.css({
                top: origPos.top - ctPos.top - 1,
                left: origPos.left - ctPos.left -1
            } );

            $('.fr > .sticker-parent').rotatable({}).resizable({
                maxWidth: 73,
                maxHeight: 73,
                minWidth: 40,
                minHeight: 40,
                animateDuration: "fast",
                autoHide: true,
            });
            $('<span class="click-me">X</span>').appendTo('.fr > .sticker-parent').click(removeElement);
            
    }
    } ); 
}

function checkDefaultFont() {
    localStorage.setItem( 'font', 'rounded' );
}

function textValidation(id, counterClass, limit) {
    document.querySelector( id ).oninput = function ( e ) {
        let counter = e.target.value.length,
            counterElement = document.querySelector( counterClass );
        counter <= limit && (counterElement.innerHTML = counter)
        
    }
}

// Detect text length and set size
// Refactor code If else to switch case

function setFontSize(el, length) {
    if(length <= 8) {
        el.style.fontSize = '4rem';
        el.style.lineHeight = '70px';
    }else if(length == 9 ) {
        el.style.fontSize = '3.65rem';
        el.style.lineHeight = '66px';
    }else if(length == 10) {
        el.style.fontSize = '3.35rem';
        el.style.lineHeight = '69px';
    }else if(length == 11) {
        el.style.fontSize = '3.5rem';
        el.style.lineHeight = '69px';
    }else if(length == 12 ) {
        el.style.fontSize = '3.2rem';
        el.style.lineHeight = '69px';
    }else if(length == 13 ) {
        el.style.fontSize = '2.85rem';
        el.style.lineHeight = '69px';
    }else if(length == 14 ) {
        el.style.fontSize = '2.6rem';
        el.style.lineHeight = '69px';
    }else if(length == 15 ) {
        el.style.fontSize = '2.8rem';
        el.style.lineHeight = '69px';
    }else if(length == 16 ) {
        el.style.fontSize = '2.8rem';
        el.style.lineHeight = '69px';
    }else if(length == 17 ) {
        el.style.fontSize = '2.65rem';
        el.style.lineHeight = '69px';
    }else if(length == 18 ) {
        el.style.fontSize = '2.55rem';
        el.style.lineHeight = '69px';
    }else if(length == 19 ) {
        el.style.fontSize = '2.4rem';
        el.style.lineHeight = '69px';
    }else if(length == 20 ) {
        el.style.fontSize = '2.3rem';
        el.style.lineHeight = '69px';
    }
}

function setFontFamily(value, el, length) {
    console.log('LENGTH', length)
    switch(value) {
        case 'classic':
            el.style.fontFamily = 'WhitneySans';
            el.style.lineHeight = '';
            el.style.fontSize = '4.3ex';
            break;
        case 'rounded':
            el.style.fontFamily = 'Chewy';
            setFontSize(el, length);
            break;
        case 'script':
            el.style.fontFamily = 'Damion'
            el.style.fontSize = '4ex';
            el.style.lineHeight = '50px';
            break;
        case 'chunky':
            el.style.fontFamily = 'Arial'
            el.style.fontSize = '3.8ex';
            break;
        default:
            break;
    }
}

function createElementOnFrame( valueId, frameId ) {

        counter++;

        let value = document.querySelector( valueId ).value;

        console.log('value', value.length)

        if ( value.length !== 0 ) {

            //if($(frameId).children('.textDropable').length) {
                //$(frameId + ' > .textDropable > span.clear-text').html(value)
            //}else {

                if($(frameId).children('.textDropable').length) {
                    $(frameId).html('')
                }
               
                let font = localStorage.getItem( 'font' ),
                    div = document.createElement( 'div' ),
                    id = (frameId + counter).replace('#', ''),
                    pre = document.createElement('span');

                if(frameId == '#right' || frameId == '#left') {
                    div.className = 'textDropable rotate'
                }else {
                    div.className = 'textDropable'
                }

                div.id = id;
                pre.className = 'clear-text'
                pre.innerHTML = value;
                div.appendChild(pre);

                setTimeout( () => {
                    let w = div.offsetWidth + 2;
                    div.style.width = w + 'px';
                }, 0 );

                setFontFamily( font, div, value.length );
                document.querySelector( frameId ).append( div );

                switch(frameId) {
                    case '#top':
                        $( '#'+id ).draggable({ 
                            containment: frameId,
                            axis: 'x'
                        })  
                        break;
                    case '#bottom':
                        $( '#'+id ).draggable({ 
                            containment: frameId,
                        axis: 'x'
                        })  
                        break;    
                    case '#right':
                        $( '#'+id ).draggable({ 
                            containment: frameId,
                            axis: 'y'
                        })  
                        break;  
                    case '#left':
                        $( '#'+id ).draggable({ 
                            containment: frameId,
                            axis: 'y'
                        })  
                        break;  
                    default:
                        break;
                }

                $('<span class="click-me">X</span>').appendTo('.textDropable').click(removeElement);
           // }
            
        }

}

function checkExistedValue(id, length) {

    let existedValue = $('#' + id + ' > .textDropable > span.clear-text').text().length;
    console.log(existedValue)
    let finalValue = length-existedValue;

    $('#' + id + '-input').attr('maxlength', finalValue);
    $('.' + id + '-maxlength').html(finalValue)

}

function removeElement() {

    if($(this).parent().hasClass('textDropable')) {
        let parent = $(this).parent()
        let parentsParent = parent.parent()[0].id;
        $('#'+parentsParent+'-input').val('');
    }

    $(this).parent().remove();

    setTimeout(()=>{
        checkExistedValue('top', 15);
       checkExistedValue('bottom', 15);
       checkExistedValue('right', 20);
       checkExistedValue('left', 20);
    }, 0)
}

function clearInputs() {
    document.querySelector( '#top-input' ).value = '',
    document.querySelector( '#right-input' ).value = '',
    document.querySelector( '#bottom-input' ).value = '',
    document.querySelector( '#left-input' ).value = '';
    let counters = document.querySelectorAll( '.limitor > span.co' );
    for ( let i = 0; i < counters.length; i++) {
        counters[i].innerHTML = 0;
    }
}

function clearInnerHtml(elementId) {
    document.querySelector(elementId).innerHTML = ''
}

setDroppable( '#top' );
setDroppable( '#right' );
setDroppable( '#bottom' );
setDroppable( '#left' );

$(".plus").click( function () {
    if( $('.toggle-inputs').css('display') == 'block') {
        $('.plus > span').html("+");
    } else {
        $('.plus > span').html("-");
    }
    $( ".toggle-inputs" ).slideToggle( "slow" );
});

textValidation('#top-input', '.top-counter', 15);
textValidation('#bottom-input', '.bottom-counter', 15);
textValidation('#left-input', '.left-counter', 20);
textValidation( '#right-input', '.right-counter', 20 );

document.querySelector( '.apply-button' ).onclick = function () {

    createElementOnFrame('#top-input', '#top');

    createElementOnFrame('#bottom-input', '#bottom');

    createElementOnFrame('#right-input', '#right');

    createElementOnFrame( '#left-input', '#left' );

    // clearInputs();
}

function resetInputCounterValues(id, value) {
    $('#' + id + '-input').attr('maxlength', value);
    $('.' + id + '-maxlength').html(value)
}

$("input[type='radio']" ).click( function () {

    $("input[type='radio']").parent().removeClass('checked-font');
    $( this ).parent().addClass( 'checked-font' );
    
    var radioValue = $( "input[name='font']:checked" ).val();
    if(radioValue){
        localStorage.setItem('font', radioValue)
    }
})

function removeIcons(id) {
    $(id).html('')
}

$('.reset').click(function() {
    clearInnerHtml('#top');
    clearInnerHtml('#right');
    clearInnerHtml('#bottom');
    clearInnerHtml('#left');

    document.querySelector('.font-item > label').click()
    document.querySelector( '.carousel-indicators > li' ).click()

    resetInputCounterValues('top', 15);
    resetInputCounterValues('right', 20);
    resetInputCounterValues('bottom', 15);
    resetInputCounterValues('left', 15);


    removeIcons('#top')
    removeIcons('#right')
    removeIcons('#bottom')
    removeIcons('#left')

    clearInputs();
})