// Regular map

function regular_map() {  
    var var_location = new google.maps.LatLng(48.866667, 2.333333);

    var var_mapoptions = {
        center: var_location,
        zoom: 13

    };

    var var_map = new google.maps.Map(document.getElementById("map-container"),
        var_mapoptions);

    var_map.setOptions({draggable: false, zoomControl: false, scrollwheel: false, disableDoubleClickZoom: true}); 

    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title: "Paris" 
              
    });
}

// Initialize maps
google.maps.event.addDomListener(window, 'load', regular_map);

