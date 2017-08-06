(function () {
    'use strict';

    var flickrAlbum = angular.module('flickrAlbum', []);

    flickrAlbum.run(['$window', function ($window) {
        $window.onload = function () {
            /* activate jquery isotope */
            $('#gallery').isotope({
                itemSelector: '.item',
                layoutMode: 'fitRows',
                isFitWidth: true
            });
        };
    }]);

})();