import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>(); 

    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel', 
        'Super Tasty Schnitzel - just awesome', 
        'https://image.shutterstock.com/z/stock-photo-bright-spring-view-of-the-cameo-island-picturesque-morning-scene-on-the-port-sostis-zakinthos-1048185397.jpg',
        [
            new Ingredient('Meat',1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('A Test Recipe 1',
         'This is simply a test', 
        'https://image.shutterstock.com/z/stock-photo-bright-spring-view-of-the-cameo-island-picturesque-morning-scene-on-the-port-sostis-zakinthos-1048185397.jpg',
        [
            new Ingredient('Meat',1),
            new Ingredient('Bread', 2)
        ])
      ];

    getRecipes(){
        return this.recipes.slice();
    }

    constructor(private shoppingListService: ShoppingListService){

    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}