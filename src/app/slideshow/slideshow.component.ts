import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit{
  images = ['lucario.jpg','mewtu.jpg','dark.jpg'];
  headlines = ['HAO TRUONG',' Frontend Developer','Angular Typescript Javscript HTML  CSS']
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
