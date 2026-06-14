import { createElement } from "./utils";
import { initRouter } from "./router";

function Header() {
  const appTitle = createElement("h1", {
    textContent: "Lulu Bakery",
    className: "heading",
  });

  // nav items
  const homeLink = createElement("a", {
    href: "#/home",
    textContent: "Home",
  });
  const recipeLink = createElement("a", {
    href: "#/recipes",
    textContent: "Recipes",
  });
  const favoriterecipesLink = createElement("a", {
    href: "#/favoriterecipes",
    textContent: "Favorites",
  });

  const nav = createElement("nav", {}, [
    homeLink,
    recipeLink,
    favoriterecipesLink,
  ]);

  return createElement("header", {}, [appTitle, nav]);
}

function Footer() {
  const copyright = createElement("span", {
    textContent: `© ${new Date().getFullYear()} Lulu Bakery`,
  });

  const footerP = createElement("p", {
    textContent: "All rights reserved",
  });
  const lastModification = createElement("p", {
    textContent: `Last Modification: ${new Date().toLocaleString()}`,
  });

  const contactInfo = createElement("div", {}, [
    createElement("p", { textContent: "Contact Us" }),
    createElement("p", { textContent: "Phone: +27 21 123 4567" }),
    createElement("p", { textContent: "Email: lulubakery@gmail.com" }),
    createElement("p", {
      textContent: "Address: 38 canterbury St, District six, Cape Town, South Africa",
    }),
  ]);

  const credit = createElement("p", {}, [
    createElement("a", {
      href: "https://www.themealdb.com/",
      textContent: "Themealdb",
      target: "_blank",
    }),
  ]);

  return createElement("footer", {}, [
    contactInfo,
    credit,
    copyright,
    footerP,
    lastModification,
  ]);
}

function App() {
  const main = createElement("main", {}, []);

  initRouter(main);

  return createElement("div", {}, [Header(main), main, Footer()]);
}

document.getElementById("root").appendChild(App());

export default App;
