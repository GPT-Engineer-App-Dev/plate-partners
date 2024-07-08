import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RecipeDetail = () => {
  const { id } = useParams();

  const recipe = {
    id,
    title: "Spaghetti Carbonara",
    image: "/placeholder.svg",
    ingredients: ["200g spaghetti", "100g pancetta", "2 large eggs", "50g pecorino cheese", "50g parmesan", "2 plump garlic cloves", "50g unsalted butter", "sea salt", "freshly ground black pepper"],
    instructions: [
      "Put a large saucepan of water on to boil.",
      "Finely chop the pancetta, having first removed any rind.",
      "Beat the eggs in a medium bowl, season with a little freshly grated black pepper and set everything aside.",
      "Add 1 tsp salt to the boiling water, add the spaghetti and when the water comes back to the boil, cook at a constant simmer.",
      "Squash the garlic with the blade of a knife, just to bruise it.",
      "Melt the butter in a large frying pan and, when it starts to foam, add the pancetta and garlic.",
      "Keep the heat hot until the pancetta is golden and crisp.",
      "Remove and discard the garlic.",
      "Keep the heat under the pancetta on low.",
      "When the pasta is ready, lift it from the water with a pasta fork or tongs and put it in the frying pan with the pancetta.",
      "Mix most of the cheese in with the eggs, keeping a small handful back for sprinkling over later.",
      "Take the pan of spaghetti and pancetta off the heat.",
      "Quickly pour in the eggs and cheese.",
      "Use the tongs or a long fork to lift up the spaghetti so it mixes easily with the egg mixture.",
      "Add extra pasta cooking water to keep it saucy.",
      "Serve immediately with a little sprinkling of the remaining cheese and a grating of black pepper."
    ],
    author: {
      name: "John Doe",
      bio: "A passionate home cook who loves to share recipes with the world."
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <img src={recipe.image} alt={recipe.title} className="mx-auto object-cover w-full h-[400px]" />
        <CardHeader>
          <CardTitle>{recipe.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside mb-4">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside mb-4">
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
          <h2 className="text-2xl font-semibold mb-2">Author</h2>
          <p className="mb-1"><strong>{recipe.author.name}</strong></p>
          <p>{recipe.author.bio}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecipeDetail;