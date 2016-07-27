(function(){
    angular.module('TheArtGallery')
    .component('drawingComponent',{
        templateUrl: 'components/drawing-component.html',
        controller: DrawingController,

    })
  DrawingController.$inject = ['DrawingService']

  function DrawingController(DrawingService){
      var dc = this;
      dc.myDrawings = DrawingService.getDrawingList();
      dc.removeFromList = function(drawing){
          DrawingService.removeDrawing(drawing)
      }

  }


}())