function getFaqs() {
    axios.get('https://admin.3des.ca/api/v1/faq-get')
        .then(function (res) {
            let data = res.data.data.faq;
            $('#accordionExample').html('');
            for(let i=0; i<data.length; i++) {
                let html = '<div class="card">' +
                                '<div class="card-header" id="heading'+i+'">' +
                                    '<h2 class="mb-0">' +
                                        '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse'+i+'" aria-expanded="true" aria-controls="collapse'+i+'">'+
                                            '<div class="text-left">' +
                                               ' <svg xmlns="http://www.w3.org/2000/svg" width="18.567" height="18.999" viewBox="0 0 18.567 18.999"><defs><style>.a{fill:#f16649;}</style></defs><path class="a" d="M294.375,252c-1.31,0-2.375,1.453-2.375,3.239s1.065,3.238,2.375,3.238a1.886,1.886,0,0,0,1.124-.387l-.234-.187a.648.648,0,1,1,.809-1.012l.247.2a4.074,4.074,0,0,0,.428-1.851C296.75,253.453,295.684,252,294.375,252Z" transform="translate(-285.091 -246.818)"/><path class="a" d="M173.284,156c-5.119,0-9.284,3.777-9.284,8.42,0,4.4,3.74,8.052,8.548,8.394l2.955,2.069a.648.648,0,0,0,1.007-.658l-.359-1.794a9.412,9.412,0,0,0,4.4-2.768,7.859,7.859,0,0,0,2.017-5.242C182.567,159.777,178.4,156,173.284,156Zm3.96,12.711a.648.648,0,0,1-.91.1l-.9-.716a3.2,3.2,0,0,1-2.155.858,3.346,3.346,0,0,1-2.649-1.388,5.353,5.353,0,0,1,0-6.291,3.221,3.221,0,0,1,5.3,0,5.129,5.129,0,0,1,1.022,3.146,5.272,5.272,0,0,1-.7,2.67l.889.711A.648.648,0,0,1,177.244,168.711Z" transform="translate(-164 -156)"/></svg>' +
                                                data[i].question +
                                            '</div>' +
                                           ' <span>+</span>'+
                                        '</button>'+
                                    '</h2>'+
                                '</div>'+
                               ' <div id="collapse'+i+'" class="collapse" aria-labelledby="heading'+i+'" data-parent="#accordionExample">'+
                                   ' <div class="card-body">'+
                                        '<p class="mt-35 mb-35">'+
                                            data[i].answer+
                                       ' </p>'+
                                   ' </div>'+
                               ' </div>'+
                            '</div>';

                $('#accordionExample').append(html);
            }
        })
}


getFaqs();