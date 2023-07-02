import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApikeyService {

  constructor(private http: HttpClient) { }
  generateImage(apiKey: string, prompt: string): Observable<any> {
    const url = 'https://api.openai.com/v1/images';
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    });
  
    const body = {
      prompt: prompt,
    };
  
    return this.http.post(url, body, { headers });
  }
}
