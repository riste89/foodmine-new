import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/service/food.service';
import { Food } from 'src/app/sheard/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  foods:Food[] = []

  constructor(private foodService:FoodService){
    this.foods = foodService.getAll()
  }

  ngOnInit() {

  }

}
