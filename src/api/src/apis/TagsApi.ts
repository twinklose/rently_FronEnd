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

import {
  HttpMethods,
  QueryConfig,
  ResponseBody,
  ResponseText,
} from 'redux-query'
import * as runtime from '../runtime'
import {
  TagSerializerPost,
  TagSerializerPostFromJSON,
  TagSerializerPostToJSON,
  TagSerializerPut,
  TagSerializerPutFromJSON,
  TagSerializerPutToJSON,
  TagSerializerRead,
  TagSerializerReadFromJSON,
  TagSerializerReadToJSON,
} from '../models'

export interface TagsCreateTagRequest {
  tagSerializerPost: TagSerializerPost
}

export interface TagsDeleteTagRequest {
  id: number
}

export interface TagsGetTagByIdRequest {
  id: number
}

export interface TagsUpdateTagRequest {
  id: number
  tagSerializerPut?: TagSerializerPut
}

/**
 * Create a new tag
 */
function tagsCreateTagRaw<T>(
  requestParameters: TagsCreateTagRequest,
  requestConfig: runtime.TypedQueryConfig<T, TagSerializerRead> = {},
): QueryConfig<T> {
  if (
    requestParameters.tagSerializerPost === null ||
    requestParameters.tagSerializerPost === undefined
  ) {
    throw new runtime.RequiredError(
      'tagSerializerPost',
      'Required parameter requestParameters.tagSerializerPost was null or undefined when calling tagsCreateTag.',
    )
  }

  let queryParameters = null

  const headerParameters: runtime.HttpHeaders = {}

  headerParameters['Content-Type'] = 'application/json'

  const { meta = {} } = requestConfig

  meta.authType = ['bearer']
  const config: QueryConfig<T> = {
    url: `${runtime.Configuration.basePath}/tags`,
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
      TagSerializerPostToJSON(requestParameters.tagSerializerPost),
  }

  const { transform: requestTransform } = requestConfig
  if (requestTransform) {
    config.transform = (body: ResponseBody, text: ResponseBody) =>
      requestTransform(TagSerializerReadFromJSON(body), text)
  }

  return config
}

/**
 * Create a new tag
 */
export function tagsCreateTag<T>(
  requestParameters: TagsCreateTagRequest,
  requestConfig?: runtime.TypedQueryConfig<T, TagSerializerRead>,
): QueryConfig<T> {
  return tagsCreateTagRaw(requestParameters, requestConfig)
}

/**
 * Delete a Tag by its id
 */
function tagsDeleteTagRaw<T>(
  requestParameters: TagsDeleteTagRequest,
  requestConfig: runtime.TypedQueryConfig<T, void> = {},
): QueryConfig<T> {
  if (requestParameters.id === null || requestParameters.id === undefined) {
    throw new runtime.RequiredError(
      'id',
      'Required parameter requestParameters.id was null or undefined when calling tagsDeleteTag.',
    )
  }

  let queryParameters = null

  const headerParameters: runtime.HttpHeaders = {}

  const { meta = {} } = requestConfig

  meta.authType = ['bearer']
  const config: QueryConfig<T> = {
    url: `${runtime.Configuration.basePath}/tags/{id}`.replace(
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
 * Delete a Tag by its id
 */
export function tagsDeleteTag<T>(
  requestParameters: TagsDeleteTagRequest,
  requestConfig?: runtime.TypedQueryConfig<T, void>,
): QueryConfig<T> {
  return tagsDeleteTagRaw(requestParameters, requestConfig)
}

/**
 * Return a list of all tags
 */
function tagsGetAllTagRaw<T>(
  requestConfig: runtime.TypedQueryConfig<T, Array<TagSerializerRead>> = {},
): QueryConfig<T> {
  let queryParameters = null

  const headerParameters: runtime.HttpHeaders = {}

  const { meta = {} } = requestConfig

  meta.authType = ['bearer']
  const config: QueryConfig<T> = {
    url: `${runtime.Configuration.basePath}/tags`,
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
      requestTransform(body.map(TagSerializerReadFromJSON), text)
  }

  return config
}

/**
 * Return a list of all tags
 */
export function tagsGetAllTag<T>(
  requestConfig?: runtime.TypedQueryConfig<T, Array<TagSerializerRead>>,
): QueryConfig<T> {
  return tagsGetAllTagRaw(requestConfig)
}

/**
 * Return a tag by his id
 */
function tagsGetTagByIdRaw<T>(
  requestParameters: TagsGetTagByIdRequest,
  requestConfig: runtime.TypedQueryConfig<T, TagSerializerRead> = {},
): QueryConfig<T> {
  if (requestParameters.id === null || requestParameters.id === undefined) {
    throw new runtime.RequiredError(
      'id',
      'Required parameter requestParameters.id was null or undefined when calling tagsGetTagById.',
    )
  }

  let queryParameters = null

  const headerParameters: runtime.HttpHeaders = {}

  const { meta = {} } = requestConfig

  meta.authType = ['bearer']
  const config: QueryConfig<T> = {
    url: `${runtime.Configuration.basePath}/tags/{id}`.replace(
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
      requestTransform(TagSerializerReadFromJSON(body), text)
  }

  return config
}

/**
 * Return a tag by his id
 */
export function tagsGetTagById<T>(
  requestParameters: TagsGetTagByIdRequest,
  requestConfig?: runtime.TypedQueryConfig<T, TagSerializerRead>,
): QueryConfig<T> {
  return tagsGetTagByIdRaw(requestParameters, requestConfig)
}

/**
 * Update a tag by its id
 */
function tagsUpdateTagRaw<T>(
  requestParameters: TagsUpdateTagRequest,
  requestConfig: runtime.TypedQueryConfig<T, object> = {},
): QueryConfig<T> {
  if (requestParameters.id === null || requestParameters.id === undefined) {
    throw new runtime.RequiredError(
      'id',
      'Required parameter requestParameters.id was null or undefined when calling tagsUpdateTag.',
    )
  }

  let queryParameters = null

  const headerParameters: runtime.HttpHeaders = {}

  headerParameters['Content-Type'] = 'application/json'

  const { meta = {} } = requestConfig

  meta.authType = ['bearer']
  const config: QueryConfig<T> = {
    url: `${runtime.Configuration.basePath}/tags/{id}`.replace(
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
      TagSerializerPutToJSON(requestParameters.tagSerializerPut),
  }

  const { transform: requestTransform } = requestConfig
  if (requestTransform) {
  }

  return config
}

/**
 * Update a tag by its id
 */
export function tagsUpdateTag<T>(
  requestParameters: TagsUpdateTagRequest,
  requestConfig?: runtime.TypedQueryConfig<T, object>,
): QueryConfig<T> {
  return tagsUpdateTagRaw(requestParameters, requestConfig)
}
