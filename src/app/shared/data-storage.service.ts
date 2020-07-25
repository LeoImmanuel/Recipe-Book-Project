import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';

@Injectable({providedIn: 'root'})

export class dataStorageService{

    constructor(private http: HttpClient, private recipeService: RecipeService, 
                private authService: AuthService) {}

    storeRecipe(){
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://recipestore-20366.firebaseio.com/recipes.json', recipes)
        .subscribe( response => {
            console.log(response);
        });
    }

    fetchRecipe(){
        // Adding Tokens to Ongoing Requests
        return this.authService.user.pipe(take(1), exhaustMap( user =>{
            return this.http.get<Recipe[]>('https://recipestore-20366.firebaseio.com/recipes.json?auth=' + user.token);
        }),
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