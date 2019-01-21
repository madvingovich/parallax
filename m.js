$(document).ready(function() {
    // (function ($) {
    //
    //     var self = this, container, running=false, currentY = 0, targetY = 0, oldY = 0, maxScrollTop = 0, minScrollTop, direction, onRenderCallback=null,
    //         friction = .95, // higher value for slower deceleration
    //         vy = 0,
    //         stepAmt = 1,
    //         minMovement= 0.1,
    //         ts=0.1;
    //
    //     var updateScrollTarget = function (amt) {
    //         targetY += amt;
    //         vy += (targetY - oldY) * stepAmt;
    //
    //         oldY = targetY;
    //
    //     }
    //
    //     var render = function () {
    //
    //         if(currentY === -0) currentY = $(window).scrollTop();
    //
    //         currentY = currentY < -container.height() ? -container.height() : currentY;
    //
    //         if (vy < -(minMovement) || vy > minMovement) {
    //             currentY = (currentY + vy);
    //             if (currentY > maxScrollTop) {
    //                 currentY = vy = $(window).scrollTop();
    //             } else if (currentY < minScrollTop) {
    //                 vy = 0;
    //                 currentY = minScrollTop;
    //             }
    //
    //             $('html,body').scrollTop(-currentY);
    //
    //             vy *= friction;
    //
    //             //   vy += ts * (currentY-targetY);
    //             // scrollTopTweened += settings.tweenSpeed * (scrollTop - scrollTopTweened);
    //             // currentY += ts * (targetY - currentY);
    //
    //             if(onRenderCallback){
    //                 onRenderCallback();
    //             }
    //         }
    //     }
    //
    //     var animateLoop = function () {
    //         if(! running)return;
    //         requestAnimFrame(animateLoop);
    //         render();
    //         //log("45","animateLoop","animateLoop", "",stop);
    //     }
    //
    //     var onWheel = function (e) {
    //         e.preventDefault();
    //         var evt = e.originalEvent;
    //
    //         var delta = evt.detail ? evt.detail * -1 : evt.wheelDelta / 40;
    //         var dir = delta < 0 ? -1 : 1;
    //         if (dir != direction) {
    //             vy = 0;
    //             direction = dir;
    //         }
    //         updateScrollTarget(delta);
    //     }
    //
    //     /*
    //      * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    //      */
    //
    //     window.requestAnimFrame = (function () {
    //         return  window.requestAnimationFrame ||
    //             window.webkitRequestAnimationFrame ||
    //             window.mozRequestAnimationFrame ||
    //             window.oRequestAnimationFrame ||
    //             window.msRequestAnimationFrame ||
    //             function (callback) {
    //                 window.setTimeout(callback, 1000 / 60);
    //             };
    //
    //
    //     })();
    //
    //     $.fn.smoothWheel = function () {
    //         //  var args = [].splice.call(arguments, 0);
    //         var options = jQuery.extend({}, arguments[0]);
    //         return this.each(function (index, elm) {
    //
    //             if(!('ontouchstart' in window)){
    //                 container = $(this);
    //                 container.bind("mousewheel", onWheel);
    //                 container.bind("DOMMouseScroll", onWheel);
    //
    //                 //set target/old/current Y to match current scroll position to prevent jump to top of container
    //                 targetY = oldY = container.scrollTop();
    //                 currentY = -targetY;
    //
    //                 minScrollTop = container.clientHeight - container.scrollHeight;
    //                 if(options.onRender){
    //                     onRenderCallback = options.onRender;
    //                 }
    //                 if(options.remove){
    //                     log("122","smoothWheel","remove", "");
    //                     running=false;
    //                     container.unbind("mousewheel", onWheel);
    //                     container.unbind("DOMMouseScroll", onWheel);
    //                 }else if(!running){
    //                     running=true;
    //                     animateLoop();
    //                 }
    //
    //             }
    //         });
    //     };
    //
    //
    // })(jQuery);

    // $('body').smoothWheel();
});

$(document).ready(function() {
    let
        h = $(window).height(),
        percent = h/100,
        images = $('img'),
        img1 = $('img:nth-child(1)'),
        img2 = $('img:nth-child(2)'),
        img3 = $('img:nth-child(3)'),
        img4 = $('img:nth-child(4)'),
        img5 = $('img:nth-child(5)'),
        big = $('.big'),
        bigOff = big.offset().top;



    $(window).on('scroll', () => {
        $('header').height(h - $(this).scrollTop());
        // images.css('opacity', $('header').height() / percent / 100 - .2);


        // console.log('--->', $('.big').offset().top);
        // console.log('--->', $(window).scrollTop());

        // if($(window).scrollTop() > bigOff) {
        //     console.log('--->',h -  ($(this).scrollTop() - bigOff));
        //     $('.big').height(h -  ($(this).scrollTop() - bigOff));
        // }
    });

    $(window).on('mousemove', (e) => {
        parallax.call(img1, e, .05);
        parallax.call(img2, e, .2);
        parallax.call(img3, e, .025);
        parallax.call(img4, e, .2);
        parallax.call(img5, e, .05);
    });


    function parallax(e, coef) {
        let img = this,
            xCenter = img.offset().left + img.width() / 2,
            yCenter = img.offset().top + img.height() / 2,
            positionX = e.clientX - xCenter,
            positionY = e.clientY - yCenter;

        img.css({'transform': `translate(${ positionX * coef }px, ${ positionY * coef }px)`})
    }

});
































