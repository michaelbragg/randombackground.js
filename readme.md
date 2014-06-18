# RandomBackground.js

Attach a random background image to an element from a user supplied list on page load.

## Usage

1, Include jQuery:

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.0/jquery.min.js"></script>
```

2, Include plugin's code:
```html
<script src="dist/jquery.randombackground.min.js"></script>
```

3, Call the plugin
To extend the default config settings pass a object as an argument for the init function eg, randomBackground.init({ images: 'image01.jpg', 'image02.jpg' });

```js
$(document).ready(function() {

  // To extend the default config settings
  // pass a object as an argument for the init function
  // eg. randomBackground.init({ images: 'image01.jpg', 'image02.jpg' });

  randomBackground.init( { parent: '.hero', background: '.hero', path: 'demo/img/', images: ['background_01.png', 'background_02.jpg', 'background_03.jpg'], bgcolor: ['#000', '#ccc', '#fafafa'] });

});
```

## Licence

Copyright © 2014 [Michael Bragg](http://michaelbragg.net/) | Code licensed under the [MIT License](http://opensource.org/licenses/MIT/).
