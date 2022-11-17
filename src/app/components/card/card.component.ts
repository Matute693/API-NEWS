import { Component, Input, OnInit } from '@angular/core';
import { EndpointService } from '../../services/endpoint.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  // public noticias: any[] = []
  @Input() news: any[] = []

  constructor() { }
}
