import { Component, OnInit } from '@angular/core';
import { EndpointService } from '../../services/endpoint.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public noticias: any[] = []

  constructor(private apiServices: EndpointService) { }

  ngOnInit(): void {
    this.faces(); 
  }

  faces() {
    this.apiServices.getFaces().subscribe( resp => {
      this.noticias = resp.articles
    })
  }

}
