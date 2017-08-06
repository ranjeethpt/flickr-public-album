(function(){
    'use strict';

    function homeController(flickrAlbumService){
        var ctrl = this;
        ctrl.name = 'Ranjeeth';
        ctrl.images = {};
        ctrl.getPublicAlbum = function () {
            flickrAlbumService.getPublicAlbum('hate').then(function (data) {
                console.log(data);
                ctrl.images = data.data;
            }, function () {
                ctrl.error = true;
            });
        };
        ctrl.getPublicAlbum();
    }

    angular.module('flickrAlbum').controller('HomeController',['flickrAlbumService',homeController]);

})();