import { Component } from '@angular/core';
import { Image } from './Image';
import { ThumbnailsService } from './services/thumbnails.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thumbnail-web-ui';
  fileToUpload: File = null;
  imageUrl = 'https://via.placeholder.com/200C/';
  doneUrl = "src/assets/done.jpg"

  done:boolean = false;
  image: Image
  constructor(private thumbnailService: ThumbnailsService) { }

  ngOnInit(): void {
    this.image = Object.assign({});
  }

  save() {
    this.image = {
      ImagePath: this.imageUrl
    }
    this.thumbnailService.upload(this.image).subscribe(data => this.callBack());
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }

  callBack(){    
    this.done = true;
    setTimeout(() => {
     this.done = false;
     this.imageUrl = 'https://via.placeholder.com/200C/';
  }, 3000);  
  }
}
