$(".article1 .slide_group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간[단위:ms]
    dots: true, // 번호 버튼 나타낼 여부
    speed: 600, // 바뀌는시간(*생략가능)
    slidesToShow: 1, // 보여질슬라이드수(*생략가능)
    slidesToScroll: 1, // 이동슬라이드수(*생략가능)
    pauseOnHover: true, // 마우스오버시 멈춤여부(*생략가능)
    pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(*생략가능)
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    cssEase: 'linear', // 속도함수(*생략가능)
    draggable: true, // 마우스드래그시 슬라이드 교체가능여부(*생략가능)
    fade: false, // 페이드효과 여부, 안주면 우좌로 슬라이드 이동(*생략가능)
    arrows: true, // 좌우화살표 사용여부(*생략가능)
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
})

// // JQ방식
// $('.plpa').click(function(){
//     var $ibutton = $(this).find('i');
//     if($ibutton.hasClass('fa-pause')) {
//         $('.slide_group').slick('slickPause');
//         $ibutton.removeClass('fa-pause').addClass('fa-play')
//     }
//     else {
//         $('.slide_group').slick('slickPlay');
//         $ibutton.removeClass('fa-play').addClass('fa-pause')
//     }
// });

// JS방식
var elPlaystop = document.querySelector('.article1 .plpa');
var ibtn = elPlaystop.childNodes;
elPlaystop.addEventListener('click', function(){
    if(ibtn[0].classList.contains('fa-pause')){
        $('.article1 .slide_group').slick('slickPause');
        ibtn[0].classList.remove('fa-pause');
        ibtn[0].classList.add('fa-play');
    }
    else {
        $('.article1 .slide_group').slick('slickPlay');
        ibtn[0].classList.remove('fa-play');
        ibtn[0].classList.add('fa-pause');
    }
})

$('#header .opcl').on('click',function(){
    // $(this).toggleClass('on')
    if ( $(this).hasClass('on') ) {
        $(this).removeClass('on')
    } else {
        $(this).addClass('on')
    }
    // $(this).next().toggleClass('on')
    if ( $(this).next().hasClass('on') ) {
        $(this).next().removeClass('on')
    } else {
        $(this).next().addClass('on')
    }
    // 주석된 코드, 안된 코드 뒤바꾸면 됨.
})

var ww = $(window).width();
console.log(ww)
if( ww > 1024 ) {
    $('.nav .depth1 > li').hover(
        function(){ $(this).addClass('on') },
        function(){ $(this).removeClass('on') }
    )
} else {
    $('.nav .depth1 > li').on('click',function(){
        // $(this).toggleClass('on').siblings().removeClass('on')
        if( $(this).hasClass('on')) { 
            $(this).removeClass('on')
        } else {
            $(this).addClass('on').siblings().removeClass('on')
        }
    })
}