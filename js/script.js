$(document).ready(function(){
    if(confirm("이 웹사이트는 1920x1080 사이즈 및 Chrome에 최적화 되어있고 상업적 목적이 아닌 개인 포트폴리오용으로 제작 되었음을 알립니다.")){
        alert("찾아와주셔서 감사합니다. 보다 나은 결과물을 위해 수정중입니다.");
    }
    
    $('.banner').click(function(){
        $('.banner_cont').show()
        $('.photoshop_cont').hide()
        $('.poster_cont').hide()
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
    })
    $('.photoshop').click(function(){
        $('.photoshop_cont').show()
        $('.banner_cont').hide()
        $('.poster_cont').hide()
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
    })
    $('.poster').click(function(){
        $('.poster_cont').show()
        $('.banner_cont').hide()
        $('.photoshop_cont').hide()
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
    }) 
    // 디테일 팝업
    $('.thursday').click(function(){
        $('.thursday-cont').fadeIn()
    })
    $('.close-cont').click(function(){
        $('.thursday-cont').fadeOut()
    })

    $('.cartier').click(function(){
        $('.cartier-cont').fadeIn()
    })
    $('.close-cont').click(function(){
        $('.cartier-cont').fadeOut()
    })

    $('.chai').click(function(){
        $('.chai-cont').fadeIn()
    })
    $('.close-cont').click(function(){
        $('.chai-cont').fadeOut()
    })

    $('.slick').click(function(){
        $('.slick-cont').fadeIn()
    })
    $('.close-cont').click(function(){
        $('.slick-cont').fadeOut()
    })

    // 스크롤 페이지 fadein
    // $(window).scroll( function(){
    //     $('section').each( function(i){
            
    //         var bottom_of_element = $(this).offset().top + $(this).outerHeight();
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();
            
    //         if( bottom_of_window > bottom_of_element ){
    //             $(this).animate({'opacity':'1','margin-left':'0px'},1000);
    //         }
            
    //     }); 
    // });
    
})