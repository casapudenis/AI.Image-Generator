import { Component } from '@angular/core';
import { OpenaiService } from '../../services/openai.service';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-imagegenerator',
  templateUrl: './imagegenerator.component.html',
  styleUrls: ['./imagegenerator.component.scss']
})
export class ImagegeneratorComponent {
  imageUrl: string | undefined;
  constructor(private openaiService: OpenaiService,private imageService: ImageService) {
  }

  generateImage(data: { prompt: string, size: string }) {
    const { prompt, size } = data;
    this.openaiService.generateImage(prompt, size).subscribe(
      (response: any) => {
        this.imageUrl = response.data[0].url;
        this.imageService.addImage(response.data[0].url).subscribe(
          (result: any) => {
            console.log('Image added to database:', result);
          },
          (error: any) => {
            console.error('Error adding image to database:', error);
          }
        );
      },
      (error: any) => {
        console.error('Error generating image:', error);
      }
    );
  }
}