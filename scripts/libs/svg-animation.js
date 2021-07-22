document.addEventListener('DOMContentLoaded', function () {
  new Vivus('move', {
    type: 'scenario-sync',
    duration: 100,
    forceRender: false,
    animTimingFunction: Vivus.EASE
  });
});