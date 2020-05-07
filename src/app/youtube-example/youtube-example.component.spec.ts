import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeExampleComponent } from './youtube-example.component';

describe('YoutubeExampleComponent', () => {
  let component: YoutubeExampleComponent;
  let fixture: ComponentFixture<YoutubeExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
