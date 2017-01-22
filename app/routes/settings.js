import Route from 'ember-route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import DataErrorMixin from 'client/mixins/routes/data-error';

export default Route.extend(AuthenticatedRouteMixin, DataErrorMixin, {
  titleToken: 'Settings'
});
