 
$(function () {
    // ローダー終了
    function end_loader() {
      $('.loader').fadeOut(800);
    }
    // テキスト表示
    function show_txt() {
      $('.loader .txt').fadeIn(400);
    }
    // テキスト表示2
    function show_txt2() {
        $('.loader .txt2').fadeIn(400);
      }
    // テキスト表示3
    function show_txt3() {
        $('.loader .txt3').fadeIn(400);
      }
    // テキスト非表示
    function hide_txt() {
      $('.loader .txt').fadeOut(400);
    }
    // テキスト非表示2
    function hide_txt2() {
        $('.loader .txt2').fadeOut(400);
     }
    // テキスト非表示3
    function hide_txt3() {
        $('.loader .txt3').fadeOut(400);
      }
   
    // タイマー処理
    $(window).on('load', function () {
      // 処理①1
      setTimeout(function () {
        show_txt();
      }, 1000)
    // 処理①2
    setTimeout(function () {
        show_txt2();
        }, 2000)
    // 処理①3
      setTimeout(function () {
        show_txt3();
      }, 3000)
      // 処理②1
      setTimeout(function () {
        hide_txt();
      }, 5500)
      // 処理②2
      setTimeout(function () {
        hide_txt2();
      }, 5500)
      // 処理②3
      setTimeout(function () {
        hide_txt3();
      }, 5500)
      // 処理③
      setTimeout(function () {
        end_loader();
      },6500)
    })
  })