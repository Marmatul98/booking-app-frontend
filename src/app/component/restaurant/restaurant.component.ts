import {Component, OnInit} from '@angular/core';
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  public facebookIcon = faFacebook;
  public instagramIcon = faInstagram;

  constructor() {
  }

  ngOnInit(): void {
  }

}
