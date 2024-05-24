import { createElement } from './utils';

function Login() {
  const title = createElement('h2', { textContent: 'Login Page' });

  const dashboardLink = createElement('a', {
    href: '/#/dashboard',
    textContent: 'go to dashboard',
  });

  return createElement('div', {}, [title, dashboardLink]);
}

export default Login;
