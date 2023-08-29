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
 * @interface PropertySerializerPost
 */
export interface PropertySerializerPost {
  /**
   *
   * @type {string}
   * @memberof PropertySerializerPost
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof PropertySerializerPost
   */
  description?: string
  /**
   *
   * @type {string}
   * @memberof PropertySerializerPost
   */
  signature_date?: string
  /**
   *
   * @type {number}
   * @memberof PropertySerializerPost
   */
  property_type?: number
  /**
   *
   * @type {number}
   * @memberof PropertySerializerPost
   */
  price?: number
  /**
   *
   * @type {string}
   * @memberof PropertySerializerPost
   */
  surface?: string
  /**
   *
   * @type {string}
   * @memberof PropertySerializerPost
   */
  land_size?: string
  /**
   *
   * @type {number}
   * @memberof PropertySerializerPost
   */
  bathroom?: number
  /**
   *
   * @type {number}
   * @memberof PropertySerializerPost
   */
  kitchen?: number
  /**
   *
   * @type {number}
   * @memberof PropertySerializerPost
   */
  toilet?: number
  /**
   *
   * @type {number}
   * @memberof PropertySerializerPost
   */
  bedroom?: number
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerPost
   */
  elevator?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerPost
   */
  balcony?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerPost
   */
  terrace?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerPost
   */
  cellar?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerPost
   */
  parking?: boolean
  /**
   *
   * @type {number}
   * @memberof PropertySerializerPost
   */
  number_room?: number
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerPost
   */
  pool?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerPost
   */
  caretaker?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerPost
   */
  fiber_deployed?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerPost
   */
  duplex?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerPost
   */
  top_floor?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerPost
   */
  garage?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerPost
   */
  work_done?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerPost
   */
  life_annuity?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerPost
   */
  ground_floor?: boolean
  /**
   *
   * @type {string}
   * @memberof PropertySerializerPost
   */
  land_size_1?: string
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerPost
   */
  garden?: boolean
  /**
   *
   * @type {number}
   * @memberof PropertySerializerPost
   */
  owner_id?: number
  /**
   *
   * @type {number}
   * @memberof PropertySerializerPost
   */
  status_id?: number
  /**
   *
   * @type {number}
   * @memberof PropertySerializerPost
   */
  tenant_id?: number
  /**
   *
   * @type {number}
   * @memberof PropertySerializerPost
   */
  address_id?: number
  /**
   *
   * @type {number}
   * @memberof PropertySerializerPost
   */
  latitude?: number
  /**
   *
   * @type {number}
   * @memberof PropertySerializerPost
   */
  longitude?: number
  /**
   *
   * @type {number}
   * @memberof PropertySerializerPost
   */
  dpe?: number
  /**
   *
   * @type {number}
   * @memberof PropertySerializerPost
   */
  agency_id?: number
}

export function PropertySerializerPostFromJSON(
  json: any,
): PropertySerializerPost {
  return {
    name: !exists(json, 'name') ? undefined : json['name'],
    description: !exists(json, 'description') ? undefined : json['description'],
    signature_date: !exists(json, 'signature_date')
      ? undefined
      : json['signature_date'],
    property_type: !exists(json, 'property_type')
      ? undefined
      : json['property_type'],
    price: !exists(json, 'price') ? undefined : json['price'],
    surface: !exists(json, 'surface') ? undefined : json['surface'],
    land_size: !exists(json, 'land_size') ? undefined : json['land_size'],
    bathroom: !exists(json, 'bathroom') ? undefined : json['bathroom'],
    kitchen: !exists(json, 'kitchen') ? undefined : json['kitchen'],
    toilet: !exists(json, 'toilet') ? undefined : json['toilet'],
    bedroom: !exists(json, 'bedroom') ? undefined : json['bedroom'],
    elevator: !exists(json, 'elevator') ? undefined : json['elevator'],
    balcony: !exists(json, 'balcony') ? undefined : json['balcony'],
    terrace: !exists(json, 'terrace') ? undefined : json['terrace'],
    cellar: !exists(json, 'cellar') ? undefined : json['cellar'],
    parking: !exists(json, 'parking') ? undefined : json['parking'],
    number_room: !exists(json, 'number_room') ? undefined : json['number_room'],
    pool: !exists(json, 'pool') ? undefined : json['pool'],
    caretaker: !exists(json, 'caretaker') ? undefined : json['caretaker'],
    fiber_deployed: !exists(json, 'fiber_deployed')
      ? undefined
      : json['fiber_deployed'],
    duplex: !exists(json, 'duplex') ? undefined : json['duplex'],
    top_floor: !exists(json, 'top_floor') ? undefined : json['top_floor'],
    garage: !exists(json, 'garage') ? undefined : json['garage'],
    work_done: !exists(json, 'work_done') ? undefined : json['work_done'],
    life_annuity: !exists(json, 'life_annuity')
      ? undefined
      : json['life_annuity'],
    ground_floor: !exists(json, 'ground_floor')
      ? undefined
      : json['ground_floor'],
    land_size_1: !exists(json, 'land_size_1') ? undefined : json['land_size_1'],
    garden: !exists(json, 'garden') ? undefined : json['garden'],
    owner_id: !exists(json, 'owner_id') ? undefined : json['owner_id'],
    status_id: !exists(json, 'status_id') ? undefined : json['status_id'],
    tenant_id: !exists(json, 'tenant_id') ? undefined : json['tenant_id'],
    address_id: !exists(json, 'address_id') ? undefined : json['address_id'],
    latitude: !exists(json, 'latitude') ? undefined : json['latitude'],
    longitude: !exists(json, 'longitude') ? undefined : json['longitude'],
    dpe: !exists(json, 'dpe') ? undefined : json['dpe'],
    agency_id: !exists(json, 'agency_id') ? undefined : json['agency_id'],
  }
}

export function PropertySerializerPostToJSON(
  value?: PropertySerializerPost,
): any {
  if (value === undefined) {
    return undefined
  }
  return {
    name: value.name,
    description: value.description,
    signature_date: value.signature_date,
    property_type: value.property_type,
    price: value.price,
    surface: value.surface,
    land_size: value.land_size,
    bathroom: value.bathroom,
    kitchen: value.kitchen,
    toilet: value.toilet,
    bedroom: value.bedroom,
    elevator: value.elevator,
    balcony: value.balcony,
    terrace: value.terrace,
    cellar: value.cellar,
    parking: value.parking,
    number_room: value.number_room,
    pool: value.pool,
    caretaker: value.caretaker,
    fiber_deployed: value.fiber_deployed,
    duplex: value.duplex,
    top_floor: value.top_floor,
    garage: value.garage,
    work_done: value.work_done,
    life_annuity: value.life_annuity,
    ground_floor: value.ground_floor,
    land_size_1: value.land_size_1,
    garden: value.garden,
    owner_id: value.owner_id,
    status_id: value.status_id,
    tenant_id: value.tenant_id,
    address_id: value.address_id,
    latitude: value.latitude,
    longitude: value.longitude,
    dpe: value.dpe,
    agency_id: value.agency_id,
  }
}
