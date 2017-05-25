/**
 * Created by maksc on 24.05.2017.
 */
$(function() {
    var $paragraph = $('p');

    $paragraph.on('click', function () {
        $(this).animate ({
            opacity:0
        }, 2000, function () {

        alert('Done');
        })

    })



})