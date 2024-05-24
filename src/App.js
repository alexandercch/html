import { createElement } from "./utils";
import { initRouter } from "./router";

function Header() {
  const appTitle = createElement("h1", {
    textContent: "My Goal Tracker Project",
    className: "heading",
  });

  return createElement("header", {}, [appTitle]);
}

function Footer() {
  const copyright = createElement("span", {
    textContent: `Copyright © ${new Date().getFullYear()}`,
  });

  return createElement("footer", {}, [copyright]);
}

function App() {
  const main = createElement("main", {}, []);

  initRouter(main);

  return createElement("div", {}, [Header(), main, Footer()]);
}

export default App;
