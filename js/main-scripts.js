'use strict';
(function($, window, document) {

  var breakpoint = window.getCurrentBreakpoint();
  var header = 0;
  var lastScrollTop = 0;
  var filters = {
    location: [],
    category: []
  };

  var scrollbar;
  var offset = 0;
  var scenes = [];
  var fixedElements = [
    '.header-wrapper.is-fixed',
  ];
  var lastScrollTop = 0;
  var headerScroll = function(st) {
    if (st > lastScrollTop && st >= header) {
      $('.js-header').addClass('is-up');
      setTimeout(function() {
        $('.js-header, .js-header-wrapper').addClass('is-fixed');
      }, 200);
    } else if (st === 0) {
      $('.js-header, .js-header-wrapper').removeClass('is-up is-fixed');
      setTimeout(function() {
        $('.js-header').removeClass('is-fixed');
      }, 200);
    } else {
      $('.js-header').removeClass('is-up');
    }
    lastScrollTop = st;
  }
  var positionFix = function() {
    fixedElements.forEach(function(selector) {
      var $element = $(selector);
      if ($element.css('position') === 'fixed') {
        $element.css('transform', 'translate3d(0, ' + offset + 'px' + ',0)');
      } else {
        $element.css('transform', 'translate3d(0,0,0)');
      }
    })
  };
    
  var enableScroll = function() {
    window.Scrollbar.use(window.OverscrollPlugin);
    scrollbar = window.Scrollbar.init(document.querySelector('#page'), {
      continuousScrolling: false,
      plugins: {
        overscroll : {
          effect: 'bounce',
          damping: 0.1,
          maxOverscroll: 220
        }
      }
    });

    scrollbar.addListener(function(params) {

      offset = params.offset.y;
      window.controller.scenes.forEach(function(scene) {
        scene.refresh();
      })
      positionFix(offset);
      if (!window.mediaQuery('desktop')) {
        headerScroll(offset);
      }
      // window.scrollHandler(offset);
    });
  };
  // init controller
  var Controller = function() {
    this.scenes = [];
    this.scrollController = new ScrollMagic.Controller({
      refreshInterval: 0
    });
    this.addScene = function(scene) {
      if (typeof scene === 'object') {
        this.scenes = this.scenes.concat(scene);
      } else {
        this.scenes.push(scene);
      }
      this.scrollController.addScene(scene);
    }
  }
  window.controller = new Controller();

  var applyFilters = function() {
    $('.js-opening').addClass('is-hidden');
    $('.js-no-results').removeClass('is-visible');

    filters.location.forEach(function(location) {
      if (filters.category.length) {
        filters.category.forEach(function(category) {
          $('.js-opening[data-location="' + location + '"][data-category="' + category + '"]').removeClass('is-hidden');
        });
      } else {
        $('.js-opening[data-location="' + location + '"]').removeClass('is-hidden');
      }
    });

    filters.category.forEach(function(category) {
      if (filters.location.length) {
        filters.location.forEach(function(location) {
          $('.js-opening[data-location="' + location + '"][data-category="' + category + '"]').removeClass('is-hidden');
        });
      } else {
        $('.js-opening[data-category="' + category + '"]').removeClass('is-hidden');
      }
    });

    if (!filters.location.length && !filters.category.length) {
      $('.js-opening').removeClass('is-hidden');
    }
    if (!$('.js-opening:visible').length) {
      $('.js-no-results').addClass('is-visible');
    }
  };

  // TODO: trigger on content load
  var showLoader = function() {
    //$('.loader__gif').show();
    setTimeout(function() {
      $('.js-loader').addClass('loading');
    }, 500);
    /*setTimeout(function() {
      $('.loader__gif').hide();
    }, 800);*/
    setTimeout(function() {
      $('.js-loader')
        .removeClass('loading')
        .addClass('loaded loading--exit');
    }, 1500);
  };
  var exitLoader = function() {
    $('.js-loader').removeClass('loaded loading--exit');
    /*setTimeout(function() {
      $('.loader__gif').show();
    }, 500);*/
  };
  

  var scrollTo = function(scroll) {
    scrollbar.scrollTo(0, scroll + offset, 500);
    // $('html,body').stop().animate(
    //   {
    //     scrollTop: offset,
    //   },
    //   500
    // );
  }
  
  
//  var goNext = function(scroll) {
//      $('.go-next').click(function(e){  
//          var targetTop = $(this).parents('section').next().offset().top;
//          e.preventDefault;
//          TweenMax.to('.scroll-content', 1, {
//              y: -targetTop, 
//          });
//      })
//  }
  
  

  $(document).ready(function() {
    showLoader();
    enableScroll();
    //goNext();
  });

  
})(jQuery, this, this.document);