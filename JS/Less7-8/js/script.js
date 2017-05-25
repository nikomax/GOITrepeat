/**
 * Created by maksc on 24.05.2017.
 */
$(function () {

    var $tab = $('.tab');
    var $tabText = $('.tab-text');

    for (var i = 0; i < 3; i++) {
        $($tab[i]).on('click', showBlock);
    }

    function showBlock(e) {
        $('.block').hide();
        e.preventDefault();
        $($tabText[$tab.index(this)]).toggle();
    }
})