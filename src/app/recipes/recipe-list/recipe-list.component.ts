import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'this is test', 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Prawns_Masala_Recipe.jpg'),
    new Recipe('An another Test Recipe', 'this is test', 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Prawns_Masala_Recipe.jpg')
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
