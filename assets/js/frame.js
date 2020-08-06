let counter = 0;
let step = 1;
let svgArr = [];

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

            svgArr.push(ui.draggable.context.childNodes[1])

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
                //ct.append(ui.draggable.css('position','static'))
                item.removeClass("ui-draggable");
                item.addClass('fr');

               // ct.append(ui.draggable.css('position','static'))

                item.draggable({
                    containment: $(id),
                    //snap: false,
                    //stack: ".draggable",
                    //scroll: false
                });
            }

            item.css({
                top: origPos.top - ctPos.top - 3,
                left: origPos.left - ctPos.left -3
            });

            if(window.matchMedia("(max-width: 767px)").matches){
                $('.fr > .sticker-parent').rotatable().resizable({
                    disabled: true
                });
            } else{
                item.rotatable()
                
                // .resizable({
                //     containment: $(id),
                //     //maxWidth: 80,
                //     //maxHeight: 80,
                //     snap: false,
                //     minWidth: 40,
                //     minHeight: 40,
                //     animateDuration: "fast",
                //     autoHide: true,
                // });
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

function setFontFamily(value, el) {
    switch(value) {
        case 'classic':
            el.classList.add( 'whitneysans' );
            break;
        case 'rounded':
            el.classList.add( 'chewy' );
            break;
        case 'script':
            el.classList.add( 'damion' );
            break;
        case 'chunky':
            el.classList.add( 'arial' );
            break;
        default:
            break;
    }
}

function createElementOnFrame( valueId, frameId, ls_key ) {
        counter++;
        let value = document.querySelector( valueId ).value;

        // Set values to localstorage
        localStorage.setItem(  ls_key , value)

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
                    $('.clear-text').resizable({})
                }, 0);

                setFontFamily( font, div );
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

                //$( '#'+id ).draggable({ containment: frameId })  
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
    createElementOnFrame('#top-input', '#top', 'topText');
    createElementOnFrame('#bottom-input', '#bottom', 'bottomText');
    createElementOnFrame('#right-input', '#right', 'rightText');
    createElementOnFrame( '#left-input', '#left', 'leftText' );
}

function resetInputCounterValues(id, value) {
    $('#' + id + '-input').attr('maxlength', value);
    $('.' + id + '-maxlength').html(value)
}

// Set font family
$("input[name='font']" ).click( function () {

    $("input[name='font']").parent().removeClass('checked-font');
    $( this ).parent().addClass( 'checked-font' );
    
    var radioValue = $( "input[name='font']:checked" ).val();
    if(radioValue){
        localStorage.setItem('font', radioValue)
    }
})

function removeIcons(id) {
    $(id).html('')
}

function setPreviewInputValues() {
    $('#preview-top-value').val(localStorage.getItem('topText'))
    $('#preview-bottom-value').val(localStorage.getItem('bottomText'))
    $('#preview-right-value').val(localStorage.getItem('rightText'))
    $('#preview-left-value').val(localStorage.getItem('leftText'))
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

    // Refactor 
    $('.frame-back-side').css('background', '#fff');
    $('.frame-parent').css('background','#fff')
    $('.front-col-par .color-item').removeClass('checked-color')
    $('.back-col-par .color-item').removeClass('checked-color')
    $('.stick-col-par .color-item').removeClass('checked-color')

})

function setFontFamilyPrev() {
    let value = localStorage.getItem('font')
    switch(value) {
        case 'classic':
            $('.font-border').addClass( 'whitneysans' );
            break;
        case 'rounded':
            $('.font-border').addClass( 'chewy' );
            break;
        case 'script':
            $('.font-border').addClass( 'damion' );
            break;
        case 'chunky':
            $('.font-border').addClass( 'arial' );
            break;
        default:
            break;
    }
}

$('.back-button').click(function() {
    step--;
    switch(step) {
        case 1:
            $('.first-step').css('display', 'block')
            $('.second-step').css('display', 'none')
            $(this).css('display', 'none')
            $( ".frame-parent" ).animate({ "left": "5%" }, "slow" );
            $( ".frame-back-parent" ).hide( "slow" );
            $('.progress-second').removeClass('active-second')
        break;
        case 2:
            $('.second-step').css('display', 'block')
            $('.third-step').css('display', 'none')
            $('.accept-reviewed-checkbox').css('display', 'none')
            $('.progress-third').removeClass('active-third')
            $('.pers-fr').html('Personalized Frames')
    }
})

$('.go-to-first').click(function() {
    $('.third-step').css('display', 'none')
    $('.accept-reviewed-checkbox').css('display', 'none')
    $('.first-step').css('display', 'block')
})

$('.go-to-second').click(function() {
    $('.third-step').css('display', 'none')
    $('.accept-reviewed-checkbox').css('display', 'none')
    $('.second-step').css('display', 'block')
})

$('.first-step-button').click(function() {
    step++;
    $('.first-step').css('display', 'none')
    $('.second-step').css('display', 'block')
    $('.back-button').css('display', 'flex')
    $( ".frame-parent" ).animate({ "left": "-5%" }, "slow" );
    $( ".frame-back-parent" ).show( "slow" );
    $('.progress-second').addClass('active-second')
})

$('.second-step-button').click(function() {
    step++;
    $('.second-step').css('display', 'none')
    $('.third-step').css('display', 'block')
    $('.accept-reviewed-checkbox').css('display', 'block')
    setPreviewInputValues()
    $('.progress-third').addClass('active-third')
    $('.pers-fr').html('Personalization Complete')
    setFontFamilyPrev()

})

$("input[name='back-color']" ).click( function () {
    $("input[name='back-color']").parent().removeClass('checked-color');
    $( this ).parent().addClass( 'checked-color' );
    $('.frame-back-side').css('background', $( this ).val());
    $('.front-back').css('background', $( this ).val());
    
})

$("input[name='front-color']" ).click( function () {
    $("input[name='front-color']").parent().removeClass('checked-color');
    $( this ).parent().addClass( 'checked-color' );
    $('.frame-parent').css('background', $( this ).val())
    $('.front-prev').css('background', $( this ).val())
})

$("input[name='font-color']" ).click( function () {
    $("input[name='font-color']").parent().removeClass('checked-color');
    $( this ).parent().addClass( 'checked-color' );

    $('.textDropable').css('color', $( this ).val())
    $('.front-font').css('background', $( this ).val())
    

    $('.fr .sticker-parent svg path.c').css('fill', $( this ).val())
    $('.fr .sticker-parent svg circle.c').css('fill', $( this ).val())
})
