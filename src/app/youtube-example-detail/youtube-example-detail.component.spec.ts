import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeExampleDetailComponent } from './youtube-example-detail.component';

describe('YoutubeExampleDetailComponent', () => {
  let component: YoutubeExampleDetailComponent;
  let fixture: ComponentFixture<YoutubeExampleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeExampleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeExampleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
