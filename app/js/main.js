$(function(){

    var burgerMenu = $('.menu-burger');
    var crossMenu = $('.menu-cross');
    var navigationMobileList = $('.navigation-mobile-list');

    burgerMenu.on('click', function(e){
        navigationMobileList.addClass('navigation-mobile-list--mod-js');
    });
    crossMenu.on('click', function(e){
        navigationMobileList.removeClass('navigation-mobile-list--mod-js');
    })


});