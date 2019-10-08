import { Component, OnInit } from '@angular/core';
import { Marker } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-agm',
  templateUrl: './agm.component.html',
  styleUrls: ['./agm.component.css']
})
export class AgmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  zoom: number = 19;
  
  // initial center position for the map
  lat: number = 28.689344;
  lng: number = 77.255441;
  name="Dit University"
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
 
  
  markerDragEnd($event: MouseEvent) {
    console.log('dragEnd', $event);
  }
  
  labelOptions = {
    color: 'green',
    fontFamily: '',
    fontSize: '14px',
    fontWeight: 'bold',
    text: 'Some Text',
    backgroundcolor:'green'
    }

}
