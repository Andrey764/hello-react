export class CulinaryRecipe{
    constructor(Title, Ingredients, CookingSequence, Image){
        this.Title = Title;
        this.Ingredients = Ingredients;
        this.CookingSequence = CookingSequence;
        this.Image = Image;
    }
    GetCulinaryRecipeHTML(){
        return(
            <div>
                <h2>{this.Title}</h2>
                <ul>
                {this.Ingredients.map(ingredient=>(ingredient.GetIngredientHTML()))}
                </ul>
                <div>{this.CookingSequence}</div>
            </div>
        );
    }
}

export class Ingredient{
    constructor(Name, Quantity){
        this.Name=Name;
        this.Quantity=Quantity;
    }
    GetIngredientHTML(){
        return (
            <li>
                {this.Name}: {this.Quantity}
            </li>
        );
    }
}