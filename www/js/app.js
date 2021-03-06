/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */


// For improved debugging and maintenance of your app, it is highly
// recommended that you separate your JavaScript from your HTML files.
// Use the addEventListener() method to associate events with DOM elements.

// For example:

// var el ;
// el = document.getElementById("id_myButton") ;
// el.addEventListener("click", myEventHandler, false) ;



// The function below is an example of the best way to "start" your app.
// This example is calling the standard Cordova "hide splashscreen" function.
// You can add other code to it or add additional functions that are triggered
// by the same event or other events.

function onAppReady() {
    if( navigator.splashscreen && navigator.splashscreen.hide ) {   // Cordova API detected
        navigator.splashscreen.hide() ;
    }
}
// document.addEventListener("app.Ready", onAppReady, false) ;
document.addEventListener("deviceready", onAppReady, false) ;
// document.addEventListener("onload", onAppReady, false) ;

// The app.Ready event shown above is generated by the init-dev.js file; it
// unifies a variety of common "ready" events. See the init-dev.js file for
// more details. You can use a different event to start your app, instead of
// this event. A few examples are shown in the sample code above. If you are
// using Cordova plugins you need to either use this app.Ready event or the
// standard Crordova deviceready event. Others will either not work or will
// work poorly.

// NOTE: change "dev.LOG" in "init-dev.js" to "true" to enable some console.log
// messages that can help you debug Cordova app initialization issues.




//first we init the maps and then set the visibility



//init the four maps with the device geolocation 
function initMap() {

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
          };
    
    //set the zoom level to 11 on the map       
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 11
        });
    
    //set the zoom level to 6 on the map1         
        var map1 = new google.maps.Map(document.getElementById('map1'), {
            zoom: 6
        });
    
    //set the zoom level to 18 on the map2         
        var map2 = new google.maps.Map(document.getElementById('map2'), {
            zoom: 18,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        });
    
    //set the position on the panorama map (streetView) pano       
        var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), {
            position: pos,
            pov: {heading: 34, pitch: 10}
        });
          
    //set the position on all the maps     
        map.setStreetView(panorama); 
        map.setCenter(pos);
        map1.setCenter(pos);
        map2.setCenter(pos);
      
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
 
}

//Errors Handlers
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  console.log(pos);
  console.log(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}

//show or hide the maps
function showMaps(){
    var visibility = document.getElementById('fourMaps').style.visibility
    if( visibility =='hidden'){
    document.getElementById('textDiv').style.display = 'none';
    document.getElementById('fourMaps').style.visibility = "visible";
    } else { document.getElementById('fourMaps').style.visibility = "hidden";
            document.getElementById('textDiv').style.display = 'inline';
    }
}

