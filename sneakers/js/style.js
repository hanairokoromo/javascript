$(function(){
    
    //ハンバーガーメニューを開く
    $('.toggle-btn').on('click', function(){
        if($('#header').hasClass('open')){
            $('#header').removeClass('open');
        }else{
            $('#header').addClass('open');
        };
    });
    
    
    //maskのエリアをクリックするとウインドウを閉じる
    $('#mask').on('click', function(){
        $('#header').removeClass('open');
    });
    
   //ナビゲーションメニューをクリックしたらウインドウを閉じる
   $('#navi a').on('click', function(){
       $('#header').removeClass('open');
   });
   
   
   //PICK UPスライダー
   $('.slick-area').slick({
       arrows: false,
       centerMode: true,
       centerPadding: '100px',
       slidesToShow: 3,
       responsive:[
           {
               breakpoint: 768,
               settings:{
                   centerPadding: '50px',
                   slidesToShow: 1
               }
           }
           ]
   });
   
   
   //スムーススクロール
   $('a[href^="#"]').click(function(){
       let href = $(this).attr("href");
       let target = $(href == "#" || href == "" ? 'html' : href);
       let position = target.offset().top;
       $("html, body").animate({scrollTop:position}, 600, "swing");
       return false;
   });
    
    
    //スクロール時の画像のフェード表示
    $(window).scroll(function(){
        $('fadein').each(function(){
            let scroll = $(window).scrollTop();
            let target = $(this).offset().top;
            let windowHeigth = $(window).height();
            if(scroll > target - windowHeigth + 200){
                $(this).css('opacity', '1');
                $(this).css('transform', 'translateY(0)');
            }
        });
    });
    
    
});