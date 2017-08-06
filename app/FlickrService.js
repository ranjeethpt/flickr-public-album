(function () {
    'use strict';

    angular.module('flickrAlbum').service('flickrAlbumService', ['$http', function ($http) {
        var baseEndpoint = 'https://api.flickr.com/services';
        var service = this;

        service.getPublicAlbum = function (tags) {
            var jsonCallback = "jsoncallback=JSON_CALLBACK&format=json";
            return $http.jsonp(baseEndpoint + '/feeds/photos_public.gne?'+jsonCallback+'&tags='+tags);
        };

    }]);
})();