//パララックス縦
const parallax = document.querySelectorAll('.parallax');
new simpleParallax(parallax, {
  scale: 1.3
});
//パララックス横右
const parallax01 = document.querySelectorAll('.parallax-rt');
new simpleParallax(parallax01, {
  orientation: 'right',
  scale: 1.3
});
const parallax02 = document.querySelectorAll('.parallax-lt');
new simpleParallax(parallax02, {
  orientation: 'left',
  scale: 1.3
});

//* * *  * * *  パララックスbg* *  * * * * * * /

var rellax = new Rellax('.rellax', {
  speed: -0.7,
  center: false,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false
});