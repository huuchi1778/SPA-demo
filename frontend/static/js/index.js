import Dashboard from './views/Dashboard';
import Posts from './views/Posts';
import Settings from './views/Settings';

document.addEventListener('DOMContentLoaded', () => {
  router();

  window.addEventListener('popstate', router);

  document.addEventListener('click', event => {
    if (!event.target.matches('[data-link')) return;
    event.preventDefault();
    navigateTo(event.target.href);

  });

});


function router() {
  const routes = [
    {
      path: '/',
      View: Dashboard
    },
    {
      path: '/posts',
      View: Posts,
    },
    {
      path: '/settings',
      View: Settings
    }
  ];

  const potentialMatches = routes.map(route => {
    return {
      route: route,
      isMatched: location.pathname === route.path
    };
  });

  let match = potentialMatches.find(potentialMatch => potentialMatch.isMatched);

  if (!match) {
    match = {
      route: routes[0],
      isMatched: true
    };
  }

  const view = new match.route.View();

  document.querySelector('#app').innerHTML = view.getHTML();
}

function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}
