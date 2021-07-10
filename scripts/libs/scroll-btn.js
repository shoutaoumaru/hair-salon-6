// ヘッダーを取得
const header = document.querySelector('.header');
const container = document.querySelector('.sp-navbtn');
// ヘッダーの高さを取得
const hH = header.clientHeight;

// 現在地を示す変数を定義
let pos = 0;

// スクロール直前の位置を示す変数を定義
let lastPos = 0;

const onScroll = () => {
  if (pos > hH && pos > lastPos) {
    container.classList.add('hide');
  }
  // スクロール位置がヘッダーの高さ分より小さいか
  // またはスクロール位置が最後のスクロール位置より小さい場合はclass名を削除
  else if (pos < hH || pos < lastPos) {
    container.classList.remove('hide');
  }

  // 最後のスクロール位置を保存
  lastPos = pos;
};

window.addEventListener('scroll', () => {
  // スクロールするごとにpos（現在地）の値を更新
  pos = window.scrollY;
  onScroll();
});