
/*05-01を引用*/

$(function () {

    /*
     * Slideshow
     */
    // slideshow クラスを持った要素ごとに処理を実行
    $('.slideshow').each(function () {

        var $slides = $(this).find('img'), // すべてのスライド
            slideCount = $slides.length,   // スライドの点数
            currentIndex = 0;              // 現在のスライドを示すインデックス

        // 1 番目のスライドをフェードインで表示
        $slides.eq(currentIndex).fadeIn();

        // 7500 ミリ秒ごとに showNextSlide 関数を実行
        setInterval(showNextSlide, 4000);

        // 次のスライドを表示する関数
        function showNextSlide () {

            // 次に表示するスライドのインデックス
            // (もし最後のスライドなら最初に戻る)
            var nextIndex = (currentIndex + 1) % slideCount;

            // 現在のスライドをフェードアウト
            $slides.eq(currentIndex).fadeOut();

            // 次のスライドをフェードイン
            $slides.eq(nextIndex).fadeIn();

            // 現在のスライドのインデックスを更新
            currentIndex = nextIndex;
        }

    });

});
/*05-03を引用*/
$(function () {

    /*
     * Sticky header
     */
    $('.header-inner').each(function () {

        var $window = $(window), // ウィンドウを jQuery オブジェクト化
            $header = $(this),   // ヘッダーを jQuery オブジェクト化
            // ヘッダーのデフォルト位置を取得
            headerOffsetTop = $header.offset().top;

        // ウィンドウのスクロールイベントを監視
        // (ウィンドウがスクロールするごとに処理を実行する)
        $window.on('scroll', function () {
            // ウィンドウのスクロール量をチェックし、
            // ヘッダーのデフォルト位置を過ぎていればクラスを付与、
            // そうでなければ削除
            if ($window.scrollTop() > headerOffsetTop) {
                $header.addClass('sticky');
            } else {
                $header.removeClass('sticky');
            }
        });

        // ウィンドウのスクロールイベントを発生させる
        // (ヘッダーの初期位置を調整するため)
        $window.trigger('scroll');

    });
});

/*05-08を引用*/
$(function () {

    $('#profile-wrapper').on('click', function () {

        // Smooth Scroll プラグインを実行
        $.smoothScroll({
            easing: 'easeOutExpo', // イージングの種類
            speed: 2000             // 所要時間
        });
    });

});

/*04-04を引用*/
$(function(){
    //
    var duration = 300;
   /*変数 durationに300を格納*/
    // aside ----------------------------------------
    var $aside = $('.header-inner aside');

      var $asides = $('.header-inner2 button ')
        .on('click', function(){
            $aside.toggleClass('open');/*asideにopenというクラスがあるか確認。*/
            if($aside.hasClass('open')){
                $aside.stop(true).animate({top: '50px'}, duration, 'easeOutBack');
            }else{
                $aside.stop(true).animate({top: '-350px'}, duration, 'easeInBack');
            };
        });

});
/*05-07*/
$(function () {

    /*
     * Back-toTop button (Smooth scroll)
     */
    $('.img8').each(function () {

        // html か body のいずれがスクロール可能な要素かを検出
        var $el = $(scrollableElement('html', 'body'));

        // ボタンにクリックイベントを設定
        $(this).on('click', function (event) {
            event.preventDefault();
            $el.animate({ scrollTop: 0 }, 650);
        });
    });

    // scrollTop が利用できる要素を検出する関数
    // http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links#update4
    function scrollableElement (elements) {
        var i, len, el, $el, scrollable;
        for (i = 0, len = arguments.length; i < len; i++) {
            el = arguments[i],
            $el = $(el);
            if ($el.scrollTop() > 0) {
                return el;
            } else {
                $el.scrollTop(1);
                scrollable = $el.scrollTop() > 0;
                $el.scrollTop(0);
                if (scrollable) {
                    return el;
                }
            }
        }
        return [];
    }

});
