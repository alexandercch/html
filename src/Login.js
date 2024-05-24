import { createElement } from "./utils";

function Login() {
  const title = createElement("h2", { textContent: "Login Page" });

  const dashboardLink = createElement("a", {
    href: "/#/dashboard",
    textContent: "go to dashboard",
  });

  const loginButton = createElement("button", {
    id: "loginButton",
    textContent: "Login",
  });
  loginButton.addEventListener("click", ()=> {
    //  verify user exist in mock data
    window.location.hash = '#/dashboard';
  })
  return createElement("div", {}, [title, dashboardLink, loginButton]);
}

export default Login;
