import Model, { attr } from '@ember-data/model';
import { computed, get } from "@ember/object";

export default class GifModel extends Model {
  @attr title;
  @attr images;
  @attr url;
  imageUrl = computed('images', function(){
    return get(this, 'images.original.url');
  });
  previewImageUrl = computed('images', function(){
    return get(this, 'images.fixed_width.url') ? get(this, 'images.fixed_width.url') : get(this, 'imageUrl')
  })
}
