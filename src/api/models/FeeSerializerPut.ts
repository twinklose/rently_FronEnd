// tslint:disable
/**
 * Api documentation
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface FeeSerializerPut
 */
export interface FeeSerializerPut {
  /**
   *
   * @type {string}
   * @memberof FeeSerializerPut
   */
  rent_fee?: string
  /**
   *
   * @type {string}
   * @memberof FeeSerializerPut
   */
  sell_fee?: string
  /**
   *
   * @type {string}
   * @memberof FeeSerializerPut
   */
  square_fee?: string
  /**
   *
   * @type {string}
   * @memberof FeeSerializerPut
   */
  gestion_fee?: string
}

export function FeeSerializerPutFromJSON(json: any): FeeSerializerPut {
  return {
    rent_fee: !exists(json, 'rent_fee') ? undefined : json['rent_fee'],
    sell_fee: !exists(json, 'sell_fee') ? undefined : json['sell_fee'],
    square_fee: !exists(json, 'square_fee') ? undefined : json['square_fee'],
    gestion_fee: !exists(json, 'gestion_fee') ? undefined : json['gestion_fee'],
  }
}

export function FeeSerializerPutToJSON(value?: FeeSerializerPut): any {
  if (value === undefined) {
    return undefined
  }
  return {
    rent_fee: value.rent_fee,
    sell_fee: value.sell_fee,
    square_fee: value.square_fee,
    gestion_fee: value.gestion_fee,
  }
}
