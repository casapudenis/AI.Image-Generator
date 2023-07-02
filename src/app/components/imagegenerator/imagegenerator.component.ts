import { Component } from '@angular/core';
import { OpenaiService } from '../../services/openai.service';
import { FormComponent } from '../form/form.component';
@Component({
  selector: 'app-imagegenerator',
  templateUrl: './imagegenerator.component.html',
  styleUrls: ['./imagegenerator.component.scss']
})
export class ImagegeneratorComponent {
  constructor(private openaiService: OpenaiService) {}
  
}
