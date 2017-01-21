import Service from 'ember-service';
import service from 'ember-service/inject';
import get from 'ember-metal/get';

export default Service.extend({
  fastboot: service(),

  getHost() {
    if (get(this, 'fastboot.isFastBoot')) {
      const loc = get(this, 'fastboot.request');
      return `${get(loc, 'protocol')}://${get(loc, 'host')}`;
    }
    const loc = window.location;
    return `${loc.protocol}//${loc.host}`;
  },

  getPath() {
    return get(this, 'fastboot.isFastBoot') ?
      get(this, 'fastboot.request.path') : window.location.pathname;
  },

  getFullURL() {
    const host = this.getHost();
    const path = this.getPath();
    return `${host}${path}`;
  }
});
