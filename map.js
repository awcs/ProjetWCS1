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
	
	var map = new google.maps.Map(document.getElementById("map-container"),
		var_mapoptions);
		
	map.setOptions({draggable: false, zoomControl: false, scrollwheel: false, disableDoubleClickZoom: true});
	
	var marker_arch = new google.maps.Marker({
		position: arch,
		map: map,
		title: 'Triumph Arch',
		
		
	});

   
    var marker_louvre = new google.maps.Marker({
        position: louvre,
        map: map,
        title: 'Louvre'
    }); 

    var marker_sacre = new google.maps.Marker({
        position: sacre,
        map: map,
        title: 'sacre'
    });  

    var marker_dame = new google.maps.Marker({
        position: dame,
        map: map,
        title: 'dame'
    });  

    var marker_moulin = new google.maps.Marker({
        position: moulin,
        map: map,
        title: 'moulin'
    });  

    var marker_eiffel = new google.maps.Marker({
        position: eiffel,
        map: map,
        title: 'eiffel'
	});  
	
	marker_arch.addListener('click', function() {
		document.getElementById("switch").innerHTML="<img class = \"col-md-12 mt-5\" src='https://image.ibb.co/eQZjS9/arc_de_triomphe_1283422_1920.jpg'>";

	  });

	marker_louvre.addListener('click', function() {
		document.getElementById("switch").innerHTML="<img class = \"col-md-12 mt-5\" src='https://image.ibb.co/ig0cEp/louvre_102840_1280.jpg'>";

	  });

	marker_sacre.addListener('click', function() {
		document.getElementById("switch").innerHTML="<img class = \"col-md-12 mt-5\" src='https://image.ibb.co/g4zW4p/sacre_couer_356123_1280.jpg'>";

	  });

	marker_dame.addListener('click', function() {
		document.getElementById("switch").innerHTML="<img class = \"col-md-12 mt-5\" src='https://image.ibb.co/fhU179/cathedral_3599931_1920.jpg'>";

	  });

	marker_moulin.addListener('click', function() {
		document.getElementById("switch").innerHTML="<img class = \"col-md-12 mt-5\" src='https://image.ibb.co/dUw3LU/moulin_rouge_1050325_1920.jpg'>";

	  });

	marker_eiffel .addListener('click', function() {
		document.getElementById("switch").innerHTML="<img class = \"col-md-12 mt-5\" src='https://image.ibb.co/bxsaEp/eiffel_tower_1280022_1280.jpg'>";

	  });
  
  

  
  


 
         
        }
    

     


	

    
    


// Initialize maps
google.maps.event.addDomListener(window, 'load', regular_map);

