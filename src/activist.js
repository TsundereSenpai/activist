/*global navigator, document, console */
(function () {
    'use strict';
    var activist = {};
    
    activist.connect = function () {
        var scripts = document.getElementsByTagName('script'),
            script = scripts[scripts.length - 1],
            scriptSrc = script.src;
        if (navigator && navigator.serviceWorker) {
            // Service Worker Entry
            navigator.serviceWorker.register(scriptSrc, {
                scope: "/*"
            }).then(function (worker) {
                console.log('got worker: ' + worker);
            }, function (err) {
                console.error(err);
            });
        } else {
            // appCache Entry
            console.warn(navigator.onLine);
        }
    };

    activist.serve = function () {
        console.warn("added as service worker");
    };

    if (typeof document !== 'undefined') {
        activist.connect();
    } else {
        activist.serve();
    }
}());