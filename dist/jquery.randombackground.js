/*
 *  randomBackground.js - v0.2.0
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
     ,background: '.hero'
     ,path: 'http://placehold.it/'
     ,images : ['300x250.png', '300x250.png', '300x250.png']
     ,bgcolor: ['#000', '#ccc', '#fafafa']
    };

  randomBackground.init = function(config) {

    // provide for custom configuration via init()
    if (config && typeof(config) === 'object') {
      $.extend(randomBackground.config, config);
    }

    var _images = randomBackground.config.images,
        _bgcolor = randomBackground.config.bgcolor,
        _randomNumber = Math.floor(Math.random()*(_images.length)),
        _parent = $(randomBackground.config.parent),
        _background = $(randomBackground.config.background);

    _parent.css('background-image', 'url('+randomBackground.config.path+_images[_randomNumber]+')');
    _background.css('background-color', _bgcolor[_randomNumber]);

    // If you need to check the image being outputted.
    // Remove the comments from the line below:
    // console.log(_images[_randomNumber],randomBackground.config.path+_images[_randomNumber],_bgcolor[_randomNumber]);

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

    randomBackground.init( { parent: '.hero', background: '.hero', path: 'demo/img/', images: ['background_01.png', 'background_02.jpg', 'background_03.jpg'], bgcolor: ['#000', '#ccc', '#fafafa'] });

  }); */

})( jQuery );
