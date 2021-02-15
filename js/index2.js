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
    responsive: [{
        breakpoint: 1025,
        settings: {
            arrows: false,
            // slidesToShow: 1, // 보여질슬라이드수(생략가능)    
            // centerMode: true,
            // centerPadding: "100px",
        }
    }]
})

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
    $(this).toggleClass('on')
    $(this).next().toggleClass('on')
})

var deviceSize = 1024;
function scrollOX(status) {
    $('html').css({ overflowY:status })
    var htmlWidth = $('html').width();
    return htmlWidth
}
var swh = scrollOX('hidden');
var sws = scrollOX('scroll');
var swd = swh - sws;
if ( swd > 0 ) {
    deviceSize = deviceSize - swd;
}
var ww;
function calc_width(){
    ww = $(window).width();
    if ( ww > deviceSize && !$('html').hasClass('pc') ) {
        $('html').addClass('pc').removeClass('mobile')
        $('#header .opcl').removeClass('on')
        $('.depth1 > li').removeClass('on')
        $('html').scrollTop(0)
    } else if ( ww <= deviceSize && !$('html').hasClass('mobile') ){
        $('html').addClass('mobile').removeClass('pc')
        $('#header .nav').removeClass('on')
        $('#header .opcl').removeClass('on')
    }
}
calc_width();
$(window).on('resize', function(){ calc_width(); })

$('.depth1 > li').on('click', function(e){
    if ( $('html').hasClass('mobile') ) {
        e.preventDefault()
        $(this).toggleClass('on').siblings().removeClass('on')
    }
})

$('.depth2 > li').on('click', function(e){
    e.stopPropagation()
})

$('.depth1 > li').hover(
    function(){
        if ( $('html').hasClass('pc') ) {
            $(this).addClass('on')
        }
    },
    function(){ 
        if ( $('html').hasClass('pc') ) {
            $(this).removeClass('on') 
        }
    }
)

$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    if ( sct>=1 && !$('#header').hasClass('on') ) {
        $('#header').addClass('on')
    } else if ( sct<1 && $('#header').hasClass('on') ) {
        $('#header').removeClass('on')
    }
})