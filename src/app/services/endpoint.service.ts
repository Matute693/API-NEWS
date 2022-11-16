import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { News } from '../interfaces/news.interface';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  private apiKey: string = 'af860ab9576a430c82869a4f7f5a25ba'
  private country: string = 'us'

  constructor( private http: HttpClient) { }


  getFaces(): Observable<News> {
    const url = `${environment.apiUrl}/top-headlines`
    const params = new HttpParams()
      .set('country', this.country)  
      .set('apiKey', this.apiKey)
    return this.http.get<News>(`${url}`, { params })
    .pipe(
      map( resp => {
        return resp
      }),
    );;
  }

}

