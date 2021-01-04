import RESTSerializer from '@ember-data/serializer/rest';
import { underscore } from "@ember/string";

export default class ApplicationSerializer extends RESTSerializer {
  modelNameFromPayloadKey(payloadKey) {
    if (payloadKey === "data") {
      return this._super(payloadKey.replace("data", "gif"));
    } else {
      return this._super(payloadKey);
    }
  };
  keyForAttribute(attr) {
    return underscore(attr);
  }
}
