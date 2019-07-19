import { Component, OnInit } from '@angular/core';
declare let L;


@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  constructor() { }

 /*  function onMapClick(e: any) {

    console.log('You clicked the map which generated object ',e);
  }  */

  onMapClick(e: any) : void {
    console.log('Clicked on map with event \'e\' ',e);
  }

  towerBridgeMessage(e:MouseWheelEvent) : void {
    console.log('You just clikce don tower bridge');
  }

  extendedMessage(e: any) : void {
    //console.log('this.options.color is'+ this.options.color);
    console.log('color is'+ e.sourceTarget.options.color);
  }



  ngOnInit() {

    var extendedMarker = L.Marker.extend({
      options: { color:""}
     })
     

    
     var tbOptions = { title: "Cool bridge"};

     var greenichOptions = { title: "Cool city", color:"blue"};

    //Put markers on map individually
    //var london = L.marker([51.5, -0.09]).bindPopup('This is London').addTo(map), 
   // hammersmith = L.marker([51.491845058545486, -0.22350311279296878]).bindPopup('This is Hammersmith').addTo(map),
   // kensignton = L.marker([51.49815059196903, -0.19947052001953128]).bindPopup('This is Kensignton').addTo(map),
   // camdenTown = L.marker([51.54162432615388, -0.13904571533203128]).bindPopup('This is Kensignton').addTo(map);

    //Put icons on the map as a layer group instead of individual placement
   var cityOfLondon = L.marker([51.51535277967165, -0.09389877319335938]).bindPopup('This is City of London in north layer group'),
  dalston = L.marker([51.5430122382023, -0.06746292114257814]).bindPopup('This is Dalston in north layer group'),
  brixton = L.marker([51.455691649021205, -0.12119293212890626]).bindPopup('This is Brixton in southlayer group'),
  lewisham = L.marker([51.46125352026384, -0.014419555664062502]).bindPopup('This is Lewisham in south layer group'),
  westminsterAbbey = L.marker([51.492998028, -0.123166174]).bindPopup('This is Buckingham Palace in landmarks layer group'),
  towerBridge = L.marker([51.505153, -0.075664],tbOptions).bindPopup('This is Tower Brdige in landmarks layer group');

  var testy = new extendedMarker([51.48135282895683, -0.005793571472167969],greenichOptions).bindPopup('This is TGreenwhich in South layer group');


  towerBridge.on('click', this.towerBridgeMessage);
  testy.on('click', this.extendedMessage);

  //Create layer groups
    var northCities = L.layerGroup([cityOfLondon, dalston]);
    var southCities =  L.layerGroup([brixton, lewisham, testy]);
    var landmarks = L.layerGroup([westminsterAbbey,towerBridge])

 

var layerStreets = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoidGhlbXJjaGFzIiwiYSI6ImNqeTVtZnYycDA0OTUzYm82ajNwNmtoNGMifQ.TmVVHFp3aeGriuLy3AwW9Q'
});

var layerSatellite = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.satellite',
  accessToken: 'pk.eyJ1IjoidGhlbXJjaGFzIiwiYSI6ImNqeTVtZnYycDA0OTUzYm82ajNwNmtoNGMifQ.TmVVHFp3aeGriuLy3AwW9Q'
});

var baseLayers = {
  "Streets" : layerStreets,
  "Satellite": layerSatellite
};

var overLays = {

  "North Cities":  northCities,
  "South Cities": southCities,
  "Landmarks" : landmarks

};



const map = L.map('map' , {

  center: [51.51140005662908, -0.3057289123535157],
  zoom: 12,
  layers: [ layerStreets, northCities]

});


//Need to set 'defualt' base layer
//layerStreets.addTo(map);

L.control.layers(baseLayers, overLays).addTo(map);



map.on('click',this.onMapClick);





//var marker = L.marker([51.5, -0.09]).addTo(map);
//marker.bindPopup("<b>Yes - money!</b>");


/*
var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);


var circle = L.circle([51.508, -0.11], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(map);

var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(map);


*/
} 

}


