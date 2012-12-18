Bookmarklet-Boilerplate
=======================
Features
--------
- simple to implement
- conatined
- follows Singleton pattern
- can be used with any framework like jQuery
- load multiple external scripts or stylesheets with one call.


Usage/Coniguration
------------------
This bookmarklet boilerplate is not just another boilerplate, its contained and it is hostead, instead of just pouring all the JavaScript code into the bookmark url field.

Following steps show how to start with the boilerplate:

1- [Download Bookmarklet.Boilerplate.js](https://github.com/JeyKeu/Bookmarklet-Boilerplate/blob/master/src/Bookmarklet.Boilerplate.js) rename it to whatever you like.

2- Rename `MyApp` to yourliking or leave it as is.

3- Specify `baseUrl`

4- Go to the `main()` function.
This is the place where you can do your stuff. 

5- Finally, add this anchor tag on your website and ask people to bookmark it.

<a href="javascript:(function(){var e=document.createElement("script");e.type="text/javascript";e.async=true;e.src="http://url/of/js/MyApp.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})()">MyApp Bookmarklet</a>

where, `http://url/of/js/MyApp.js` is the url of the bookmarklet we got on step 1.

Demo
----

Here's a live [example](http://projects.junaidbaloch.com/songspk_player/)

