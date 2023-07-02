import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Output() generateImage: EventEmitter<{ prompt: string, size: string }> = new EventEmitter<{ prompt: string, size: string }>();
  prompt!: string;
  size!: string;
  onSubmit() {
    console.log(this.prompt,this.size);
    this.generateImage.emit({ prompt: this.prompt, size: this.size });
  }
}