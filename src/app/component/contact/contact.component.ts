import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public options: google.maps.MapOptions = {
    center: {lat: 40, lng: -20},
    zoom: 4
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
