
$(document).ready(function(){
    $('.menu-toggler').click(function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    })

    $('.project-item').mouseover(function(e){
        $('.project-info').toggleClass('hidden')
        $('.project-title').toggleClass('hidden')
    })
    $('.project-item').mouseout(function(e){
        $('.project-info').toggleClass('hidden')
        $('.project-title').toggleClass('hidden')
    })
})