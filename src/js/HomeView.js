import { createElement } from "./utils";
import { getFeaturedRecipes } from "./APIHandler";
import heroImg from "../images/city7-9.webp";

function HomeView() {
  const hero = createElement("img", {
    src: heroImg,
    alt: "Hero Image",
    className: "hero",
  });
  const title = createElement("h2", {
    textContent: "Get to Know US",
    className: "title-heading",
  });
  const intro = createElement("p", {
    textContent:
      "Welcome to Lulu Bakery, It all began with Charly, a 16 year old boy looking for work in a small desert town called Swakopmund. He swept the floor, made puff pastry and washed dishes under the stern guidance of the German Master Baker, until he was allowed to learn the cakes: classics like Black Forest Cake and Sacher Torte.",
    className: "intro-paragraph",
  });
  const invite = createElement("p", {
    textContent:
      "At Lulu Bakery, we believe that baking should be accessible and rewarding—a way to bring loved ones together, one pastry at a time. Come explore, create, and share the love of baking with us!",
    className: "intro-paragraph",
  });

  const featuredSection = createElement("div", {
    className: "featured-section",
  });

  getFeaturedRecipes().then((recipes) => {
    // Randomly select up to 4 recipes
    const selectedRecipes = recipes.sort(() => 0.5 - Math.random()).slice(0, 4);
    const recipeList = selectedRecipes.map((recipe) =>
      createElement("div", { className: "recipe-card" }, [
        createElement("h4", { textContent: recipe.strMeal }),
        createElement("img", { src: recipe.strMealThumb, alt: recipe.strMeal }),
        createElement("button", {
          textContent: "Explore More",
          className: "explore-button",
          onclick: () => {
            window.location.hash = "#/recipes";
          },
        }),
      ]),
    );
    featuredSection.append(...recipeList);
  });

  return createElement("div", {}, [
    hero,
    title,
    intro,
    invite,
    featuredSection,
  ]);
}

export default HomeView;
