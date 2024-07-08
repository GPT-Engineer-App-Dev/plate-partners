import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const [search, setSearch] = useState("");

  const recipes = [
    { id: 1, title: "Spaghetti Carbonara", description: "A classic Italian pasta dish.", image: "/placeholder.svg" },
    { id: 2, title: "Chicken Curry", description: "A spicy and flavorful dish.", image: "/placeholder.svg" },
    // Add more recipes here
  ];

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <Input
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRecipes.map(recipe => (
          <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
            <Card>
              <img src={recipe.image} alt={recipe.title} className="mx-auto object-cover w-full h-[200px]" />
              <CardHeader>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;