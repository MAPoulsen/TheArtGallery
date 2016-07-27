;(function (){
angular.module('TheArtGallery')
    .service('MixedService', function(){
    var mixedMedias = [
        {
            title: "The Great Performer",
            description: "Charcoal on Paper",
            height: 72,
            width: 50,
            depth: 2,
            weight: '',
            pedigree:{
                nameOfShow: '',
                juror: '',
                date: '',
                award: '',
            },
            currentLocation: '',
            collection: '',
            forSale: false,
            price: 1200.00,
            img: 'img/mixed/Diamond Kitty.jpg',
        },
    ]
    this.getMixedMedias = function(){
        return mixedMedias;
    }
    this.getMixedMedia = function(title){
        for(var i = 0; i < mixedMedias.length; i++){
            var currentMixed = mixedMedias[i];
            if(currentMixedMedia.title === title){
                console.log(currentMixedMedia);
                return currentMixedMedia;
            }
            console.log('No info is available')
        }
    }
})
}())