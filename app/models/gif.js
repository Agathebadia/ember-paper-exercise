import Model, { attr } from '@ember-data/model';
import { computed } from '@ember/object';

export default class GifModel extends Model {
  @attr title;
  @attr images;
  @attr url;

}
