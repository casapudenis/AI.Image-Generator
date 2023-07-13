import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl = 'https://seed-tide-polo.glitch.me/images';
  
  constructor(private http: HttpClient) { }
  
  addImage(url: string): Observable<any> {
    const image = { url: url };
    return this.http.post<any>(this.apiUrl, image);
  }
  getImages(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}