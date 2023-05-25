const API_KEY = "d888a4adb36446ba9eebf48ac9b2f514 ";

async function getRecipes() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
  );

  const data = await response.json();

  return data.recipes;
}

async function init() {
  const recipes = await getRecipes();
  console.log(recipes);
}

init();
