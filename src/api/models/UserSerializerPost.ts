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
 * @interface UserSerializerPost
 */
export interface UserSerializerPost {
  /**
   *
   * @type {string}
   * @memberof UserSerializerPost
   */
  mail?: string
  /**
   *
   * @type {string}
   * @memberof UserSerializerPost
   */
  password?: string
  /**
   *
   * @type {boolean}
   * @memberof UserSerializerPost
   */
  newsletter?: boolean
  /**
   *
   * @type {number}
   * @memberof UserSerializerPost
   */
  country_id?: number
  /**
   *
   * @type {number}
   * @memberof UserSerializerPost
   */
  role_id?: number
}

export function UserSerializerPostFromJSON(json: any): UserSerializerPost {
  return {
    mail: !exists(json, 'mail') ? undefined : json['mail'],
    password: !exists(json, 'password') ? undefined : json['password'],
    newsletter: !exists(json, 'newsletter') ? undefined : json['newsletter'],
    country_id: !exists(json, 'country_id') ? undefined : json['country_id'],
    role_id: !exists(json, 'role_id') ? undefined : json['role_id'],
  }
}

export function UserSerializerPostToJSON(value?: UserSerializerPost): any {
  if (value === undefined) {
    return undefined
  }
  return {
    mail: value.mail,
    password: value.password,
    newsletter: value.newsletter,
    country_id: value.country_id,
    role_id: value.role_id,
  }
}