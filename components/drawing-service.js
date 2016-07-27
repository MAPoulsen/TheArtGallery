;(function (){
angular.module('TheArtGallery')
    .service('DrawingService', function(){
    var drawings = [
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
            img: 'img/drawings/TheGreatPerformer.jpg',
        },
    ]
    this.getDrawings = function(){
        return drawings;
    }
    this.getDrawing = function(title){
        for(var i = 0; i < drawings.length; i++){
            var currentDrawing = drawings[i];
            if(currentDrawing.title === title){
                console.log(currentDrawing);
                return currentDrawing;
            }
            console.log('No info is available')
        }
    }
})
}())
    
    
    
