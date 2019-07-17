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

  ngOnInit() {

    
    const map  = L.map('map').setView([51.51140005662908, -0.3057289123535157], 13);

    //Put markers on map individually
    var london = L.marker([51.5, -0.09]).bindPopup('This is London').addTo(map), 
    hammersmith = L.marker([51.491845058545486, -0.22350311279296878]).bindPopup('This is Hammersmith').addTo(map),
    kensignton = L.marker([51.49815059196903, -0.19947052001953128]).bindPopup('This is Kensignton').addTo(map),
    camdenTown = L.marker([51.54162432615388, -0.13904571533203128]).bindPopup('This is Kensignton').addTo(map);

    //Put icons on the map as a layer group instead of individual placement
    var cityOfLondon = L.marker([51.51535277967165, -0.09389877319335938]).bindPopup('This is City of London in layer group').addTo(map),
    dalston = L.marker([51.5430122382023, -0.06746292114257814]).bindPopup('This is Dalston in layer group').addTo(map);

    var layerCities = L.layerGroup([cityOfLondon, dalston]);

    



    map.on('click',this.onMapClick);

 /*  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     }).addTo(map);
  } */

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
   // id: 'mapbox.streets',
   id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoidGhlbXJjaGFzIiwiYSI6ImNqeTVtZnYycDA0OTUzYm82ajNwNmtoNGMifQ.TmVVHFp3aeGriuLy3AwW9Q'
}).addTo(map);

//var marker = L.marker([51.5, -0.09]).addTo(map);
//marker.bindPopup("<b>Yes - money!</b>");

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

} 

}
