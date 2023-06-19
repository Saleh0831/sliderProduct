import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UiProduct';
url:string='../assets/Carousel_iPhone14_Blue_Placement01-PreOrder.webp';

  changeImage(e:any){
    console.log(e.target.src);
    this.url=e.target.src;
  }
}
