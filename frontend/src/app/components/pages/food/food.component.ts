import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { FoodService } from 'src/app/service/food.service';
import { Food } from 'src/app/sheard/models/food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {

  food!:Food;

  constructor(activatedRoute:ActivatedRoute,
    foodService:FoodService,
   private cartService:CartService, private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params.id)
      this.food = foodService.getFoodById(params.id)
    })
  }

  addToCart(){
    this.cartService.addToCart(this.food)
    this.router.navigateByUrl('/cart-page')
  }
}
