import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({providedIn: 'root'})

export class dataStorageService{

    constructor(private http: HttpClient, private recipeService: RecipeService) {}

    storeRecipe(){
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://recipestore-20366.firebaseio.com/recipes.json', recipes)
        .subscribe( response => {
            console.log(response);
        });
    }

    fetchRecipe(){ 
        return this.http.get<Recipe[]>('https://recipestore-20366.firebaseio.com/recipes.json')
            .pipe(
                map( recipes => {
                    return recipes.map(recipe => {
                        return {...recipe, ingredients: recipe.ingredients? recipe.ingredients : []
                        }; 
                    });
                }),
                tap( recipes => {
                    this.recipeService.setRecipes(recipes);
                })
            );
    }
}
