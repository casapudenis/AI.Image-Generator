import { Component,OnInit } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: "./gallery.component.html",
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit{
  settings = {
    counter: false,
    plugins: [lgZoom]
  };
  imageUrls: string[] = [];

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.loadImages();
  }
  loadImages(): void {
    this.imageService.getImages().subscribe(
      (response: any) => {
        this.imageUrls = response.map((item: any) => item.url);
      },
      (error: any) => {
        console.error('Error loading images:', error);
      }
    );
  }
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
}