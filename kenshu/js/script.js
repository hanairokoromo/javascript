$(function(){
    //要素を取得
    var $box = $('#box');
    
    //要素のCSSを変更
    $box.css('color', 'red');
    
    //要素の中身のHTMLを変更
    $box.html('<p>content</p>');
    
    //要素のclass名を取得
    var className = $box.attr('class');
    console.log(className);
});


//イベント作成

$(function(){
    $('#btn').mouseover(function(){
        $('#btn').css('backgroundColor', 'red');
    });
    $('#btn').mouseout(function(){
        $('#btn').css('backgroundColor', 'blue');
    });
});


//アニメーション
$(function(){
    $('#box1').animate({left: '500px'}, 1000);
});