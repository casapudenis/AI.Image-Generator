import { Component } from '@angular/core';
import { OpenaiService } from '../../services/openai.service';

@Component({
  selector: 'app-imagegenerator',
  templateUrl: './imagegenerator.component.html',
  styleUrls: ['./imagegenerator.component.scss']
})
export class ImagegeneratorComponent {
  constructor(private openaiService: OpenaiService) {
  }

  generateImage(data: { prompt: string, size: string }) {
    const { prompt, size } = data;
    this.openaiService.generateImage(prompt, size).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}