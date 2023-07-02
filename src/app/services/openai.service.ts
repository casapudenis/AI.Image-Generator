import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Configuration, OpenAIApi} from 'openai';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  private apiKey: string = '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';
  private openai: OpenAIApi;

  constructor(private httpClient: HttpClient) {
    const configuration = new Configuration({
      apiKey: this.apiKey,
    });
    this.openai = new OpenAIApi(configuration);
  }
  generateImage(prompt: string, size: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.apiKey}`)
    .set('Content-Type', 'application/json');
    const body = {
      prompt: prompt,
      n: 1,
      size: size
    };
    return this.httpClient.post<any>('https://api.openai.com/v1/images/generations',body,{ headers });
  }
}