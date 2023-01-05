import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  cartQtn = 0

  constructor(cartService:CartService){
    cartService.getCartObservable().subscribe(newCart=>{
      this.cartQtn = newCart.totalCount
    })
  }

}
