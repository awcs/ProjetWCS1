// Regular map

function regular_map() {  
    var var_location = new google.maps.LatLng(48.866667, 2.333333);
    var arch = new google.maps.LatLng(48.8738, 2.295);
    var louvre = new google.maps.LatLng(48.864824, 2.334595);
    var eiffel = new google.maps.LatLng(48.858053, 2.294289);
    var moulin = new google.maps.LatLng(48.884129, 	2.332400);
    var sacre = new google.maps.LatLng(48.8925, 2.3444);
    var dame = new google.maps.LatLng(48.853, 2.35);
    

    var var_mapoptions = {
        center: var_location,
        zoom: 13

    };
 
    function setMarkers(map) {
        // Adds markers to the map.
      
        // Marker sizes are expressed as a Size of X,Y where the origin of the image
        // (0,0) is located in the top left of the image.
      
        // Origins, anchor positions and coordinates of the marker increase in the X
        // direction to the right and in the Y direction down.
        var image = {
          url: 'https://image.ibb.co/eQZjS9/arc_de_triomphe_1283422_1920.jpg',
          // This marker is 20 pixels wide by 32 pixels high.
          size: new google.maps.Size(30, 40)
          // The origin for this image is (0, 0).
         // origin: new google.maps.Point(0, 0),
          // The anchor for this image is the base of the flagpole at (0, 32).
         // anchor: new google.maps.Point(0, 32)
        };
        // Shapes define the clickable region of the icon. The type defines an HTML
        // <area> element 'poly' which traces out a polygon as a series of X,Y points.
        // The final coordinate closes the poly by connecting to the first coordinate.
         //var shape = {
        //coords: [1, 1, 1, 20, 18, 20, 18, 1],
        //type: 'poly'
        //};
        /*
        for (var i = 0; i < beaches.length; i++) {
          var beach = beaches[i];
          var marker = new google.maps.Marker({
            position: {lat: beach[1], lng: beach[2]},
            map: map,
            icon: image,
            shape: shape,
            title: beach[0],
            zIndex: beach[3]
          });*/

          var marker = new google.maps.Marker({
            position: arch,
            map: var_map,
            title: 'Triumph Arch',
            icon : image,
            zIndex : 2
            
        });
    
        }

    
    var var_map = new google.maps.Map(document.getElementById("map-container"),
        var_mapoptions);

    setMarkers(var_map);    

    var_map.setOptions({draggable: false, zoomControl: false, scrollwheel: false, disableDoubleClickZoom: true}); 


   
    var marker = new google.maps.Marker({
        position: louvre,
        map: var_map,
        title: 'Louvre'
    }); 

    var marker = new google.maps.Marker({
        position: sacre,
        map: var_map,
        title: 'sacre'
    });  

    var marker = new google.maps.Marker({
        position: dame,
        map: var_map,
        title: 'dame'
    });  

    var marker = new google.maps.Marker({
        position: moulin,
        map: var_map,
        title: 'moulin'
    });  

    var marker = new google.maps.Marker({
        position: eiffel,
        map: var_map,
        title: 'eiffel'
    });  

    marker.setMap(var_map);
    
}

// Initialize maps
google.maps.event.addDomListener(window, 'load', regular_map);

