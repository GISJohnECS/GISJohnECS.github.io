      /*
	  Creator grants users the right to use this code however google maps API must be replaced with your own tor you are violation of the copyright
	  YOU MUST CITE THIS CODE as belonging to GISJohnECS.github.io otherwise you must modify it 
	  Copyright exists in this code for its original creation 2015 & its adapation in 2016
 Copyright (C) John Robert Lister 2016
*/
	  function initialize() { //Initialize the function that is going to create the map // Create an array of styles.
  var styles = [
    {
      stylers: [
        { hue: "#27C993" },
        { saturation: -5 }
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
      featureType: "road",
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
	  
        var baseId = '172FC7hM8mO9cDQzgAs4zRFBCWQMcqp1u_jLYWAmv'; //creating variable for the main specie table layer id
        var baseColumn = 'geometry'; //creating a variable for the locationcollumn of the table

        var map = new google.maps.Map(document.getElementById('map'), { //create a variable for the google map
          center: new google.maps.LatLng(-29, 25), //centre it over guinea
          zoom: 5, //zoom level where all points are visible
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map-style'] //the maptypeId
        });
		
		//Set KMZ made from ArcMAP, Cities, Borders
		// var ctaLayer = new google.maps.KmlLayer({
        //    url: 'http://GISJohnECS.github.io/Cities.kml'
        //});
	 //ctaLayer.setMap(map);
	 
	 
		//Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

        var infoWindow = new google.maps.InfoWindow(); //create a variable for the infowindows
        
           /*
 Copyright (C) John Robert Lister 2016
*/
        var layer = new google.maps.FusionTablesLayer({ //create a variable for the main specie table layer
          query: {
            select: baseColumn, //select values from the location column(the geocoded column)
            from: baseId //the table id variable
          },
          map: map, //display it on the map upon load
          styleId: 2, //styles of markers etc match those specified in fusion table
          templateId: 2, //template id match that of fusion table
          options: {
            suppressInfoWindows: true
          }
        });
        
        google.maps.event.addListener(layer, 'click', function(e) { //create a click listener for the info window
          infoWindow.setContent(e.infoWindowHtml + //set the content for the info window, here i have said i want the info window to match the info window i have set up for that table
                                ''); //add a button that will open a window displaying the specie table, users can filter values and add new values from here
          infoWindow.setPosition(e.latLng); //set the info window position
          infoWindow.open(map); //open the info window
          document.getElementById("myButton").onclick = function () { //create the onclick funtion of the button that will open the window
            window.open("https://www.google.com/fusiontables/DataSource?docid=1qK80aa74L4SWqWxPoaNb3_Q8hIJ6MiPXdec4waFQ", "_blank", "toolbar=no, scrollbars=yes, resizable=yes, top=500, left=500, width=900, height=800"); //create the constraints for the new window, width content etc content must be link to fusion table with filter option and toolbar for adding data
}
      });
        
 var layer1 = new google.maps.FusionTablesLayer({ //Load Unemployment 2011 Layer
        query: {
          select: 'geometry', //select from the location column of table
          from:'172FC7hM8mO9cDQzgAs4zRFBCWQMcqp1u_jLYWAmv' //table id
        },
        
   styleId: 2, //style id matches that was specified in fusion table features
   templateId: 2, //teplate id matches that of fusion table
        options: {
            suppressInfoWindows: true
          }
        });

        google.maps.event.addListener(layer1, 'click', function(e) { //create a click listener for the info window
          infoWindow.setContent(e.infoWindowHtml + //set the content for the info window, here i have said i want the info window to match the info window i have set up for that table
               '');//add a button that will open a window displaying the specie table, users can filter values and add new values from here
        
          infoWindow.setPosition(e.latLng);//set the info window position
          infoWindow.open(map);//open the info window
          document.getElementById("myButton").onclick = function () { //create the onclick funtion of the button that will open the window
        
            window.open("https://www.google.com/fusiontables/DataSource?docid=1qK80aa74L4SWqWxPoaNb3_Q8hIJ6MiPXdec4waFQ", "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=500, left=500, width=800, height=800"); //create the constraints for the new window, width content etc content must be link to fusion table with filter option and toolbar for adding data

}   /*
 Copyright (C) John Robert Lister 2016
*/
      });
          var layer2 = new google.maps.FusionTablesLayer({ //Load ArcTableMangrove Layer
        query: {
          select: 'LONDD',
          from:'13ZN5UX5Qk-gQcx0q6Zs-w28oGhgx4R3m-sxwU3O-'
        },
        styleId: 2,
             templateId: 2,
        options: {
            suppressInfoWindows: true
          }
        }); /*
	  Creator grants users the right to use this code however google maps API must be replaced with your ownerDocumentor you are violation of the copyright
	  YOU MUST CITE THIS CODE as belonging to GISJohnECS.github.io
	  Copyright exists in this code for its original creation 2015 & its adapation in 2016
 Copyright (C) John Robert Lister 2016
*/

        google.maps.event.addListener(layer1, 'click', function(e) {
          infoWindow.setContent(e.infoWindowHtml +
              '');
          infoWindow.setPosition(e.latLng);
          infoWindow.open(map);
          document.getElementById("myButton").onclick = function () {
         window.open("https://www.google.com/fusiontables/DataSource?docid=1qK80aa74L4SWqWxPoaNb3_Q8hIJ6MiPXdec4waFQ", "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=500, left=500, width=800, height=800");
}
         /*
	  Creator grants users the right to use this code however google maps API must be replaced with your ownerDocumentor you are violation of the copyright
	  YOU MUST CITE THIS CODE as belonging to GISJohnECS.github.io
	  Copyright exists in this code for its original creation 2015 & its adapation in 2016
 Copyright (C) John Robert Lister 2016
*/
      });
   var layer3 = new google.maps.FusionTablesLayer({ //Load ArcTableMarch Layer
        query: {
            select: 'LONDD',
            from: '1nRmxoGAlKTOpf58DHBXa-AE0Vptdkj9U0PdLgOtr'
        },
        styleId: 2,
      templateId: 2,
        options: {
            suppressInfoWindows: true
          }   /*
 Copyright (C) John Robert Lister 2016
*/
        });

        google.maps.event.addListener(layer3, 'click', function(e) {
          infoWindow.setContent(e.infoWindowHtml +
              '');
          infoWindow.setPosition(e.latLng);
          infoWindow.open(map); /*
	  Creator grants users the right to use this code however google maps API must be replaced with your ownerDocumentor you are violation of the copyright
	  YOU MUST CITE THIS CODE as belonging to GISJohnECS.github.io
	  Copyright exists in this code for its original creation 2015 & its adapation in 2016
 Copyright (C) John Robert Lister 2016
*/
          document.getElementById("myButton").onclick = function () {
         window.open("https://www.google.com/fusiontables/DataSource?docid=1qK80aa74L4SWqWxPoaNb3_Q8hIJ6MiPXdec4waFQ", "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=500, left=500, width=800, height=800");
}
    });
   var layer4 = new google.maps.FusionTablesLayer({ //Load ArcTableCNSB Layer
        query: {
            select: 'LONDD',
            from: '1NAY256IT53gtPoN2Ic5J66zJNHJ-scFUtdRA7qLW'
        },
        styleId: 2,
        templateId: 2,
        options: {
            suppressInfoWindows: true
          }
        });
         google.maps.event.addListener(layer4, 'click', function(e) {
          infoWindow.setContent(e.infoWindowHtml +
              '<button id="myButton" class="float-left submit-button" >Click to view Interactive Table</button>');
          infoWindow.setPosition(e.latLng);
          infoWindow.open(map);
          document.getElementById("myButton").onclick = function () {
         window.open("https://www.google.com/fusiontables/DataSource?docid=1qK80aa74L4SWqWxPoaNb3_Q8hIJ6MiPXdec4waFQ", "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=500, left=500, width=800, height=800");
}   /*
 Copyright (C) John Robert Lister 2016
*/
    });
           google.maps.event.addDomListener(document.getElementById('delivery'), //create listener for the drop down menu
                                            'change', function() { //initialize the function that will sort the layers
                                              updateMap(layer, baseId, baseColumn); //update the map based on the following variables
        });

           function updateMap(layer, baseId, baseColumn) { //this is the function to update the map based on the specified variables
             var province = document.getElementById('delivery').value; //create specie variable the will select values based from species in the drop down list
             if (province) { //create method to update the map by value selected from drop down list
          layer.setOptions({   /*
 Copyright (C) John Robert Lister 2016
*/
            query: {
              select: baseColumn, //select values location from location column variable
              from: baseId, //select the main species table
              where: "PROVNAME = '" + province + "'" //specify that the values displayed from table must match the value from dropdown list by their SpecieID
            },
            suppressInfoWindows: true
          });   /*
 Copyright (C) John Robert Lister 2016
*/
             } else { //if it doesnt match the above specifications 
          layer.setOptions({
            query: {
              select: baseColumn,
              from: baseId
            }   /*
 Copyright (C) John Robert Lister 2016
*/
          });
        }
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
           google.maps.event.addDomListener(document.getElementById('Collection'), 'change', function () { //create the click listener for the collection dropdown list
        
		/*
	  Creator grants users the right to use this code however google maps API must be replaced with your ownerDocumentor you are violation of the copyright
	  YOU MUST CITE THIS CODE as belonging to GISJohnECS.github.io
	  Copyright exists in this code for its original creation 2015 & its adapation in 2016
 Copyright (C) John Robert Lister 2016
*/
      /* 
       
             if (this.value == "layer1") { <!--If the value selected is the ArcTableJan turn all layers off but it-->
            layer1.setMap(map);
            layer2.setMap(null);
            layer3.setMap(null);
            layer4.setMap(null);
             layer.setMap(null);
        }  else if (this.value == "layer2") { <!--If the value selected is the ArcTableMangrove turn all layers off but it-->
            layer1.setMap(null);
            layer2.setMap(map);
            layer3.setMap(null);
            layer4.setMap(null);
         layer.setMap(null);
    }      else if (this.value == "layer3") { <!--If the value selected is the ArcTableMarch turn all layers off but it-->
            layer1.setMap(null);
            layer2.setMap(null);
            layer3.setMap(map);
            layer4.setMap(null);
            layer.setMap(null);
    }
         else if (this.value == "layer4") { <!--If the value selected is the ArcTableCNSB turn all layers off but it-->
            layer1.setMap(null);
            layer2.setMap(null);
            layer3.setMap(null);
            layer4.setMap(map);
         layer.setMap(null);
    }
*/
         var newCollectionlayer = this.value; //create variable that selects the values for the new layer to be displayed
        layer.setOptions({
            query: {
              select: 'geometry', //select from location column
              from: newCollectionlayer 
            }
        });
    });   /*
 Copyright (C) John Robert Lister 2016
*/
}

          
   /*
	  Creator grants users the right to use this code however google maps API must be replaced with your ownerDocumentor you are violation of the copyright
	  YOU MUST CITE THIS CODE as belonging to GISJohnECS.github.io
	  Copyright exists in this code for its original creation 2015 & its adapation in 2016
 Copyright (C) John Robert Lister 2016
*/
   /*
 Copyright (C) John Robert Lister 2016
*/
                                       google.maps.event.addDomListener(window, 'load', initialize); //load the AddDOMLSItener
