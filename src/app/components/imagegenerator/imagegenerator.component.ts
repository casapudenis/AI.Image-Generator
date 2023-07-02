import { Component } from '@angular/core';
import { ApikeyService } from '../../services/apikey.service';

@Component({
  selector: 'app-imagegenerator',
  templateUrl: './imagegenerator.component.html',
  styleUrls: ['./imagegenerator.component.scss']
})
export class ImagegeneratorComponent {
  constructor(private apikeyService: ApikeyService) { }
  generateImage() {
    const apiKey = 'YOUR_API_KEY';
    const prompt = 'Your prompt text goes here';
  
    this.apikeyService.generateImage(apiKey, prompt)
      .subscribe(
        (response) => {
          // Handle the image generation response here
          console.log(response);
        },
        (error) => {
          // Handle any errors that occurred during the request
          console.error(error);
        }
      );
  }
}
