//パララックス縦
const parallax = document.querySelectorAll('.parallax');
new simpleParallax(parallax, {
  scale: 1.3,
  delay: 0.4,
  orientation: 'down'
});
const parallax03 = document.querySelectorAll('.parallax-down');
new simpleParallax(parallax03, {
  scale: 1.4,
  delay: 0.4,
  overflow: true,
  orientation: 'down'
});
const parallax04 = document.querySelectorAll('.parallax-up');
new simpleParallax(parallax04, {
  scale: 1.3,
  delay: 0.4,
  overflow: true,
  orientation: 'up'
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