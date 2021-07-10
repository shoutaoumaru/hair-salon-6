document.addEventListener('DOMContentLoaded', function () {
  const hero = new HeroSlider('.swiper-container');
  hero.start();
  const hero2 = new HeroSlider2('.swiper-container2');
  hero2.start();
  const hero3 = new HeroSlider2('.swiper-container3');
  hero3.start();

  // <!-------- /HeroSlider-animation -------->
  const cb = function (el, inview) {
    if (inview) {
      const ta = new TextAnimation(el);
      ta.animate();
    }
  };
  const so = new ScrollObserver('.clip-js', cb, {
    rootMargin: '-150px 0px',
  });
  const cb2 = function (el, inview) {
    if (inview) {
      const ta = new BgAnimation(el);
      ta.animate();
    }
  };
  const so4 = new ScrollObserver('.clip-js-bg', cb2, {
    rootMargin: '300px 0px',
  });
  // <!-------- /text-animation -------->
  const so2 = new ScrollObserver(
    '.appear',
    (el, inview) => {
      if (inview) {
        el.classList.add('inview');
      } else {
        el.classList.remove('inview');
      }
    }, {
      rootMargin: '-100px 0px',
    }
  );
  // <!-------- /inview-animation -------->
  const so3 = new ScrollObserver(
    '.cover-slide',
    (el, inview) => {
      if (inview) {
        el.classList.add('inview');
      } else {
        el.classList.remove('inview');
      }
    }, {
      rootMargin: '-100px 0px',
    }
  );
  // <!-------- /imgSlide-animation -------->
});