import Route from 'ember-route';
import PaginationMixin from 'client/mixins/routes/pagination';
import DataErrorMixin from 'client/mixins/routes/data-error';
import jQuery from 'jquery';
import canUseDOM from 'ember-metrics/utils/can-use-dom';

export default Route.extend(PaginationMixin, DataErrorMixin, {
  titleToken: 'Reports',

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
  },
});
