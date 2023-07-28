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

import { QueryConfig, ResponseBody } from 'redux-query'
import {
  PropertySerializerPost,
  PropertySerializerPostToJSON,
  PropertySerializerPut,
  PropertySerializerPutToJSON,
  PropertySerializerRead,
  PropertySerializerReadFromJSON,
} from '../models'
import * as runtime from '../runtime'

export interface PropertiesCreatePropertyRequest {
  propertySerializerPost: PropertySerializerPost
}

export interface PropertiesDeletePropertyRequest {
  id: number
}

export interface PropertiesGetPropertiesRequest {
  page?: number
}

export interface PropertiesGetPropertiesByFilterRequest {
  propertyType?: number
  price?: number
  surface?: string
  landSize?: string
  bathroom?: number
  kitchen?: number
  toilet?: number
  bedroom?: number
  elevator?: boolean
  balcony?: boolean
  terrace?: boolean
  cellar?: boolean
  parking?: boolean
  numberRoom?: number
  pool?: boolean
  caretaker?: boolean
  fiberDeployed?: boolean
  duplex?: boolean
  topFloor?: boolean
  garage?: boolean
  workDone?: boolean
  lifeAnnuity?: boolean
  groundFloor?: boolean
  landSize1?: string
  garden?: boolean
  dpe?: number
  city?: string
  zipcode?: string
}

export interface PropertiesGetPropertyByIdRequest {
  id: number
}

export interface PropertiesUpdatePropertyRequest {
  id: number
  propertySerializerPut?: PropertySerializerPut
}

/**
 * Create a new property
 */
function propertiesCreatePropertyRaw<T>(
  requestParameters: PropertiesCreatePropertyRequest,
  requestConfig: runtime.TypedQueryConfig<T, PropertySerializerRead> = {},
): QueryConfig<T> {
  if (
    requestParameters.propertySerializerPost === null ||
    requestParameters.propertySerializerPost === undefined
  ) {
    throw new runtime.RequiredError(
      'propertySerializerPost',
      'Required parameter requestParameters.propertySerializerPost was null or undefined when calling propertiesCreateProperty.',
    )
  }

  let queryParameters = null

  const headerParameters: runtime.HttpHeaders = {}

  headerParameters['Content-Type'] = 'application/json'

  const { meta = {} } = requestConfig

  meta.authType = ['bearer']
  const config: QueryConfig<T> = {
    url: `${runtime.Configuration.basePath}/properties`,
    meta,
    update: requestConfig.update,
    queryKey: requestConfig.queryKey,
    optimisticUpdate: requestConfig.optimisticUpdate,
    force: requestConfig.force,
    rollback: requestConfig.rollback,
    options: {
      method: 'POST',
      headers: headerParameters,
    },
    body:
      queryParameters ||
      PropertySerializerPostToJSON(requestParameters.propertySerializerPost),
  }

  const { transform: requestTransform } = requestConfig
  if (requestTransform) {
    config.transform = (body: ResponseBody, text: ResponseBody) =>
      requestTransform(PropertySerializerReadFromJSON(body), text)
  }

  return config
}

/**
 * Create a new property
 */
export function propertiesCreateProperty<T>(
  requestParameters: PropertiesCreatePropertyRequest,
  requestConfig?: runtime.TypedQueryConfig<T, PropertySerializerRead>,
): QueryConfig<T> {
  return propertiesCreatePropertyRaw(requestParameters, requestConfig)
}

/**
 * Delete a property by its id
 */
function propertiesDeletePropertyRaw<T>(
  requestParameters: PropertiesDeletePropertyRequest,
  requestConfig: runtime.TypedQueryConfig<T, void> = {},
): QueryConfig<T> {
  if (requestParameters.id === null || requestParameters.id === undefined) {
    throw new runtime.RequiredError(
      'id',
      'Required parameter requestParameters.id was null or undefined when calling propertiesDeleteProperty.',
    )
  }

  let queryParameters = null

  const headerParameters: runtime.HttpHeaders = {}

  const { meta = {} } = requestConfig

  meta.authType = ['bearer']
  const config: QueryConfig<T> = {
    url: `${runtime.Configuration.basePath}/properties/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(requestParameters.id)),
    ),
    meta,
    update: requestConfig.update,
    queryKey: requestConfig.queryKey,
    optimisticUpdate: requestConfig.optimisticUpdate,
    force: requestConfig.force,
    rollback: requestConfig.rollback,
    options: {
      method: 'DELETE',
      headers: headerParameters,
    },
    body: queryParameters,
  }

  const { transform: requestTransform } = requestConfig
  if (requestTransform) {
  }

  return config
}

/**
 * Delete a property by its id
 */
export function propertiesDeleteProperty<T>(
  requestParameters: PropertiesDeletePropertyRequest,
  requestConfig?: runtime.TypedQueryConfig<T, void>,
): QueryConfig<T> {
  return propertiesDeletePropertyRaw(requestParameters, requestConfig)
}

/**
 * Return a list of properties
 */
function propertiesGetPropertiesRaw<T>(
  requestParameters: PropertiesGetPropertiesRequest,
  requestConfig: runtime.TypedQueryConfig<
    T,
    Array<PropertySerializerRead>
  > = {},
): QueryConfig<T> {
  let queryParameters = null

  queryParameters = {
    page: requestParameters.page,
  }

  const headerParameters: runtime.HttpHeaders = {}

  const { meta = {} } = requestConfig

  meta.authType = ['bearer']
  const config: QueryConfig<T> = {
    url: `${runtime.Configuration.basePath}/properties`,
    meta,
    update: requestConfig.update,
    queryKey: requestConfig.queryKey,
    optimisticUpdate: requestConfig.optimisticUpdate,
    force: requestConfig.force,
    rollback: requestConfig.rollback,
    options: {
      method: 'GET',
      headers: headerParameters,
    },
    body: queryParameters,
  }

  const { transform: requestTransform } = requestConfig
  if (requestTransform) {
    config.transform = (body: ResponseBody, text: ResponseBody) =>
      requestTransform(body.map(PropertySerializerReadFromJSON), text)
  }

  return config
}

/**
 * Return a list of properties
 */
export function propertiesGetProperties<T>(
  requestParameters: PropertiesGetPropertiesRequest,
  requestConfig?: runtime.TypedQueryConfig<T, Array<PropertySerializerRead>>,
): QueryConfig<T> {
  return propertiesGetPropertiesRaw(requestParameters, requestConfig)
}

/**
 * Return a list of properties by filter
 */
function propertiesGetPropertiesByFilterRaw<T>(
  requestParameters: PropertiesGetPropertiesByFilterRequest,
  requestConfig: runtime.TypedQueryConfig<
    T,
    Array<PropertySerializerRead>
  > = {},
): QueryConfig<T> {
  let queryParameters = null

  queryParameters = {
    property_type: requestParameters.propertyType,
    price: requestParameters.price,
    surface: requestParameters.surface,
    land_size: requestParameters.landSize,
    bathroom: requestParameters.bathroom,
    kitchen: requestParameters.kitchen,
    toilet: requestParameters.toilet,
    bedroom: requestParameters.bedroom,
    elevator: requestParameters.elevator,
    balcony: requestParameters.balcony,
    terrace: requestParameters.terrace,
    cellar: requestParameters.cellar,
    parking: requestParameters.parking,
    number_room: requestParameters.numberRoom,
    pool: requestParameters.pool,
    caretaker: requestParameters.caretaker,
    fiber_deployed: requestParameters.fiberDeployed,
    duplex: requestParameters.duplex,
    top_floor: requestParameters.topFloor,
    garage: requestParameters.garage,
    work_done: requestParameters.workDone,
    life_annuity: requestParameters.lifeAnnuity,
    ground_floor: requestParameters.groundFloor,
    land_size_1: requestParameters.landSize1,
    garden: requestParameters.garden,

    dpe: requestParameters.dpe,
    city: requestParameters.city,
    zipcode: requestParameters.zipcode,
  }

  const headerParameters: runtime.HttpHeaders = {}

  const { meta = {} } = requestConfig

  meta.authType = ['bearer']
  const config: QueryConfig<T> = {
    url: `${runtime.Configuration.basePath}/properties/properties_filter`,
    meta,
    update: requestConfig.update,
    queryKey: requestConfig.queryKey,
    optimisticUpdate: requestConfig.optimisticUpdate,
    force: requestConfig.force,
    rollback: requestConfig.rollback,
    options: {
      method: 'GET',
      headers: headerParameters,
    },
    body: queryParameters,
  }

  const { transform: requestTransform } = requestConfig
  if (requestTransform) {
    config.transform = (body: ResponseBody, text: ResponseBody) =>
      requestTransform(body.map(PropertySerializerReadFromJSON), text)
  }

  return config
}

/**
 * Return a list of properties by filter
 */
export function propertiesGetPropertiesByFilter<T>(
  requestParameters: PropertiesGetPropertiesByFilterRequest,
  requestConfig?: runtime.TypedQueryConfig<T, Array<PropertySerializerRead>>,
): QueryConfig<T> {
  return propertiesGetPropertiesByFilterRaw(requestParameters, requestConfig)
}

/**
 * Return a property by his id
 */
function propertiesGetPropertyByIdRaw<T>(
  requestParameters: PropertiesGetPropertyByIdRequest,
  requestConfig: runtime.TypedQueryConfig<T, PropertySerializerRead> = {},
): QueryConfig<T> {
  if (requestParameters.id === null || requestParameters.id === undefined) {
    throw new runtime.RequiredError(
      'id',
      'Required parameter requestParameters.id was null or undefined when calling propertiesGetPropertyById.',
    )
  }

  let queryParameters = null

  const headerParameters: runtime.HttpHeaders = {}

  const { meta = {} } = requestConfig

  meta.authType = ['bearer']
  const config: QueryConfig<T> = {
    url: `${runtime.Configuration.basePath}/properties/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(requestParameters.id)),
    ),
    meta,
    update: requestConfig.update,
    queryKey: requestConfig.queryKey,
    optimisticUpdate: requestConfig.optimisticUpdate,
    force: requestConfig.force,
    rollback: requestConfig.rollback,
    options: {
      method: 'GET',
      headers: headerParameters,
    },
    body: queryParameters,
  }

  const { transform: requestTransform } = requestConfig
  if (requestTransform) {
    config.transform = (body: ResponseBody, text: ResponseBody) =>
      requestTransform(PropertySerializerReadFromJSON(body), text)
  }

  return config
}

/**
 * Return a property by his id
 */
export function propertiesGetPropertyById<T>(
  requestParameters: PropertiesGetPropertyByIdRequest,
  requestConfig?: runtime.TypedQueryConfig<T, PropertySerializerRead>,
): QueryConfig<T> {
  return propertiesGetPropertyByIdRaw(requestParameters, requestConfig)
}

/**
 * Update a property by its id
 */
function propertiesUpdatePropertyRaw<T>(
  requestParameters: PropertiesUpdatePropertyRequest,
  requestConfig: runtime.TypedQueryConfig<T, PropertySerializerRead> = {},
): QueryConfig<T> {
  if (requestParameters.id === null || requestParameters.id === undefined) {
    throw new runtime.RequiredError(
      'id',
      'Required parameter requestParameters.id was null or undefined when calling propertiesUpdateProperty.',
    )
  }

  let queryParameters = null

  const headerParameters: runtime.HttpHeaders = {}

  headerParameters['Content-Type'] = 'application/json'

  const { meta = {} } = requestConfig

  meta.authType = ['bearer']
  const config: QueryConfig<T> = {
    url: `${runtime.Configuration.basePath}/properties/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(requestParameters.id)),
    ),
    meta,
    update: requestConfig.update,
    queryKey: requestConfig.queryKey,
    optimisticUpdate: requestConfig.optimisticUpdate,
    force: requestConfig.force,
    rollback: requestConfig.rollback,
    options: {
      method: 'PUT',
      headers: headerParameters,
    },
    body:
      queryParameters ||
      PropertySerializerPutToJSON(requestParameters.propertySerializerPut),
  }

  const { transform: requestTransform } = requestConfig
  if (requestTransform) {
    config.transform = (body: ResponseBody, text: ResponseBody) =>
      requestTransform(PropertySerializerReadFromJSON(body), text)
  }

  return config
}

/**
 * Update a property by its id
 */
export function propertiesUpdateProperty<T>(
  requestParameters: PropertiesUpdatePropertyRequest,
  requestConfig?: runtime.TypedQueryConfig<T, PropertySerializerRead>,
): QueryConfig<T> {
  return propertiesUpdatePropertyRaw(requestParameters, requestConfig)
}