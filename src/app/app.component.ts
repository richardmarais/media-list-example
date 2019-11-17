import { Component } from '@angular/core';
import { SelectorMatcher } from '@angular/compiler';

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
      "type": "Videos",
      "date": "2019-01-22"
    },
    {
      "id":"2",
      "name": "Interactive Video File 1",
      "type": "Interactive Vids",
      "date": "2019-01-23"
    },
    {
      "id":"3",
      "name": "Audio File 1",
      "type": "Audio",
      "date": "2019-01-24"
    },
    {
      "id":"4",
      "name": "Image File 1",
      "type": "Images",
      "date": "2019-01-25"
    },
    {
      "id":"5",
      "name": "Document File 1",
      "type": "Documents",
      "date": "2019-01-26"
    },
    {
      "id":"6",
      "name": "Video File 2",
      "type": "Videos",
      "date": "2019-01-27"
    },
    {
      "id":"7",
      "name": "Audio File 2",
      "type": "Audio",
      "date": "2019-01-28"
    },{
      "id":"8",
      "name": "Image File 2",
      "type": "Images",
      "date": "2019-01-29"
    },{
      "id":"9",
      "name": "Video File 3",
      "type": "Videos",
      "date": "2019-01-30"
    },{
      "id":"10",
      "name": "Document File 2",
      "type": "Documents",
      "date": "2019-01-31"
    }
  ];

  filterBy = "";
  sortBy = "date";
}
