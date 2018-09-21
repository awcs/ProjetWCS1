

function regular_map() {  
    var var_location = new google.maps.LatLng(48.866667, 2.333333);
    var arch = new google.maps.LatLng(48.8738, 2.295);
    var louvre = new google.maps.LatLng(48.864824, 2.334595);
    var eiffel = new google.maps.LatLng(48.858053, 2.294289);
    var moulin = new google.maps.LatLng(48.884129, 	2.332400);
    var sacre = new google.maps.LatLng(48.886452,2.343121);
    var dame = new google.maps.LatLng(48.853, 2.35);
    

    var var_mapoptions = {
        center: var_location,
        zoom: 13,

	};
	
	var map = new google.maps.Map(document.getElementById("map-container"),
		var_mapoptions);
		
	map.setOptions({streetViewControl: false, styles: mapJson ,draggable: true, zoomControl: false, scrollwheel: false, disableDoubleClickZoom: true, fullscreenControl: false, mapTypeControl: false });
	
	  var marker_arch = new google.maps.Marker({
      position: arch,
      map: map,
      title: 'Arc de Triomphe',
      icon : 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png',
     
      
		
  	});

   
    var marker_louvre = new google.maps.Marker({
        position: louvre,
        map: map,
        title: 'Musée du Louvre',
        icon : 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
    }); 

    var marker_sacre = new google.maps.Marker({
        position: sacre,
        map: map,
        title: 'Sacré Coeur',
        icon : 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
    });  

    var marker_dame = new google.maps.Marker({
        position: dame,
        map: map,
        title: 'Notre Dame',
        icon : 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
    });  

    var marker_moulin = new google.maps.Marker({
        position: moulin,
        map: map,
        title: 'Moulin Rouge',
        icon : 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
    });  

    var marker_eiffel = new google.maps.Marker({
        position: eiffel,
        map: map,
        title: 'Tour Eiffel',
        icon : 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
        
    });  

    
	marker_arch.addListener('click', function() {
        document.getElementById("switch").innerHTML="<img class = \"col-md-12 mt-5 photo\" src='https://image.ibb.co/eQZjS9/arc_de_triomphe_1283422_1920.jpg'>";
        myFunction("873px","650px");

	  });

	marker_louvre.addListener('click', function() {
        document.getElementById("switch").innerHTML="<img class = \"col-md-12 mt-5 photo\" src='https://image.ibb.co/ig0cEp/louvre_102840_1280.jpg'>";
        myFunction("873px","650px");

	  });

	marker_sacre.addListener('click', function() {
        document.getElementById("switch").innerHTML="<img class = \"col-md-12 mt-5 photo\" src='https://image.ibb.co/g4zW4p/sacre_couer_356123_1280.jpg'>";
        myFunction("873px","650px");
	  });

	marker_dame.addListener('click', function() {
        document.getElementById("switch").innerHTML="<img class = \"col-md-12 mt-5 photo\" src='https://image.ibb.co/fhU179/cathedral_3599931_1920.jpg'>";
        myFunction("873px","650px");

	  });

	marker_moulin.addListener('click', function() {
        document.getElementById("switch").innerHTML="<img class = \"col-md-12 mt-5 photo\" src='https://image.ibb.co/dUw3LU/moulin_rouge_1050325_1920.jpg'>";
        myFunction("873px","650px");
	  });

	marker_eiffel .addListener('click', function() {
        document.getElementById("switch").innerHTML="<img class = \"col-md-12 mt-5 photo\" src='https://image.ibb.co/bxsaEp/eiffel_tower_1280022_1280.jpg'>";
        myFunction("873px","650px");

      });
      
}
    let mapJson = [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#242f3e"
            }
          ]
        },
        {
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#746855"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#242f3e"
            }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d59563"
            }
          ]
        },
        {
          "featureType": "administrative.neighborhood",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d59563"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#263c3f"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#6b9a76"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#38414e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#212a37"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9ca5b3"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#746855"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#1f2835"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#f3d19c"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#2f3948"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d59563"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#17263c"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#515c6d"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#17263c"
            }
          ]
        }
      ]

// Initialize maps
google.maps.event.addDomListener(window, 'load', regular_map);

function myFunction(heightCardMax, heightCardMin) {
  if(window.innerWidth >= 768) {
  document.getElementById("cardDescription").style.height = heightCardMax;
  } else {
  document.getElementById("cardDescription").style.height = heightCardMin;
  }
  
  }
  
  
  
  