import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class GifsComponent extends Component {
  @tracked images;

  get imageUrl() {
    return this.images.original.url
  };
  get previewImageUrl() {
    return this.images.fixed_width.url ? this.images.fixed_width.url : this.imageUrl
  };
}
