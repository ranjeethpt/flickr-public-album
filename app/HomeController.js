(function () {
    'use strict';

    function homeController(flickrAlbumService) {
        var ctrl = this;
        ctrl.name = 'Ranjeeth';
        ctrl.images = {};
        ctrl.tagInput = '';

        ctrl.getPublicAlbum = function () {
            flickrAlbumService.getPublicAlbum(ctrl.tagInput).then(function (data) {
                ctrl.images = data.data;
            }, function () {
                ctrl.error = true;
            });
        };
    }

    angular.module('flickrAlbum').controller('HomeController', ['flickrAlbumService', homeController]);

})();