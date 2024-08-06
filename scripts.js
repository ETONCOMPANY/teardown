$(document).ready(function(){
    // 스크롤 이벤트 추가
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $("header").css("background" , "#28a745");
        } else {
            $("header").css("background" , "transparent");
        }

        // 스크롤 애니메이션 효과
        $(".fade-in").each(function() {
            var elementTop = $(this).offset().top;
            var viewportBottom = $(window).scrollTop() + $(window).height();
            if (elementTop < viewportBottom) {
                $(this).addClass("visible");
            }
        });
    });

    // 스크롤 애니메이션 추가
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

    // 모바일 슬라이드 설정
    $('#carouselExampleIndicators').on('slide.bs.carousel', function (e) {
        if ($(window).width() < 768) {
            var $e = $(e.relatedTarget);
            var idx = $e.index();
            var itemsPerSlide = 1;
            var totalItems = $('.carousel-item').length;

            if (idx >= totalItems-(itemsPerSlide-1)) {
                var it = itemsPerSlide - (totalItems - idx);
                for (var i=0; i<it; i++) {
                    // append slides to end
                    if (e.direction=="left") {
                        $('.carousel-item').eq(i).appendTo('.carousel-inner');
                    }
                    else {
                        $('.carousel-item').eq(0).appendTo('.carousel-inner');
                    }
                }
            }
        }
    });

    // 초기 스크롤 애니메이션 설정
    $(window).trigger("scroll");
});
