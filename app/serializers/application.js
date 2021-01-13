import RESTSerializer from '@ember-data/serializer/rest';
import { underscore } from "@ember/string";

export default class ApplicationSerializer extends RESTSerializer {
  modelNameFromPayloadKey(payloadKey) {
    debugger;
    if (payloadKey === "data") {
      // https://api.emberjs.com/ember-data/3.8/classes/DS.RESTSerializer/methods/modelNameFromPayloadKey?anchor=modelNameFromPayloadKey
      // https://jsonapi.org/
      // data => gif
      // https://www.w3schools.com/jquery/ajax_ajax.asp
      payloadKey = 'gifs';
      return this._super(payloadKey);
    } else {
      return this._super(payloadKey);
    }
  }

  /*   modelNameFromPayloadKey(payloadKey) {
    if (payloadKey === 'blog/post') {
      return this._super(payloadKey.replace('blog/', ''));
    } else {
     return this._super(payloadKey);
    }
  } */

  keyForAttribute(attr) {
    const newAttr = underscore(attr).toLowerCase();
    return newAttr;
  }
}
