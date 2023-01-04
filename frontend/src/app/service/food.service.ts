import { Injectable } from '@angular/core';
import { sample_foods } from 'src/data';
import { Food } from '../sheard/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return sample_foods
  }

  getFoodBySearchTerm(searchTearm:string){
    return this.getAll().filter(food=>food.name.toLocaleLowerCase().includes(searchTearm.toLocaleLowerCase()))
  }
}
