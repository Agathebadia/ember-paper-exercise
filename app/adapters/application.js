import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  api_key = 'mWJImPSYGRj1CesrTnVJmHyZJDHtl9g2';
  host = 'https://api.giphy.com';
  namespace = 'v1/gifs/trending';
  limit = 30;
  rating = 'g';
}
