import { EventEmitter, Injectable, Output } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService {
    @Output() ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients : Ingredient[] = [
        new Ingredient('apple', 100),
        new Ingredient('tomatos', 5)
      ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}