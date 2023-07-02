import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagegeneratorComponent } from './imagegenerator.component';

describe('ImagegeneratorComponent', () => {
  let component: ImagegeneratorComponent;
  let fixture: ComponentFixture<ImagegeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagegeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagegeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
