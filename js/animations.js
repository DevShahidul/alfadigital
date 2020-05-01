if (window.mediaQuery('desktop')) {
  var wow = CustomEase.create("custom", "M0,0 C0.126,0.382 0.139,0.691 0.314,0.82 0.412,0.892 0.818,1 1,1");

  //Header
  var tl_header = new TimelineMax({delay:1.5});
  tl_header.add( TweenMax.from('.header__link', .2, {y: "-100%", ease: wow}) );
  tl_header.add( TweenMax.staggerFrom('.header__nav-link', .6, {top: "-100%", opacity: 0, ease: wow}, 0.1) );
  tl_header.add( TweenMax.from('.language-selector', .3, {top: "-100%", ease: wow }), "-=.2" );
  tl_header.add( TweenMax.staggerFrom('.header__external', .1, {top: "-50%", opacity: 0, ease: wow}, -0.1), "-=.2" );

  //Cover Text-Content
  var tl_coverText = new TimelineMax({ delay:1.5 });
  tl_coverText.add( TweenMax.staggerFrom('.grid-cover__item-cover__text', 1, { y: "50%", opacity: 0, ease: wow}, 0.2) );
  tl_coverText.add( TweenMax.from('.decoration-line', 0.5, {width: 0, opacity: 0, ease: wow}), '-=1' );

  //Animation Find your Job & Footer
  var square_find_your_job = TweenMax.staggerFrom('.grid-find-your-job .grid__item--grey', 1, {y: "200%", ease: Linear.easeNone}, 0.5);
  var find_your_job_elements = TweenMax.staggerFrom('.grid-find-your-job__item-title, .grid-find-your-job__item-cta', 1, {y: "100%", ease: wow}, 0.3);
  var f_logos = TweenMax.staggerFrom('.grid-footer__logos img', 1, {y: 20, opacity:0, ease: wow}, 0.05);
  var footer_laterals = TweenMax.from('.grid-footer__legal, .grid-footer__social, .grid-footer__firma', 1, {y: 30, opacity: 0, ease: wow, delay: .3});

  var moveup_square_find_your_job = new ScrollMagic.Scene({triggerElement: '.grid-find-your-job', triggerHook: 'onEnter', duration: "65%"})
    .setTween( square_find_your_job )

  var find_your_job = new ScrollMagic.Scene({triggerElement: '.grid-find-your-job', triggerHook: '0.60', duration: "25%"})
    .setTween( find_your_job_elements )

  var find_your_job_cta = new ScrollMagic.Scene({triggerElement: '.grid-find-your-job', triggerHook: '0.55'})
    .setClassToggle('.grid-find-your-job .btn-roll-bottom__label, .grid-find-your-job .btn-roll-bottom', 'complete-show')

  var footer_1 = new ScrollMagic.Scene({triggerElement: '.grid-find-your-job', triggerHook: '0.45'})
    .setTween( f_logos )

  var footer_2 = new ScrollMagic.Scene({triggerElement: '.grid-find-your-job', triggerHook: '0.45'})
    .setTween( footer_laterals );

  var footer_jobs_1 = new ScrollMagic.Scene({triggerElement: '.page-jobs .grid-footer', triggerHook: 0.85})
    .setTween( f_logos )

  var footer_jobs_2 = new ScrollMagic.Scene({triggerElement: '.page-jobs .grid-footer', triggerHook: 0.85})
    .setTween( footer_laterals )

  // init controller
  var mainController = window.controller;

  mainController.addScene([
    moveup_square_find_your_job,
    find_your_job,
    find_your_job_cta,
    footer_1,
    footer_2,
    footer_jobs_1,
    footer_jobs_2
  ]);
} else {
  $('.btn-roll-bottom, .btn-roll-bottom__label').addClass('complete-show');
  $('.our-location__picture').css('transform', 'translateY(-50%)');
  $('.our-location__image--spain .our-location__picture').css('transform', 'translateY(-25%)');
}