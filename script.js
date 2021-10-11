$('.fa-bars').on('click', function(event){
    event.preventDefault;
    $('.nav-box').toggleClass('show-nav')
    $('main').toggleClass('move-main')
});