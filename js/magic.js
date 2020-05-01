if (window.mediaQuery('desktop')) {
  $(window).on('load', function() {

    var controller = window.controller;
    var wow = CustomEase.create("custom", "M0,0 C0.126,0.382 0.139,0.691 0.314,0.82 0.412,0.892 0.818,1 1,1");
    var scroll = Linear.easeNone;
    var height = window.innerHeight;

    //Cover
    var tl_coverCubes = new TimelineMax({delay:1.7, onComplete: function(){ $('.grid-cover__item-cover__viewmore').addClass('complete-show'); tl_CoverExit();}});
    TweenMax.set('.grid__item--cube_1 .inner-image, .grid__item--cube_2 .inner-image, .grid__item--cube_3 .inner-image, .grid__item--cube_4 .inner-image', {opacity: 0});
    tl_coverCubes.add( TweenMax.fromTo('.grid__item--cube_1', .5, {y: "150%"}, {y: "100%"}) );
    tl_coverCubes.add( TweenMax.from('.grid__item--cube_1 .overpanel', .3, {width:0}), "-=.5" );
    tl_coverCubes.add( TweenMax.set('.grid__item--cube_1 .inner-image', {opacity: 1}), "-=.25" );
    tl_coverCubes.add( TweenMax.to('.grid__item--cube_1 .overpanel', .5, {right: "100%"}), "-=.25" );
    tl_coverCubes.add( TweenMax.to('.grid__item--cube_1', 1, {y: "0%", ease: wow}), "-=.6" );

    tl_coverCubes.add( TweenMax.from('.grid__item--cube_2', .7, {y: "150%", ease: wow}), "-=.7" );
    tl_coverCubes.add( TweenMax.from('.grid__item--cube_2 .overpanel', .3, {width:0}), "-=.7" );
    tl_coverCubes.add( TweenMax.set('.grid__item--cube_2 .inner-image', {opacity: 1}), "-=.3" );
    tl_coverCubes.add( TweenMax.to('.grid__item--cube_2 .overpanel', .3, {right:"100%"}), "-=.3" );

    tl_coverCubes.add( TweenMax.from('.grid__item--cube_4', 1.5, {y: "150%", ease: wow}), "-=1" );
    tl_coverCubes.add( TweenMax.from('.grid__item--cube_4 .overpanel', .2, {width:0}), "-=1" );
    tl_coverCubes.add( TweenMax.set('.grid__item--cube_4 .inner-image', {opacity: 1}), "-=.6" );
    tl_coverCubes.add( TweenMax.to('.grid__item--cube_4 .overpanel', .3, {right:"100%"}), "-=.6" );

    tl_coverCubes.add( TweenMax.from('.grid__item--cube_3', 1, {y: "150%", ease: wow}), "-=.8" );
    tl_coverCubes.add( TweenMax.from('.grid__item--cube_3 .overpanel', .2, {width:0}), "-=1" );
    tl_coverCubes.add( TweenMax.set('.grid__item--cube_3 .inner-image', {opacity: 1}), "-=.8" );
    tl_coverCubes.add( TweenMax.to('.grid__item--cube_3 .overpanel', .3, {right:"100%"}), "-=.6" );
    //tl_coverCubes.add( TweenMax.from('.grid__item--cube_3 .inner-image', 2, {y: "150%", ease: wow}), "-=2.5" );

    tl_coverCubes.add(  TweenMax.to('.grey-2 .overpanel--white', .3, {right: "100%", ease: wow}), "-=1.8" );
    tl_coverCubes.add(  TweenMax.from('.grid-cover .grey-2', 1, {y: "300%", ease: wow}), "-=1.8" );

    tl_coverCubes.add(  TweenMax.from('.grid-cover .grey-1', .5, {y: "150%", ease: wow}), "-=1.5");
    tl_coverCubes.add(  TweenMax.to('.grey-1 .overpanel--white', .8, {right: "100%", ease: wow}), "-=1.5");

    var what_we_do = TweenMax.fromTo('.scroling-wrapper .scroling-header', 1, {x: "10%", ease: scroll}, {x: "-40%", ease: scroll});
      
    var text_content = TweenMax.fromTo('.grid-cover__item-cover__text', 1, {y: "70%", ease: scroll}, {y: "-50%", ease: scroll});
      
    //Greys square & Images square
    var squares_0 = TweenMax.fromTo('.featured-grid .grey-1, .featured-grid-cover .grey-1', .5, {y: "300%", ease: scroll}, {y: "-100%", ease: scroll});

    var squares_1 = TweenMax.from('.featured-grid .image-1', .5, {y: "150%", ease: scroll});
      
    var squares_gray = TweenMax.from('.grid-cover__item-cover--grey', .5, {y: "200%", ease: scroll});
      
    var squares_gray_2 = TweenMax.from('.grid-cover__item-cover--grey[data-row="2"]', .5, {y: "230%", ease: scroll});
      
    var squares_1_image = TweenMax.fromTo('.featured-grid .image-1 picture', .5, {y: "-30%", ease: scroll}, {y: '0%', ease:scroll});
      
    var squares_1_image_leave = TweenMax.to('.featured-grid .image-1 picture', .5, {y: "0%", ease: scroll});

    var squares_2 = TweenMax.fromTo('.featured-grid .grey-2', .5, {y: "300%", ease: scroll},{y: "-100%", ease: scroll});
    var squares_3 = TweenMax.fromTo('.featured-grid .grey-3', .5, {y: "300%", ease: scroll},{y: "-100%", ease: scroll});

    var squares_31 = TweenMax.fromTo('.featured-grid .grey-4', .5, {y: "500%", ease: scroll},{y: "-100%", ease: scroll});
    var moveup_square_31 = new ScrollMagic.Scene({triggerElement: '.featured-grid', triggerHook: '0.4', duration: "150%"}).setTween(squares_31);
    controller.addScene(moveup_square_31);

    var squares_32 = TweenMax.fromTo('.featured-grid .grey-5', .5, {y: "500%", ease: scroll},{y: "-100%", ease: scroll});
    var moveup_square_32 = new ScrollMagic.Scene({triggerElement: '.featured-grid', triggerHook: '0.8', duration: "150%"}).setTween(squares_32);
    controller.addScene(moveup_square_32);

    var squares_33 = TweenMax.fromTo('.featured-grid .grey-6', .5, {y: "300%", ease: scroll},{y: "-200%", ease: scroll});
    var moveup_square_33 = new ScrollMagic.Scene({triggerElement: '.featured-grid', triggerHook: '0.8', duration: "300%"}).setTween(squares_33);
    controller.addScene(moveup_square_33);

    var squares_4 = TweenMax.from('.featured-grid .image-5', 1, {y: "200%", ease: scroll});
    var squares_4_image = TweenMax.fromTo('.featured-grid .image-5 picture', 1, {y: "-40%", ease: scroll}, {y: "-10%", ease: scroll});
    var squares_4_image_leave = TweenMax.to('.featured-grid .image-5 picture', .5, {y: "-10%", ease: scroll});

    var squares_5 = TweenMax.fromTo('.featured-grid .image-6', 1, {y: "100%", ease: Linear.easeNone},{y: "-100%", ease: Linear.easeNone});
    var squares_5_image = TweenMax.fromTo('.featured-grid .image-6 picture', 2, {y:"-30%", ease: Linear.easeNone}, {y:"0%", ease: Linear.easeNone});
    var squares_5_image_leave = TweenMax.to('.featured-grid .image-6 picture', .5, {y: "0%", ease: scroll});

    var squares_6 = TweenMax.fromTo('.featured-grid .image-2', 1, {y: "200%", ease: Linear.easeNone}, {y: "-10%", ease: Linear.easeNone});
    var squares_6_image = TweenMax.fromTo('.featured-grid .image-2 picture', 1, {y:"-40%", ease: scroll}, {y:"-10%", ease: scroll});
    var squares_6_image_leave = TweenMax.to('.featured-grid .image-2 picture', .5, {y: "-10%", ease: scroll});

    var squares_7 = TweenMax.fromTo('.featured-grid .grey-7, .featured-grid .grey-8', 1, {y: "100%", ease: scroll},{y: "-100%", ease: scroll});

    var squares_8 = TweenMax.fromTo('.featured-grid .image-3', 1, {y: 150, ease: Linear.easeNone},{y: -150, ease: Linear.easeNone});
    var squares_8_image = TweenMax.fromTo('.featured-grid .image-3 picture', 1, {y: "-50%", ease: scroll}, {y: "10%", ease: scroll});
    var squares_8_image_leave = TweenMax.to('.featured-grid .image-3 picture', 1, {y: "10%", ease: scroll});

    var squares_9 = TweenMax.fromTo('.featured-grid .grey-9', 1, {y: "250%", ease: scroll}, {y: "-100%", ease: scroll});

    var squares_91 = TweenMax.fromTo('.featured-grid .grey-10', 1, {y: "400%", ease: scroll}, {y: "200%", ease: scroll});

    var moveup_square_91 = new ScrollMagic.Scene({triggerElement: '.featured--work-life', triggerHook: '0', duration: "100%"})
      .setTween( squares_91 )
      controller.addScene(moveup_square_91);

    var squares_10 = TweenMax.fromTo('.featured-grid .image-4', 1, {y: "100%", ease: Linear.easeNone},{y: "-100%", ease: Linear.easeNone});
    var squares_10_image = TweenMax.fromTo('.featured-grid .image-4 picture', 1, {y:"-40%", ease: Linear.easeNone},{y:"-10%", ease: Linear.easeNone});
    var squares_10_image_leave = TweenMax.to('.featured-grid .image-4 picture', 1, {y: "-10%", ease: scroll});

    var squares_11 = TweenMax.fromTo('.featured-grid .grey-11', 1, {y: "200%", ease: scroll},{y: "0%", ease: scroll});

    var moveup_square_0 = new ScrollMagic.Scene({triggerElement: '.featured-grid', triggerHook: '1', duration: "100%"})
      .setTween( squares_0 )
    
    
    var moveup_text_1 = new ScrollMagic.Scene({triggerElement: '.what-we-do-section', triggerHook: '0.7', duration: "100%"})
      .setTween( what_we_do )
    
    var moveup_text_content = new ScrollMagic.Scene({triggerElement: '.what-we-do-section', triggerHook: '0.7', duration: "90%"})
      .setTween( text_content )
    
    var moveup_squares_gray = new ScrollMagic.Scene({triggerElement: '.what-we-do-section', triggerHook: '0.7', duration: "110%"})
      .setTween( squares_gray )
    
    var moveup_squares_gray_2 = new ScrollMagic.Scene({triggerElement: '.what-we-do-section', triggerHook: '0.7', duration: "85%"})
      .setTween( squares_gray_2 )

    var moveup_square_1 = new ScrollMagic.Scene({triggerElement: '.featured-grid', triggerHook: '0.7', duration: "90%"})
      .setTween( squares_1 )

    var moveup_square_1_image = new ScrollMagic.Scene({triggerElement: '.featured-grid', triggerHook: '0.7', duration: "120%"})
      .setTween( squares_1_image )

    var moveup_square_1_image_leave = new ScrollMagic.Scene({triggerElement: '.featured-grid', triggerHook: '0.25', duration: "45%"})
      .setTween( squares_1_image_leave )

    var moveup_square_2 = new ScrollMagic.Scene({triggerElement: '.featured-grid', triggerHook: '0.5', duration: "80%"})
      .setTween( squares_2 )

    var moveup_square_3 = new ScrollMagic.Scene({triggerElement: '.featured-grid', triggerHook: '0.4', duration: "100%"})
      .setTween( squares_3 )

    var moveup_square_4 = new ScrollMagic.Scene({triggerElement: '.featured-grid', triggerHook: '0.4', duration: "100%"})
      .setTween( squares_4 )

    var moveup_square_4_image = new ScrollMagic.Scene({triggerElement: '.featured-grid', triggerHook: '0.4', duration: "150%"})
      .setTween( squares_4_image )

    var moveup_square_4_image_leave = new ScrollMagic.Scene({triggerElement: '.featured-grid', triggerHook: '0.05', duration: "85%"})
      .setTween( squares_4_image_leave )

    var moveup_square_5 = new ScrollMagic.Scene({triggerElement: '.featured-grid', triggerHook: '0.6', duration: "100%"})
      .setTween( squares_5 )

    var moveup_square_5_image = new ScrollMagic.Scene({triggerElement: '.featured-grid', triggerHook: '0.7', duration: "130%"})
      .setTween( squares_5_image )

    var moveup_square_5_image_leave = new ScrollMagic.Scene({triggerElement: '.featured-grid', triggerHook: '0.05', duration: "65%"})
      .setTween( squares_5_image_leave )

    var moveup_square_6 = new ScrollMagic.Scene({triggerElement: '.featured-grid', triggerHook: 'onLeave', duration: "120%"})
      .setTween( squares_6 )

    var moveup_square_6_image = new ScrollMagic.Scene({triggerElement: '.featured-grid', triggerHook: 'onLeave', duration: "150%"})
      .setTween( squares_6_image )

    var moveup_square_6_image_leave = new ScrollMagic.Scene({triggerElement: '.featured-grid', triggerHook: 'onLeave', offset: '400%', duration: "65%"})
      .setTween( squares_6_image_leave )

    var moveup_square_7 = new ScrollMagic.Scene({triggerElement: '.featured--work-life', triggerHook: '0.7', duration: "90%"})
      .setTween( squares_7 )

    var moveup_square_8 = new ScrollMagic.Scene({triggerElement: '.featured--work-life', triggerHook: '0', duration: "90%"})
      .setTween( squares_8 )

    var moveup_square_8_image = new ScrollMagic.Scene({triggerElement: '.featured--work-life', triggerHook: 'onLeave', duration: "120%"})
      .setTween( squares_8_image )

    var moveup_square_8_image_leave = new ScrollMagic.Scene({triggerElement: '.featured--work-life', triggerHook: 'onLeave', offset: '300%', duration: "65%"})
      .setTween( squares_8_image_leave )

    var moveup_square_9 = new ScrollMagic.Scene({triggerElement: '.featured--work-life', triggerHook: '0', duration: "80%"})
      .setTween( squares_9 )

    var moveup_square_10 = new ScrollMagic.Scene({triggerElement: '.featured--internships', triggerHook: '0.35', duration: "100%"})
      .setTween( squares_10 )

    var moveup_square_10_image = new ScrollMagic.Scene({triggerElement: '.featured--internships', triggerHook: '0.4', duration: "120%"})
      .setTween( squares_10_image )

    var moveup_square_10_image_leave = new ScrollMagic.Scene({triggerElement: '.featured--internships', triggerHook: 'onLeave', offset: '70%', duration: "40%"})
      .setTween( squares_10_image_leave )

    var moveup_square_11 = new ScrollMagic.Scene({triggerElement: '.grid-find-your-job', triggerHook: 'onEnter', duration: "80%"})
      .setTween( squares_11 )


    // Scenes 1
    var moveup_tween = TweenMax.staggerFrom('.featured--about > div', 1, {y: 200, ease: Linear.easeNone}, 0.4);
    var translate_imgEnter = TweenMax.fromTo('.featured--about .featured__picture', 3, {y: "-50%", ease: Linear.easeNone},{y: "10%", ease: Linear.easeNone});
    var translate_imgLeave = TweenMax.to('.featured--about .featured__picture', 3, {y: "10%", ease: scroll})

    var scene = new ScrollMagic.Scene({triggerElement: '.featured--about', triggerHook: '1', duration: "30%", offset:'-100%'})
      .setTween( moveup_tween )

    var scene1 = new ScrollMagic.Scene({triggerElement: '.featured--about', triggerHook: '1', duration: "175%"})
      .setTween( translate_imgEnter )

    var scene2 = new ScrollMagic.Scene({triggerElement: '.featured--about', triggerHook: '0.1', duration: "55%"})
      .setTween( translate_imgLeave )

    // Scenes 2
    var moveup_tween_2 = TweenMax.staggerFrom('.featured--work-life > div', 1, {y: 70, ease: Linear.easeNone}, 0.4);
    var translate_imgEnter_2 = TweenMax.fromTo('.featured--work-life .featured__picture', 3, {y: "-25%", ease: Linear.easeNone},{y: "0%", ease: Linear.easeNone})
    var translate_imgLeave_2 = TweenMax.to('.featured--work-life .featured__picture', 3, {y: "0%", ease: Linear.easeNone})

    var scene3 = new ScrollMagic.Scene({triggerElement: '.featured--work-life', triggerHook: '0.9', duration: "60%"})
      .setTween( moveup_tween_2 )

    var scene4 = new ScrollMagic.Scene({triggerElement: '.featured--work-life', triggerHook: '0.8', duration: "175%"})
      .setTween( translate_imgEnter_2 )

    var scene5 = new ScrollMagic.Scene({triggerElement: '.featured--work-life', triggerHook: '0.1', duration: "55%"})
      .setTween( translate_imgLeave_2 )

    // Scenes 3
    var moveup_tween_3 = TweenMax.staggerFrom('.featured--internships > div', 1, {y: 70, ease: Linear.easeNone}, 0.4);
    var translate_imgEnter_3 = TweenMax.fromTo('.featured--internships .featured__picture', 3, {y: "-25%", ease: Linear.easeNone},{y: "0%", ease: Linear.easeNone})
    var translate_imgLeave_3 = TweenMax.to('.featured--internships .featured__picture', 3, {y: "0%", ease: Linear.easeNone})

    var scene6 = new ScrollMagic.Scene({triggerElement: '.featured--work-life', triggerHook: '0.85', duration: "60%"})
      .setTween( moveup_tween_3 )

    var scene7 = new ScrollMagic.Scene({triggerElement: '.featured--internships', triggerHook: '0.8', duration: "175%"})
      .setTween( translate_imgEnter_3 )

    var scene8 = new ScrollMagic.Scene({triggerElement: '.featured--internships', triggerHook: '0.1', duration: "55%"})
      .setTween( translate_imgLeave_3 )


    // init controller
    controller.addScene([
      moveup_text_1,
      moveup_text_content,
      moveup_squares_gray,
      moveup_squares_gray_2,
      moveup_square_0,
      moveup_square_1,
      moveup_square_1_image,
      // moveup_square_1_image_leave,
      moveup_square_2,
      moveup_square_3,
      moveup_square_4,
      moveup_square_4_image,
      // moveup_square_4_image_leave,
      moveup_square_5,
      moveup_square_5_image,
      // moveup_square_5_image_leave,
      moveup_square_6,
      moveup_square_6_image,
      // moveup_square_6_image_leave,
      moveup_square_7,
      moveup_square_8,
      moveup_square_8_image,
      // moveup_square_8_image_leave,
      moveup_square_9,
      moveup_square_10,
      moveup_square_10_image,
      // moveup_square_10_image_leave,
      moveup_square_11,
      scene,
      scene1,
      // scene2,
      scene3,
      scene4,
      // scene5,
      scene6,
      scene7,
      // scene8
    ]);

    // var enableScroll = function() {
    //   $.getScript(Drupal.settings.theme + '/js/SmoothScroll.min.js', function() {
    //     window.SmoothScroll({
    //       stepSize: 100,
    //       animationTime: 800,
    //       touchpadSupport: true,
    //       // accelerationDelta: 5,
    //       // accelerationMax: 2
    //     });
    //   });
    // };
    // enableScroll();

    //tl_CoverExit
    function tl_CoverExit(){
      //Image1
      var image_cover_1_exit = TweenMax.to('.grid__item--cube_1', 1, {y: "-100%"});
      var moveup_image_cover_1 = new ScrollMagic.Scene({triggerElement: '.grid-cover', triggerHook: 'onLeave', duration: "80%"})
      .setTween( image_cover_1_exit )
      var image_inner_cover_1_exit = TweenMax.to('.grid__item--cube_1 picture', 1, {top: "75%"});
      var moveup_image_inner_cover_1 = new ScrollMagic.Scene({triggerElement: '.grid-cover', triggerHook: 'onLeave', duration: "80%"})
      .setTween( image_inner_cover_1_exit )
      //Image2
      var image_cover_2_exit = TweenMax.to('.grid__item--cube_3', 1, {y: "-250%"});
      var moveup_image_cover_2 = new ScrollMagic.Scene({triggerElement: '.grid-cover', triggerHook: 'onLeave', offset:'15%', duration: "65%"})
      .setTween( image_cover_2_exit )
      var image_inner_cover_2_exit = TweenMax.to('.grid__item--cube_3 picture', 1, {top: "100%"});
      var moveup_image_inner_cover_2 = new ScrollMagic.Scene({triggerElement: '.grid-cover', triggerHook: 'onLeave', offset:'15%', duration: "65%"})
      .setTween( image_inner_cover_2_exit )
        //Image3
      var image_cover_3_exit = TweenMax.to('.grid__item--cube_2', 1, {y: "-250%"});
      var moveup_image_cover_3 = new ScrollMagic.Scene({triggerElement: '.grid-cover', triggerHook: 'onLeave', offset:'35%', duration: "90%"})
      .setTween( image_cover_3_exit )
      var image_inner_cover_3_exit = TweenMax.to('.grid__item--cube_2 picture', 1, {top: "95%"});
      var moveup_image_inner_cover_3 = new ScrollMagic.Scene({triggerElement: '.grid-cover', triggerHook: 'onLeave', offset:'35%', duration: "90%"})
      .setTween( image_inner_cover_3_exit )
      //Image4
      var image_cover_4_exit = TweenMax.to('.grid__item--cube_4', 1, {y: "-200%"});
      var moveup_image_cover_4 = new ScrollMagic.Scene({triggerElement: '.grid-cover', triggerHook: 'onLeave', offset:'60%', duration: "100%"})
      .setTween( image_cover_4_exit )
      var image_inner_cover_4_exit = TweenMax.to('.grid__item--cube_4 picture', 1, {top: "100%"});
      var moveup_image_inner_cover_4 = new ScrollMagic.Scene({triggerElement: '.grid-cover', triggerHook: 'onLeave', offset:'60%', duration: "100%"})
      .setTween( image_inner_cover_4_exit )

      //Grey1
      var grey_cover_1_exit = TweenMax.to('.grid-cover .grey-1', 1, {y: "-300%"});
      var moveup_grey_cover_1 = new ScrollMagic.Scene({triggerElement: '.grid-cover', triggerHook: '0', duration: "80%"})
      .setTween( grey_cover_1_exit )
      //Grey2
      var grey_cover_2_exit = TweenMax.to('.grid-cover__item-cover--grey.grey-2', 1, {y: "-100%"});
      var moveup_grey_cover_2 = new ScrollMagic.Scene({triggerElement: '.grid-cover', triggerHook: '0', duration: "60%"})
      .setTween( grey_cover_2_exit )

      var distance = height * -0.5;
      var duration = height;

      //Text1
      var text_exit = TweenMax.to('.grid-cover__item-cover__pretitle', 1, {y: distance, delay: 0.0625});
      var text_exit_scene = new ScrollMagic.Scene({triggerElement: '.grid-cover', triggerHook: '0.05', duration: duration})
      .setTween( text_exit )
      //Text2
      var text_exit_1 = TweenMax.to('.grid-cover .main-title', 1, {y: distance, delay: 0.125});
      var text_exit_scene_1 = new ScrollMagic.Scene({triggerElement: '.grid-cover', triggerHook: '0.05', duration: duration})
      .setTween( text_exit_1 )
      //Text3
      var text_exit_2 = TweenMax.to('.grid-cover__item-cover__video', 1, {y: distance, delay: 0.25});
      var text_exit_scene_2 = new ScrollMagic.Scene({triggerElement: '.grid-cover', triggerHook: '0.05', duration: duration})
      .setTween( text_exit_2 )
      //Text4
      var text_exit_3 = TweenMax.to('.grid-cover__item-cover__line', 1, {y: distance, delay: 0.2});
      var text_exit_scene_3 = new ScrollMagic.Scene({triggerElement: '.grid-cover', triggerHook: '0.05', duration: duration})
      .setTween( text_exit_3 )
      //Text5
      var text_exit_4 = TweenMax.to('.grid-cover__item-cover__text-content', 1, {y: distance, delay: 0.33});
      var text_exit_scene_4 = new ScrollMagic.Scene({triggerElement: '.grid-cover', triggerHook: '0.05', duration: duration})
      .setTween( text_exit_4 )

      controller.addScene([
        text_exit_scene,
        text_exit_scene_1,
        text_exit_scene_2,
        text_exit_scene_3,
        text_exit_scene_4,
        moveup_image_cover_1, moveup_image_inner_cover_1, moveup_grey_cover_1, moveup_grey_cover_2, moveup_image_cover_2, moveup_image_inner_cover_2, moveup_image_cover_3, moveup_image_inner_cover_3, moveup_image_cover_4, moveup_image_inner_cover_4
      ])
    }
  })
}