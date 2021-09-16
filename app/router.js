import EmberRouter from '@ember/routing/router';
import config from 'uzzi-website/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  // nrgRoutes(this);

  this.route('contacts');
  this.route('about');
});
