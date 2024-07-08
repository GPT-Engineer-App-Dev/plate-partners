import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredRecipes = [
    { id: 1, title: "Spaghetti Carbonara", description: "A classic Italian pasta dish.", image: "/placeholder.svg" },
    { id: 2, title: "Chicken Curry", description: "A spicy and flavorful dish.", image: "/placeholder.svg" },
    // Add more featured recipes here
  ];

  const popularCategories = [
    { name: "Breakfast", image: "/placeholder.svg" },
    { name: "Lunch", image: "/placeholder.svg" },
    { name: "Dinner", image: "/placeholder.svg" },
    { name: "Desserts", image: "/placeholder.svg" },
    // Add more categories here
  ];

  return (
    <div className="container mx-auto p-4">
      <section className="text-center mb-8">
        <div className="relative w-full h-[400px] mb-4">
          <img src="/placeholder.svg" alt="Cooking" className="mx-auto object-cover w-full h-full" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
            <h1 className="text-4xl font-bold mb-2">Welcome to Recipe Haven</h1>
            <p className="text-xl mb-4">Discover and share amazing recipes from around the world.</p>
            <Button variant="primary" onClick={() => document.getElementById('featured-recipes').scrollIntoView({ behavior: 'smooth' })}>
              Get Started
            </Button>
          </div>
        </div>
      </section>

      <section id="featured-recipes" className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Featured Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredRecipes.map(recipe => (
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
      </section>

      <section id="popular-categories" className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {popularCategories.map((category, index) => (
            <div key={index} className="text-center">
              <img src={category.image} alt={category.name} className="mx-auto object-cover w-full h-[150px] mb-2" />
              <p className="text-lg font-medium">{category.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;