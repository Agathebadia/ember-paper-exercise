import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  api_key = 'kii4vFTdbMEBZ2jq9WRE10gVQyW7gvCj';
  host = 'https://api.giphy.com';
  namespace = 'v1/gifs/trending';
  limit = 30;
  rating = 'g';

  urlForFindAll(modelName, snapshot) {
    return `${this.host}/${this.namespace}?api_key=${this.api_key}&${this.limit}&${this.rating}`;
  }
}
