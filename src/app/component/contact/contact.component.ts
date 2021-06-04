import {Component, OnInit} from '@angular/core';
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faEnvelopeOpen, faMobileAlt} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public facebookIcon = faFacebook;
  public instagramIcon = faInstagram;
  public mobileIcon = faMobileAlt;
  public emailIcon = faEnvelopeOpen;

  constructor() {
  }

  ngOnInit(): void {
  }

}
