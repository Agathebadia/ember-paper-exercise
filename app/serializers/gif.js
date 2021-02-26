import JSONSerializer from '@ember-data/serializer/json';
import { underscore } from "@ember/string";

export default class GifSerializer extends JSONSerializer {
  // modelNameFromPayloadKey(payloadKey) {
  //   if (payloadKey === "data") {
  //     return this._super(payloadKey.replace('data', 'gif'));
  //   } else {
  //     return this._super(payloadKey);
  //   }
  // }

  /*   modelNameFromPayloadKey(payloadKey) {
    if (payloadKey === 'blog/post') {
      return this._super(payloadKey.replace('blog/', ''));
    } else {
     return this._super(payloadKey);
    }
  } */
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const { data, meta } =  payload ;

    //Deconstruct the payload to add it into another format
    const transformedData = data.map((item) => {
      const { type, id, ...attributes } = item
      return { type, id, attributes }
    })
    //Data, meta must be present in JSONAPI
    return {
      data: transformedData,
      meta
    }
  }

  keyForAttribute(attr) {
    const newAttr = underscore(attr).toLowerCase();
    return newAttr;
  }
}
