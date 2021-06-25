import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
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
      ];

      constructor(private shoppingListService: ShoppingListService) {

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
}