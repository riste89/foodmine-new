import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/service/food.service';
import { Food } from 'src/app/sheard/models/food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {

  food!:Food;

  constructor(activatedRoute:ActivatedRoute, foodService:FoodService){
    activatedRoute.params.subscribe((params)=>{
      if(params.id)
      this.food = foodService.getFoodById(params.id)
    })
  }
}
