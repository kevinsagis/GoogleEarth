define(['dojo/_base/declare',
  'jimu/BaseWidget',
      'esri/map'

],
function(declare, BaseWidget, map) {
    var clazz = declare([BaseWidget], {
        templateString: '<div> <br /> <br />1. Click the "Open in Google Earth" button to activate the tool. <br /> <br />' + '<br /> <input type="button" style="background-color: rgb(125,125,125)!important; background: url(./widgets/Earth/images/icon2.png) no-repeat;"  class="jimu-btn" id="btnPict" value=" &nbsp;&nbsp;&nbsp; Select" data-dojo-attach-event="click:_EarthClick"> <br /> <br /> <br />' + '2. Click on the map, and Google Earth will open for this location in a new window. To view 3D imagery where available, click and hold down on the middle mouse button or wheel and then while holding it down, move the mouse to rotate the view.<br /><br /> <img src="./widgets/Earth/images/mouse.png" width="60"><br /><br/>Note: Google Earth currently requires the <a href="http://www.chrome.com" target="_blank">Chrome browser.</a> <br /> <br /> <br /> </div> ',



      

        _EarthClick: function () {
            EarthConfigURL = this.config.configText;
            map = this.map;

            var handlerStreetView;
            //handlers 
            if (handlerStreetView) {
                handlerStreetView.remove();
                handlerStreetView= null;
            } else {



                map.setMapCursor("url(./widgets/Earth/images/streetview.cur),auto");
                handlerStreetView = map.on("click", function (evt) {

                    pt = esri.geometry.webMercatorToGeographic(evt.mapPoint);
                    url = "https://earth.google.com/web/@" + pt.y + "," + pt.x + EarthConfigURL;
            

                    window.open(url);

                    ///// remove after one click
                    map.setMapCursor("default");
                    ////remove after one click
                    

                    handlerStreetView.remove();
                });
            };  /// end else for handlerStreetView 


            /////  end of street view widget

            /////
        }
});

clazz.hasStyle = false;
clazz.hasUIFile = false;
clazz.hasLocale = false;
clazz.hasConfig = false;
return clazz;
});

