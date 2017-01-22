import Route from 'ember-route';
import PaginationMixin from 'client/mixins/routes/pagination';
import DataErrorMixin from 'client/mixins/routes/data-error';

export default Route.extend(PaginationMixin, DataErrorMixin, {
  titleToken: 'Reports'
});
