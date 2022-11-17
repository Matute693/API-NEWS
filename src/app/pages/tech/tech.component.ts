import { Component, OnInit } from '@angular/core';
import { EndpointService } from '../../services/endpoint.service';
import { Article } from '../../interfaces/tech-news.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {

  public techNews: Article[] = []

  constructor(
    private apiService: EndpointService,
    private location: Location) { }

  ngOnInit(): void {
    this.apiService.getTechNews().subscribe( resp => {
      const { articles } = resp;
      this.techNews = articles
      this.techNews.length = 20;
      this.techNews.splice(0, 7)
      console.log(this.techNews)
    } )
  }

  goBack() {
  this.location.back();
  }

}
