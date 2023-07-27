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

import { exists, mapValues } from '../runtime'
/**
 *
 * @export
 * @interface AddressSerializerPost
 */
export interface AddressSerializerPost {
  /**
   *
   * @type {string}
   * @memberof AddressSerializerPost
   */
  address?: string
  /**
   *
   * @type {string}
   * @memberof AddressSerializerPost
   */
  city?: string
  /**
   *
   * @type {string}
   * @memberof AddressSerializerPost
   */
  zipcode?: string
  /**
   *
   * @type {string}
   * @memberof AddressSerializerPost
   */
  additionnalInfo?: string
  /**
   *
   * @type {string}
   * @memberof AddressSerializerPost
   */
  longitude?: string
  /**
   *
   * @type {string}
   * @memberof AddressSerializerPost
   */
  latitude?: string
}

export function AddressSerializerPostFromJSON(
  json: any,
): AddressSerializerPost {
  return {
    address: !exists(json, 'address') ? undefined : json['address'],
    city: !exists(json, 'city') ? undefined : json['city'],
    zipcode: !exists(json, 'zipcode') ? undefined : json['zipcode'],
    additionnalInfo: !exists(json, 'additionnal_info')
      ? undefined
      : json['additionnal_info'],
    longitude: !exists(json, 'longitude') ? undefined : json['longitude'],
    latitude: !exists(json, 'latitude') ? undefined : json['latitude'],
  }
}

export function AddressSerializerPostToJSON(
  value?: AddressSerializerPost,
): any {
  if (value === undefined) {
    return undefined
  }
  return {
    address: value.address,
    city: value.city,
    zipcode: value.zipcode,
    additionnal_info: value.additionnalInfo,
    longitude: value.longitude,
    latitude: value.latitude,
  }
}
