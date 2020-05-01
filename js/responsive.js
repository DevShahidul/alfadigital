window.mediaQuery = function(query) {
  var breakpoints = {
    mobile: '(min-width: 320px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1024px)',
    retina:
      'only screen and (-webkit-min-device-pixel-ratio:2), only screen and (min--moz-device-pixel-ratio:2), only screen and (min-device-pixel-ratio:2), only screen and (min-resolution:2dppx), only screen and (min-resolution:192dpi)',
  };
  switch (query) {
    case 'mobile':
      return window.matchMedia(breakpoints.mobile).matches && !window.matchMedia(breakpoints.tablet).matches;
    case 'tablet':
      return window.matchMedia(breakpoints.tablet).matches && !window.matchMedia(breakpoints.desktop).matches;
    case 'desktop':
      return window.matchMedia(breakpoints.desktop).matches;
    case 'retina':
      return window.matchMedia(breakpoints.retina).matches;
    default:
      return false;
  }
};

window.getCurrentBreakpoint = function() {
  var current = window.mediaQuery('mobile') ? 'mobile' : null;
  current = window.mediaQuery('tablet') ? 'tablet' : current;
  current = window.mediaQuery('desktop') ? 'desktop' : current;
  return current;
};