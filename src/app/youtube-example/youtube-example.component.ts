import { Component } from '@angular/core';

@Component({
  selector: 'app-youtube-example',
  templateUrl: './youtube-example.component.html',
  styleUrls: ['./youtube-example.component.css'],
})
export class YoutubeExampleComponent {
  public readonly movieIdList: string[] = ['Po99AdWQK68', 'PPRtvYalZf0'];
  public getThumbnailUrl(id: string): string {
    return `https://img.youtube.com/vi/${id}/0.jpg`;
  }
}
