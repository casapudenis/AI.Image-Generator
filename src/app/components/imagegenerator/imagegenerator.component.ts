import { Component } from '@angular/core';
import { OpenaiService } from '../../services/openai.service';

@Component({
  selector: 'app-imagegenerator',
  templateUrl: './imagegenerator.component.html',
  styleUrls: ['./imagegenerator.component.scss']
})
export class ImagegeneratorComponent {
  imageUrl: string | undefined;
  constructor(private openaiService: OpenaiService) {
  }

  generateImage(data: { prompt: string, size: string }) {
    const { prompt, size } = data;
    this.openaiService.generateImage(prompt, size).subscribe(
      (response: any) => {
        this.imageUrl = response.data[0].url;;
        console.log(response);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}