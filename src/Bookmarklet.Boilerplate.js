/**
 * This is a Bookmarklet Boilerplate based on the Singleton Pattern.
 * 
 * @author Junaid Qadir Baloch (JeyKeu) <shekhanzai.baloch@gmail.com>
 */
var MyApp = (function() {
    "use strict";
    /*
     * baseUrl - URL of the hosted app and resources that the bookmarklet loads
     */
    var baseUrl = 'http://';
    /**
     * This is the entery-point of the bookmarklet's main logic
     * 
     */
    function main() {
    /*Your App logic goes here*/
    }

    /**
     * getResource - Loads multiple Script and CSS resources from the specified URL.
     * a call back is called when all the resources are loaded.
     * @param string url, a string or a coma-separated list of urls
     * @param string callback
     * @param string type
     * This function is a modified version of Paul Irish's getScript() function 
     * http://pastie.org/462639
     */

    function getResource(url, callback, type) {
        var head = document.getElementsByTagName("head")[0],
                done = false,
                elem,
                splitUrl = url.split(',');
        type = type || 'script';

        if (splitUrl.length > 0) {
            for (var i = 0; i < splitUrl.length; i++) {
                switch (type) {
                    case 'script':
                        {
                            elem = document.createElement("script");
                            elem.src = splitUrl[i];
                            break;
                        }
                    case 'css':
                        {
                            elem = document.createElement("link");
                            elem.type = "text/css";
                            elem.rel = "stylesheet";
                            elem.href = splitUrl[i];
                            break;
                        }
                }

                /* Attach handlers for all browsers*/
                elem.onload = elem.onreadystatechange = function() {
                    if (!done && (!this.readyState ||
                            this.readyState === "loaded" || this.readyState === "complete")) {
                        done = true;
                        callback();
                    }
                };
                head.appendChild(elem);
            }
        } else {
            switch (type) {
                case 'script':
                    {
                        elem = document.createElement("script");
                        elem.src = url;
                        break;
                    }
                case 'css':
                    {
                        elem = document.createElement("link");
                        elem.type = "text/css";
                        elem.rel = "stylesheet";
                        elem.href = url;
                        break;
                    }
            }
            /* Attach handlers for all browsers
             * 
             * NOTE: css doesn't support ready states, but it worked for me.
             * please do provide your feedback if you got a proper way to load css
             */
            elem.onload = elem.onreadystatechange = function() {
                if (!done && (!this.readyState ||
                        this.readyState === "loaded" || this.readyState === "complete")) {
                    done = true;
                    callback();
                }
            };
            head.appendChild(elem);
        }
    }

    /**
     * Define your private functions herer if any intende
     */
    function privateFunction() {
        alert("Hey! Well, I'm a private function.");
    }

    /**
     * Load Resource from your server if any
     */
    getResource('http://' + baseUrl + '/any/js/I/want/to/load.js', function() {
        /**
         * The Boookmarklet is ready at this point
         * Think of this place as the entry ponit. 
         * To make things simple, place all your app logic inside the main() 
         * function.
         */
        main();
        console.log('YAY! MyApp has been loaded');
        main();
    }, 'script');
    return {
        /**
         * Define any public functions here
         */
        publicFunction: function() {
            alert("I'm Public.Let me call the private function.");
        }
    };
})();
