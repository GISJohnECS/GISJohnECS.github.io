var layers=[];
layers[0] = new google.maps.FusionTablesLayer({ //Load Lighting Layer
        query: {
          select: 'geometry', //select from the location column of table
          from:'1oT_F-XmfLfoYzPXd7GkZyiuGgFFhYRW5zWxn1sg_' //table id
        },
        
   styleId: 2, //style id matches that was specified in fusion table features
   templateId: 2, //teplate id matches that of fusion table
      });
	  
layers[1] = new google.maps.FusionTablesLayer({ //Load Cooking Layer
        query: {
          select: 'geometry', //select from the location column of table
          from:'1JWIJq0QVYhWLiONzr80XJZ84OLFVGT72XwCIvSlQ' //table id
        },
        
   styleId: 2, //style id matches that was specified in fusion table features
   templateId: 2, //teplate id matches that of fusion table
      });

layers[2] = new google.maps.FusionTablesLayer({ //Load Heating Layer
        query: {
          select: 'geometry', //select from the location column of table
          from:'1hB9Z-iln7LTVMTjUvtx9wn0W07TnfFWJfTduHAzR' //table id
        },
        
   styleId: 2, //style id matches that was specified in fusion table features
   templateId: 2, //teplate id matches that of fusion table
      });
layers[3] = new google.maps.FusionTablesLayer({ //Load Borders Layer
        query: {
          select: 'geometry', //select from the location column of table
          from:'1zMTPQhddpYbRrSYbbpbrNbTpso_QDwMRav6SCTqt' //table id
        },
        
   styleId: 2, //style id matches that was specified in fusion table features
   templateId: 2, //teplate id matches that of fusion table
      });
layers[4] = new google.maps.KmlLayer('https://GISJohnECS.github.io/NationalGrid.kmz', { preserveViewport: true });	  
layers[5] = new google.maps.KmlLayer('https://GISJohnECS.github.io/Cities1.kmz', { preserveViewport: true });
layers[6] = new google.maps.KmlLayer('https://GISJohnECS.github.io/BarProportion.kmz', { preserveViewport: true });
layers[7] = new google.maps.KmlLayer('https://GISJohnECS.github.io/CoalFiredStation.kmz', { preserveViewport: true });
layers[8] = new google.maps.KmlLayer('https://GISJohnECS.github.io/DieselGasTurbineStation.kmz', { preserveViewport: true });
layers[9] = new google.maps.KmlLayer('https://GISJohnECS.github.io/HydroElectricPowerStation.kmz', { preserveViewport: true });
layers[10] = new google.maps.KmlLayer('https://GISJohnECS.github.io/NuclearPowerStation.kmz', { preserveViewport: true });
		
 /*Copyright (C) John Robert Lister 2016
*/


var map;
function initialize() {
  var styles = [
    {
      stylers: [
        { hue: "#27C993" },
        { saturation: -20}
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100		},
		 { hue: "#ffffff" },
        { visibility: "simplified" }
      ]
    },{
      featureType: "all",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];
  
  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});
	
    map = new google.maps.Map(document.getElementById('map_canvas'), { //create a variable for the google map
          center: new google.maps.LatLng(-29, 25), //centre it over guinea
          zoom: 6, //zoom level where all points are visible
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map-style'] //the maptypeId
        });
	 
	 
		//Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

        var infoWindow = new google.maps.InfoWindow(); //create a variable for the infowindows
}
function toggleLayers(i)
{
  if(layers[i].getMap()==null) {
      layers[i].setMap(map);     
  }
  else {
     layers[i].setMap(null);
  }
  document.getElementById('status').innerHTML += "toggleLayers("+i+") [setMap("+layers[i].getMap()+"] returns status: "+layers[i].getStatus()+"<br>";
}
//https://developers.google.com/maps/documentation/javascript/examples/geocoding-simple
	   var geocoder = new google.maps.Geocoder();

        document.getElementById('submit').addEventListener('click', function() {
          geocodeAddress(geocoder, map);
        });
		function geocodeAddress(geocoder, resultsMap) {
        var address = document.getElementById('address').value;
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
            });
          } else {
            alert('Google is telling GISJohn that the geocode was not successful for the following reason: ' + status);
          }
        });
      }
