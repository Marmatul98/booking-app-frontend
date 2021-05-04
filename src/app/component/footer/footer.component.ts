import {Component, OnInit} from '@angular/core';
import {faCity, faEnvelopeOpen, faPhone} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public phoneIcon = faPhone;
  public envelopeIcon = faEnvelopeOpen;
  public cityIcon = faCity;
  public facebookIcon = faFacebook;
  public instagramIcon = faInstagram;

  constructor() {
  }

  ngOnInit(): void {
  }

}
