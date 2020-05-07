import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-youtube-example-detail',
  templateUrl: './youtube-example-detail.component.html',
  styleUrls: ['./youtube-example-detail.component.css'],
})
export class YoutubeExampleDetailComponent implements OnInit {
  private videoId: string;
  public videoUrl: string;

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.videoId = this.activatedRoute.snapshot.paramMap.get('id');
    this.videoUrl = `https://www.youtube.com/embed/${this.videoId}?rel=0&autoplay=1`;
  }
}
