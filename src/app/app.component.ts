import { Component, OnInit } from '@angular/core';
import { EndpointService } from './services/endpoint.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'proof';

  public noticias: any[] = []

  ngOnInit(): void {
   this.faces(); 
  }
  constructor( private apiServices: EndpointService ) {}
  
  faces() {
    this.apiServices.getFaces().subscribe( resp => {
      console.log(resp.articles[0])
      this.noticias = resp.articles
    })
  }
}
