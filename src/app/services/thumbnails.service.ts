import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Image } from '../Image';

@Injectable({
  providedIn: 'root'
})
export class ThumbnailsService {
 //baseUrl = 'https://localhost:44380/api/';
 baseUrl = '';
  constructor(private http: HttpClient,) { }

  upload(image:Image):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type':  'application/json'})
    };

    return this.http.post(this.baseUrl + 'thumbnails', image, httpOptions);
  }
}
