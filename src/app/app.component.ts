import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'media-list-example';
  medias = [
    {
      "id":"1",
      "name": "Video File 1",
      "type": "video"
    },
    {
      "id":"2",
      "name": "Interactive Video File 1",
      "type": "interactive video"
    },
    {
      "id":"3",
      "name": "Audio File 1",
      "type": "audeo"
    },
    {
      "id":"4",
      "name": "Image File 1",
      "type": "image"
    },
    {
      "id":"5",
      "name": "Document File 1",
      "type": "document"
    },
    {
      "id":"6",
      "name": "Video File 2",
      "type": "video"
    },
    {
      "id":"7",
      "name": "Audio File 2",
      "type": "audio"
    },{
      "id":"8",
      "name": "Image File 2",
      "type": "image"
    },{
      "id":"9",
      "name": "Video File 3",
      "type": "video"
    },{
      "id":"10",
      "name": "Document File 2",
      "type": "document"
    }
  ];

  //sorting
  key: string = 'name';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  p: number = 1;
}
