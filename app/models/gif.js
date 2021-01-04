import Model, { attr } from '@ember-data/model';

export default class GifModel extends Model {
  @attr title;
  @attr images;
  @attr url;
  // get imageUrl() {
  //   return this.images.original.url
  // };
  // get previewImageUrl() {
  //   return this.images.fixed_width.url ? this.images.fixed_width.url : this.imageUrl
  // };
  // imageUrl = computed('images', function(){
  //   return get(this, 'images.original.url');
  // });
  // previewImageUrl = computed('images', function(){
  //   return get(this, 'images.fixed_width.url') ? get(this, 'images.fixed_width.url') : get(this, 'imageUrl')
  // })
}
