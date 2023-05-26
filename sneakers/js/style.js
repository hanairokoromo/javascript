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
    
    
});