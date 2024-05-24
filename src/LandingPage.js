import { createElement } from './utils';

function LandingPage() {
  const title = createElement('h2', { textContent: 'Landing Page' });

  const page3Link = createElement('a', {
    href: '/#/login',
    textContent: 'go to login',
  });

  return createElement('div', {}, [title, page3Link]);
}

export default LandingPage;
