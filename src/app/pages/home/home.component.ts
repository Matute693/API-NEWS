import { Component, OnInit } from '@angular/core';
import { EndpointService } from '../../services/endpoint.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
