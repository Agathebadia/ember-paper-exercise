import Route from '@ember/routing/route';

export default class GifsRoute extends Route {
  model() {
    return this.store.findAll('gif');
  }
}
