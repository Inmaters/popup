$('.show_popup').click(function () {
    var popup_id = $('#' + $(this).attr("rel")); 
    $(popup_id).show();
    $('.overlay').show();
})

$('.overlay').click(function () {
    $('.overlay, .popup').hide(); 
})
$('#btn_can').click(function () { 
    $('.overlay, .popup').hide(); 
})
$('.cross').click(function () { 
    $('.overlay, .popup').hide(); 
})
$('#btn_un').click(function () { 
    $('.overlay, .popup').hide(); 
    setTimeout(function () { alert('DONE') }, 30)
});