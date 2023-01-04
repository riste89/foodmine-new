import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../sheard/models/cart';
import { CartItem } from '../sheard/models/cartitem';
import { Food } from '../sheard/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = this.getCartFromLocaleStorage()
  private cartSubject:BehaviorSubject<Cart>= new BehaviorSubject(this.cart)

  constructor() { }

  addToCart(food:Food){
    let cartItem = this.cart.items
    .find(item=>item.food.id===food.id)
    if(cartItem) return
    this.cart.items.push(new CartItem(food))
    this.setCartToLocaleStorage()


  }
 removeFromCart(foodId:string){
  this.cart.items = this.cart.items
  .filter(item=>item.food.id != foodId)
  this.setCartToLocaleStorage()
 }

 changeQuantity(foodId:string, quantity:number){
  let cartItem = this.cart.items.find(item=>item.food.id === foodId)

  if(!cartItem) return
   cartItem.quantity = quantity
   cartItem.price = quantity * cartItem.food.price
  this.setCartToLocaleStorage()

 }

 clearCart(){
  this.cart = new Cart()
  this.setCartToLocaleStorage()

 }

 getCartObservable():Observable<Cart>{
  return this.cartSubject.asObservable()

 }

 private setCartToLocaleStorage(){
  this.cart.totalPrice = this.cart.items.reduce((prevSumb, currentSum)=>
    prevSumb + currentSum.price, 0)
   this.cart.totalCount = this.cart.items.reduce((prevSum, currItem)=>
   prevSum + currItem.quantity, 0)

  const cartJson = JSON.stringify(this.cart)
  localStorage.setItem('User', cartJson)
  this.cartSubject.next(this.cart)

 }

 private getCartFromLocaleStorage():Cart{
  const cartJson = localStorage.getItem('Cart')
  return cartJson? JSON.parse(cartJson) : new Cart()

 }

}

