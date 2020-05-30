import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 
    'https://image.shutterstock.com/z/stock-photo-bright-spring-view-of-the-cameo-island-picturesque-morning-scene-on-the-port-sostis-zakinthos-1048185397.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 
    'https://image.shutterstock.com/z/stock-photo-bright-spring-view-of-the-cameo-island-picturesque-morning-scene-on-the-port-sostis-zakinthos-1048185397.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
