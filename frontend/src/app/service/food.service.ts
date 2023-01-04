import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from 'src/data';
import { Food } from '../sheard/models/food';
import { Tag } from '../sheard/models/tag';

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

  getAllTags():Tag[]{
    return sample_tags
  }

  getFoodByTagName(tag:string):Food[]{
    return tag === 'All'?
    this.getAll():
    this.getAll().filter(food => food.tags?.includes(tag))
  }
}
