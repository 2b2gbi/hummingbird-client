import Route from 'ember-route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import DataErrorMixin from 'client/mixins/routes/data-error';
import jQuery from 'jquery';
import canUseDOM from 'ember-metrics/utils/can-use-dom';

export default Route.extend(AuthenticatedRouteMixin, DataErrorMixin, {
  titleToken: 'Settings',
  authenticationRoute: 'dashboard',

  activate() {
    this._super(...arguments);
    if (canUseDOM) {
      jQuery('body').addClass('settings-page');
    }
  },

  deactivate() {
    this._super(...arguments);
    if (canUseDOM) {
      jQuery('body').removeClass('settings-page');
    }
  }
});
