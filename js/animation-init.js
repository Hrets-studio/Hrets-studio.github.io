$(document).ready(function () {

    $(window).scroll(function () {
        var windowTop = $(window).scrollTop();
        $('.animated').each(function (i) {
            var itemTop = $(this).offset().top;
            var itemHeight = $(this).outerHeight();
            var itemBottom = itemTop + itemHeight;
            var animationName = $(this).attr('data-animation');
            if (windowTop > itemBottom && $(this).hasClass(animationName)) {
                $(this).removeClass(animationName).css('opacity', '0');
            }
        });
    });

    $('.animated').each(function (i) {
            var animateItem = $(this);
            var animationName = animateItem.attr('data-animation');
            animateItem.css('opacity', '0');

            animateItem.css('opacity', '0').waypoint(function (dir) {
                if (dir === 'down') {
                    animateItem.addClass(animationName).css('opacity', '1');
                }
            }, { offset: '75%' });

            animateItem.css('opacity', '0').waypoint(function (dir) {
                if (dir === 'up') {
                    if (!animateItem.hasClass(animationName)) {
                        animateItem.addClass(animationName).css('opacity', '1');
                    }
                }
            }, { offset: '5%' });

        animateItem.css('opacity', '0').waypoint(function (dir) {
            if (dir === 'up') {
                if (animateItem.hasClass(animationName))
                    animateItem.removeClass(animationName).css('opacity', '0');
            }
        }, { offset: '100%' });
    });
});