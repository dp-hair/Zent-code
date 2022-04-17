$(document).on('click', '.menu-btn', function() {
    var icon = $(this).find('.fa');
    if (icon.hasClass('fa-bars')) {
        $('ul').css('display', block)
    }
});