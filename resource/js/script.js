$(document).ready(function(){

    //------------nav change----------//
    $('.wrapper').waypoint(function(direction) {
        if (direction === 'down') {
            $('nav').addClass('scrol-nav');
            $('nav').removeClass('topnav');
        } else if (direction === 'up') {
            // hide our content
            $('nav').addClass('topnav');
            $('nav').removeClass('scrol-nav');
        }

    }, { offset: '10%' });

    //----------end  nav change-------------//


    //-------------scrolling function--------//


    $(document).on('click', 'a', function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top-70
                }, 1000);
                return false;
            }
        }
    });

    //-------------end scrolling function--------//



    //-------------mobile nav--------//
    $('.js--nav--icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav--icon i');
        nav.slideToggle(300);
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }else{
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
        }
    })



});