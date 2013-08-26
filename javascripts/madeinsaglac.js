
$(document).ready(function() {

    $.stellar({
        horizontalScrolling: false,
        verticalOffset: 40
    });

	$('#navbar .btn').on('click', function() {
        $('html, body').animate({
            scrollTop: ($($(this).attr('href')).offset().top - 120)
        }, 600);

        return false;
    });

    $('#cie .btn').on('click', function() {
        $('#cie-logo, #cie-realisations').hide();
        $($(this).attr('href')).show();
        $('#cie .btn').removeClass('selected');
        $(this).addClass('selected');
        return false;
    });

    $('[data-toggle="tooltip"]').tooltip();
});