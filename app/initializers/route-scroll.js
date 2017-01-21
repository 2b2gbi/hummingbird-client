import Route from 'ember-route';
import canUseDOM from 'ember-metrics/utils/can-use-dom';

export function initialize() {
  Route.reopen({
    actions: {
      didTransition() {
        if (canUseDOM) { window.scroll(0, 0); }
        return true;
      }
    }
  });
}

export default {
  name: 'route-scroll',
  initialize
};
