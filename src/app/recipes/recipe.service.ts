import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();
    private recipes : Recipe[] = [];
    /* private recipes: Recipe[] = [
        new Recipe(
            'sandwich', 
            'Veggie sandwich | yum', 
            'https://upload.wikimedia.org/wikipedia/commons/7/7f/Prawns_Masala_Recipe.jpg', 
            [
                new Ingredient('bread', 2),
                new Ingredient('veggie', 10)
            ]),
        new Recipe(
            'burger', 
            'Favourite ham burger.. want it?', 
            'https://upload.wikimedia.org/wikipedia/commons/7/7f/Prawns_Masala_Recipe.jpg', 
            [
                new Ingredient('buns', 2),
                new Ingredient('meat', 1)
            ])
      ]; */

      constructor(private shoppingListService: ShoppingListService) {

      }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }
    
    getRecipe(id: number) {
        return this.recipes.slice()[id];
    }
    
    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
    
    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index:number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
}