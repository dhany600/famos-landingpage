// $(window).on("load", function () {
//     $('#box-container-slider-0').addClass('active');
// });
$(function () {

    $('#carouselExampleIndicators').on('slid.bs.carousel', function () {
        var currentIndex = $('#carouselExampleIndicators div.carousel-inner .active').attr('data-id');
        console.log(currentIndex);
        $('.box-container-slide').removeClass('active');
        $('#box-container-slider-' + currentIndex).addClass('active');
    });
});

window.sr = ScrollReveal()
sr.reveal('.box-container-slide.active', {
    duration: 2000,
    origin: 'bottom'
});
sr.reveal('#carouselExampleIndicators', {
    duration: 2000,
    origin: 'bottom'
});

sr.reveal('#box-kecil1', {
    duration: 2000,
    origin: 'left'
});
sr.reveal('#box-kecil2', {
    duration: 2000,
    origin: 'top'
});
sr.reveal('#box-kecil3', {
    duration: 2000,
    origin: 'bottom'
});
sr.reveal('#box-kecil4', {
    duration: 2000,
    origin: 'right'
});


window.onload = function () {
    gsap.registerPlugin(ScrollTrigger);

    const targets = document.querySelectorAll(".list li");

    gsap.set(".list", {
        autoAlpha: 1
    });

    const timeline = gsap.timeline({
        defaults: {
            overwrite: "auto",
            ease: "power1"
        },
        scrollTrigger: {
            end: "+=300%",
            pin: true,
            pinSpacing: true,
            scrub: true,
            start: "top top",
            trigger: ".list"
        }
    });

    const stagger = 0.8;
    const duration = 1;

    gsap.set(".list", {
        autoAlpha: 1
    });

    timeline.set(targets, {
        transformOrigin: "center bottom"
    });

    timeline
        .from(targets, {
            duration: duration,
            opacity: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            stagger: stagger,
            yPercent: 60
        })
        .to(
            targets, {
                duration: duration,
                opacity: 0,
                rotationX: 20,
                rotationY: 2,
                scale: 0.75,
                stagger: stagger,
                y: -100
            },
            stagger
        );
};

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    // nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:4
        },
        600:{
            items:3
        },
        1000:{
            items:8
        }
    }
})