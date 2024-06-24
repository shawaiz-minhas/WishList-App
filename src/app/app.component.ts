import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishText } from './data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  wishText : string = '';
  filter :string = "0";

  
get visibleItem() : WishText[]{
  let value = this.filter;
  if(value === '0'){
    return this.items
  }
  else if(value ==='1'){
    return this.items.filter(item => item.isCompleted)
  }
  else{
    return this.items.filter(item => !item.isCompleted)
  }
}

  addWish(){
    if (this.wishText){
      this.items.push(new WishText(this.wishText))
      this.wishText = '';
    } 
   
  }
  
//   filterText(value : any){
//     if(value === "0"){
//       this.visibleItem = this.items;
     
//   }
//   else if (value ==="1"){
//         this.visibleItem = this.items.filter(item =>item.isCompleted)
//   }
//   else{
//     this.visibleItem = this.items.filter(item => !item.isCompleted)
  
//   }
//   console.log(value)
// }
  items : WishText[] = [
    new WishText('Learn Angular'),
    new WishText('Learn TypeScript', true),
    new WishText('Learn Webpack'),
  ]
 



  toggleSet(item: WishText){
    item.isCompleted = !item.isCompleted;
    // this.filterText(this.filter);
  }
  title = 'pract-one';
}
