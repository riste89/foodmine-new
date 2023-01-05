import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Cart } from 'src/app/sheard/models/cart';
import { CartItem } from 'src/app/sheard/models/cartitem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart!:Cart

  constructor(private cartService:CartService){
    this.cartService.getCartObservable().subscribe((item)=>{
      this.cart = item
    })
  }


  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id)

  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString)
    this.cartService.changeQuantity(cartItem.food.id, quantity)
  }

}
