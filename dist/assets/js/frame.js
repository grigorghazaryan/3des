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

            if(window.matchMedia("(max-width: 767px)").matches){
                $('.fr > .sticker-parent').rotatable().resizable({
                    disabled: true
                });
            } else{
                $('.fr > .sticker-parent').rotatable().resizable({
                    containment: $(id),
                    maxWidth: 80,
                    maxHeight: 80,
                    minWidth: 40,
                    minHeight: 40,
                    animateDuration: "fast",
                    autoHide: true,
                });
            }

            $('<span class="click-me">X</span>').appendTo('.fr > .sticker-parent').click(removeElement);
           
        }
    }); 
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

function setFontFamily(value, el, length) {
    switch(value) {
        case 'classic':
            el.classList.add( 'whitneysans' );
           // el.style.fontFamily = 'WhitneySans';
            //el.style.fontSize = '4.3rem';
            break;
        case 'rounded':
            el.classList.add( 'chewy' );
           // el.style.fontFamily = 'Chewy';
           // el.style.fontSize = '4rem';
            break;
        case 'script':
            el.classList.add( 'damion' );
            //el.style.fontFamily = 'Damion'
            //el.style.fontSize = '6.5rem';
            break;
        case 'chunky':
            el.classList.add( 'arial' );
           // el.style.fontFamily = 'Arial'
           // el.style.fontSize = '4rem';
            break;
        default:
            break;
    }
}

function createElementOnFrame( valueId, frameId ) {
        counter++;
        let value = document.querySelector( valueId ).value;
        if ( value.length !== 0 ) {

            if($(frameId + " .clear-text ").text() !== value) {

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

                    //let w = div.offsetWidth + 5;
                   // div.style.width = w + 'px';
                    
                    textFit(document.querySelector('#'+id));
                    $('<span class="click-me">X</span>').appendTo('.textDropable').click(removeElement);
                    
                }, 0);

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
            } 
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
    resetInputCounterValues('left', 20);


    removeIcons('#top')
    removeIcons('#right')
    removeIcons('#bottom')
    removeIcons('#left')

    clearInputs();
})