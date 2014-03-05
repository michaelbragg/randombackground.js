/*
 *  randomBackground.js - v0.1.1
 *  Attach a random background image to an element from a user supplied list on page load.
 *  https://github.com/michaelbragg/randombackground.js/
 *
 *  Made by Michael Bragg
 *  Under MIT License
 */

var randomBackground = randomBackground || {};

(function( $ ){

  //  Default config settings

  randomBackground.config = {
      parent: '.hero'
     ,path: 'path/to/image/'
     ,images : ['image01.jpg', 'image02.jpg', 'image03.jpg']
    };

  randomBackground.init = function(config) {

    // provide for custom configuration via init()
    if (config && typeof(config) === 'object') {
      $.extend(randomBackground.config, config);
    }

    var _images = randomBackground.config.images,
        _randomNumber = Math.floor(Math.random()*(_images.length));

    $(randomBackground.config.parent).css('background-image', 'url('+randomBackground.config.path+_images[_randomNumber]+')');

    // If you need to check the image being outputted.
    // Remove the comments from the line below:
    //console.log(_images[_randomNumber]);

  };

/**
 *  Code to be placed on web page to initialise the plugin.
 *
 *  To extend the default config settings
 *  pass a object as an argument for the init function
 *  eg. randomBackground.init({ images: 'image01.jpg', 'image02.jpg' });
 */

  /*  Initialise and extend on page load

  $(document).ready(function() {

    randomBackground.init( { parent: '.hero', path: 'demo/img/', images: ['background_01.png', 'background_02.jpg', 'background_03.jpg'] });

  }); */

})( jQuery );
