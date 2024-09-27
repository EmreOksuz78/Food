class Food{
    constructor(id,
        categoryIds,
        title,
        affordability,
        complexity,
        imageUrl,
        ingredients
    ){
        this.categoryIds=categoryIds;
        this.title=title;
        this.affordability=affordability;
        this.complexity=complexity;
        this.imageUrl=imageUrl;
        this.ingredients=ingredients;
    }
}

export default Food;