import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private title : string = 'media-list-example';

  private mediaData : Array<any> = [
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

  private filterBy : string = "";
  private sortBy : string = "date";
  private medias : Array<any> = [];
  private searchBy : string = "";
  private uniqueMediaTypes : Array<string> [];
  private sortOrder : number = 1;

  ngOnInit() : void {
    this.medias = this.mediaData;
    this.uniqueMediaTypes = Array.from(new Set(this.mediaData.map(m => m.type)));
  }

  filter(filterBy : string) : void {
    this.filterBy = filterBy;
    this.medias = this.mediaData.filter(f => this.isVisible(f));
  }

  search(searchBy : string) : void {
    this.searchBy = searchBy;
    this.medias = this.mediaData.filter(f => this.isVisible(f));
  }

  isVisible(f : any) : boolean {
    return (f.name.toLowerCase().includes(this.searchBy.toLowerCase()) || f.type.toLowerCase().includes(this.searchBy.toLowerCase()))
    && (this.filterBy.length > 0 ? f.type === this.filterBy : true);
  }

  sort(sortBy : string) {
    this.sortBy = sortBy;
    this.medias = this.medias.sort((a, b) => (a[this.sortBy] > b[this.sortBy]) ? this.sortOrder*1 : this.sortOrder*-1);
  }

  order() {
    this.sortOrder = this.sortOrder*-1;
    this.sort(this.sortBy);
  }

  clear() {
    this.sortOrder = 1;
    this.sortBy = "date";
    this.searchBy = "";
    this.filterBy = "";
    this.medias = this.mediaData;
    this.sort(this.sortBy);
    this.search(this.filterBy);
  }
}
