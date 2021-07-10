$(document).ready(function () {
  $(".animsition").animsition({
    inClass: 'fade-in', // ロード時のエフェクト
    outClass: 'fade-out', // 離脱時のエフェクト
    inDuration: 1000, // ロード時の演出時間
    outDuration: 600, // 離脱時の演出時間
    linkElement: '.animsition-link', // アニメーションを行う要素
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true, // ローディングの有効/無効
    loadingParentElement: 'body', // ローディング要素のラッパー
    loadingClass: 'animsition-loading', // ローディングのクラス
    loadingInner: '', // e.g '' ローディングの内容
    timeout: false, // 一定時間が経ったらアニメーションをキャンセルの有効/無効
    timeoutCountdown: 5000, // アニメーションをキャンセルするまでの時間
    onLoadEvent: true, // onLoadイベント後にアニメーションをするかの有効/無効
    browser: ['animation-duration', '-webkit-animation-duration'],
    // ブラウザが配列内のCSSプロパティをサポートしていない場合、アニメーションを中止します。デフォルトは「animation-duration」をサポートしていない場合です。
    overlay: false, // オーバーレイの有効/無効
    overlayClass: 'animsition-overlay-slide', // オーバーレイのクラス
    overlayParentElement: 'body', // オーバーレイ要素のラッパー
    transition: function (url) {
      window.location.href = url;
    } // transition後にどこに遷移させるかを設定、urlは「linkElement」のhref
  });
});