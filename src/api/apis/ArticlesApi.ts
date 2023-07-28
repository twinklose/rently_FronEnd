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
  ArticleSerializerPost,
  ArticleSerializerPostToJSON,
  ArticleSerializerPut,
  ArticleSerializerPutToJSON,
  ArticleSerializerRead,
  ArticleSerializerReadFromJSON,
} from '../models'
import * as runtime from '../runtime'

export interface ArticlesCreateArticleRequest {
  articleSerializerPost: ArticleSerializerPost
}

export interface ArticlesDeleteArticleRequest {
  id: number
}

export interface ArticlesGetAllArticlesRequest {
  page?: number
}

export interface ArticlesGetArticleByIdRequest {
  id: number
}

export interface ArticlesGetArticlesByFilterRequest {
  name?: string
  tagId?: number
  userId?: number
}

export interface ArticlesUpdateArticleRequest {
  id: number
  articleSerializerPut?: ArticleSerializerPut
}

/**
 * Create a new article
 */
function articlesCreateArticleRaw<T>(
  requestParameters: ArticlesCreateArticleRequest,
  requestConfig: runtime.TypedQueryConfig<T, ArticleSerializerRead> = {},
): QueryConfig<T> {
  if (
    requestParameters.articleSerializerPost === null ||
    requestParameters.articleSerializerPost === undefined
  ) {
    throw new runtime.RequiredError(
      'articleSerializerPost',
      'Required parameter requestParameters.articleSerializerPost was null or undefined when calling articlesCreateArticle.',
    )
  }

  let queryParameters = null

  const headerParameters: runtime.HttpHeaders = {}

  headerParameters['Content-Type'] = 'application/json'

  const { meta = {} } = requestConfig

  meta.authType = ['bearer']
  const config: QueryConfig<T> = {
    url: `${runtime.Configuration.basePath}/articles`,
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
      ArticleSerializerPostToJSON(requestParameters.articleSerializerPost),
  }

  const { transform: requestTransform } = requestConfig
  if (requestTransform) {
    config.transform = (body: ResponseBody, text: ResponseBody) =>
      requestTransform(ArticleSerializerReadFromJSON(body), text)
  }

  return config
}

/**
 * Create a new article
 */
export function articlesCreateArticle<T>(
  requestParameters: ArticlesCreateArticleRequest,
  requestConfig?: runtime.TypedQueryConfig<T, ArticleSerializerRead>,
): QueryConfig<T> {
  return articlesCreateArticleRaw(requestParameters, requestConfig)
}

/**
 * Delete a article by its id
 */
function articlesDeleteArticleRaw<T>(
  requestParameters: ArticlesDeleteArticleRequest,
  requestConfig: runtime.TypedQueryConfig<T, void> = {},
): QueryConfig<T> {
  if (requestParameters.id === null || requestParameters.id === undefined) {
    throw new runtime.RequiredError(
      'id',
      'Required parameter requestParameters.id was null or undefined when calling articlesDeleteArticle.',
    )
  }

  let queryParameters = null

  const headerParameters: runtime.HttpHeaders = {}

  const { meta = {} } = requestConfig

  meta.authType = ['bearer']
  const config: QueryConfig<T> = {
    url: `${runtime.Configuration.basePath}/articles/{id}`.replace(
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
 * Delete a article by its id
 */
export function articlesDeleteArticle<T>(
  requestParameters: ArticlesDeleteArticleRequest,
  requestConfig?: runtime.TypedQueryConfig<T, void>,
): QueryConfig<T> {
  return articlesDeleteArticleRaw(requestParameters, requestConfig)
}

/**
 * Return a list of all articles
 */
function articlesGetAllArticlesRaw<T>(
  requestParameters: ArticlesGetAllArticlesRequest,
  requestConfig: runtime.TypedQueryConfig<T, Array<ArticleSerializerRead>> = {},
): QueryConfig<T> {
  let queryParameters = null

  queryParameters = {
    page: requestParameters.page,
  }

  const headerParameters: runtime.HttpHeaders = {}

  const { meta = {} } = requestConfig

  meta.authType = ['bearer']
  const config: QueryConfig<T> = {
    url: `${runtime.Configuration.basePath}/articles`,
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
      requestTransform(body.map(ArticleSerializerReadFromJSON), text)
  }

  return config
}

/**
 * Return a list of all articles
 */
export function articlesGetAllArticles<T>(
  requestParameters: ArticlesGetAllArticlesRequest,
  requestConfig?: runtime.TypedQueryConfig<T, Array<ArticleSerializerRead>>,
): QueryConfig<T> {
  return articlesGetAllArticlesRaw(requestParameters, requestConfig)
}

/**
 * Return a article by his id
 */
function articlesGetArticleByIdRaw<T>(
  requestParameters: ArticlesGetArticleByIdRequest,
  requestConfig: runtime.TypedQueryConfig<T, ArticleSerializerRead> = {},
): QueryConfig<T> {
  if (requestParameters.id === null || requestParameters.id === undefined) {
    throw new runtime.RequiredError(
      'id',
      'Required parameter requestParameters.id was null or undefined when calling articlesGetArticleById.',
    )
  }

  let queryParameters = null

  const headerParameters: runtime.HttpHeaders = {}

  const { meta = {} } = requestConfig

  meta.authType = ['bearer']
  const config: QueryConfig<T> = {
    url: `${runtime.Configuration.basePath}/articles/{id}`.replace(
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
      requestTransform(ArticleSerializerReadFromJSON(body), text)
  }

  return config
}

/**
 * Return a article by his id
 */
export function articlesGetArticleById<T>(
  requestParameters: ArticlesGetArticleByIdRequest,
  requestConfig?: runtime.TypedQueryConfig<T, ArticleSerializerRead>,
): QueryConfig<T> {
  return articlesGetArticleByIdRaw(requestParameters, requestConfig)
}

/**
 * Return a list of articles by filter
 */
function articlesGetArticlesByFilterRaw<T>(
  requestParameters: ArticlesGetArticlesByFilterRequest,
  requestConfig: runtime.TypedQueryConfig<T, Array<ArticleSerializerRead>> = {},
): QueryConfig<T> {
  let queryParameters = null

  queryParameters = {
    name: requestParameters.name,
    tag_id: requestParameters.tagId,
    user_id: requestParameters.userId,
  }

  const headerParameters: runtime.HttpHeaders = {}

  const { meta = {} } = requestConfig

  meta.authType = ['bearer']
  const config: QueryConfig<T> = {
    url: `${runtime.Configuration.basePath}/articles/articles_filter`,
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
      requestTransform(body.map(ArticleSerializerReadFromJSON), text)
  }

  return config
}

/**
 * Return a list of articles by filter
 */
export function articlesGetArticlesByFilter<T>(
  requestParameters: ArticlesGetArticlesByFilterRequest,
  requestConfig?: runtime.TypedQueryConfig<T, Array<ArticleSerializerRead>>,
): QueryConfig<T> {
  return articlesGetArticlesByFilterRaw(requestParameters, requestConfig)
}

/**
 * Update a article by its id
 */
function articlesUpdateArticleRaw<T>(
  requestParameters: ArticlesUpdateArticleRequest,
  requestConfig: runtime.TypedQueryConfig<T, object> = {},
): QueryConfig<T> {
  if (requestParameters.id === null || requestParameters.id === undefined) {
    throw new runtime.RequiredError(
      'id',
      'Required parameter requestParameters.id was null or undefined when calling articlesUpdateArticle.',
    )
  }

  let queryParameters = null

  const headerParameters: runtime.HttpHeaders = {}

  headerParameters['Content-Type'] = 'application/json'

  const { meta = {} } = requestConfig

  meta.authType = ['bearer']
  const config: QueryConfig<T> = {
    url: `${runtime.Configuration.basePath}/articles/{id}`.replace(
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
      ArticleSerializerPutToJSON(requestParameters.articleSerializerPut),
  }

  const { transform: requestTransform } = requestConfig
  if (requestTransform) {
  }

  return config
}

/**
 * Update a article by its id
 */
export function articlesUpdateArticle<T>(
  requestParameters: ArticlesUpdateArticleRequest,
  requestConfig?: runtime.TypedQueryConfig<T, object>,
): QueryConfig<T> {
  return articlesUpdateArticleRaw(requestParameters, requestConfig)
}
