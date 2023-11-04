import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Recipe Title',
      'This is the recipe description',
      'assets/recipe-image.jpg',
      [new Ingredient('tomato', 1), new Ingredient('pasta', 1)]
    ),
    new Recipe(
      'Recipe Title',
      'This is another recipe description',
      'assets/recipe-image.jpg',
      [new Ingredient('tomato', 1), new Ingredient('pasta', 1)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredient: Ingredient[]) {
    this.slService.addIngredients(ingredient);
  }
}
