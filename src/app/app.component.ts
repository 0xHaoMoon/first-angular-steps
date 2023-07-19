import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  images = ['lucario.jpg','mewtu.jpg','dark.jpg'];
  curentImage = 0;
  showImage = true;

  ngOnInit(){
    this.updateImage();
  }

  updateImage(){
    
   setInterval(()=>{
    this.curentImage++;
    this.curentImage = this.curentImage % this.images.length;
    this.showImage = false;

    setTimeout(() => {
      this.showImage = true;
    }, 10);
   },8000);
  }

}
