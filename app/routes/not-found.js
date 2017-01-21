import Route from 'ember-route';
import get from 'ember-metal/get';
import service from 'ember-service/inject';

export default Route.extend({
  globals: service(),

  // This results in redirecting to `/404` if that isn't the current URL.
  redirect() {
    const notFoundURL = this.router.location.formatURL('/404');
    if (get(this, 'globals').getPath() !== notFoundURL) {
      this.transitionTo('/404');
    }
  }
});
