import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EndpointService } from '../../services/endpoint.service';

@Component({
  selector: 'app-more-news',
  templateUrl: './more-news.component.html',
  styleUrls: ['./more-news.component.scss']
})
export class MoreNewsComponent implements OnInit {
  
  public sportNews: any[] = []

  constructor(
    private apiService: EndpointService, 
    private location: Location) { }

  ngOnInit(): void {
    this.apiService.getSportNews().subscribe( resp => {
      const { articles } = resp;
      articles.length = 9;
      this.sportNews = articles
      console.log(resp)
    })
  }

  goBack() {
    this.location.back();
  }

}
