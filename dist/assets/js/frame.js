let counter = 0;

checkDefaultFont();

$( ".draggable" ).draggable( {
    helper: "clone",
    appendTo: "body",
    revert: "invalid",
    snap: ".fr",
    stack: ".draggable",
    scroll: false
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
                containment: id,
                snap: false,
                stack: ".draggable",
                scroll: false
            });
            }
            item.css({
                top: origPos.top - ctPos.top - 1,
                left: origPos.left - ctPos.left -1
            } );
            $('.fr > .sticker-parent').rotatable();
            $('.fr > .sticker-parent').resizable({
                // autoHide: true,
                // containment: id,
                maxWidth: 55,
                maxHeight: 55,

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

function setFontFamily(value, el) {
    switch(value) {
        case 'classic':
            el.style.fontFamily = 'WhitneySans';
            el.style.lineHeight = '80px';
            el.style.fontSize = '4.5ex';
            break;
        case 'rounded':
            el.style.fontFamily = 'Chewy';
            el.style.fontSize = '5ex';
            break;
        case 'script':
            el.style.fontFamily = 'Damion'
            el.style.fontSize = '4ex';
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

        if ( value.length !== 0 ) {
            
            let font = localStorage.getItem( 'font' ),
                div = document.createElement( 'div' ),
                id = (frameId + counter).replace('#', ''),
                span = document.createElement('span');

            if(frameId == '#right' || frameId == '#left') {
                div.className = 'textDropable rotate'
            } else {
                div.className = 'textDropable'
            }

            div.id = id;
            span.className = 'clear-text'
            span.innerHTML = value;
            div.appendChild(span);

            setTimeout( () => {
                let w = div.offsetWidth + 2;
                div.style.width = w + 'px';
            }, 0 );

            setFontFamily( font, div );
            document.querySelector( frameId ).append( div );

            $( '#'+id ).draggable( { containment: frameId} )   
            $('<span class="click-me">X</span>').appendTo('.textDropable').click(removeElement);
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
    checkExistedValue('top', 15);

    createElementOnFrame('#bottom-input', '#bottom');
    checkExistedValue('bottom', 15);

    createElementOnFrame('#right-input', '#right');
    checkExistedValue('right', 20);

    createElementOnFrame( '#left-input', '#left' );
    checkExistedValue('left', 20);

    clearInputs();
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

document.querySelector( '.reset' ).onclick = function () {
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

    clearInputs();
}