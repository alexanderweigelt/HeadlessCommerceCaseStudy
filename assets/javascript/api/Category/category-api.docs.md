# CategoryApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteCategoryItem**](category-api.docs.md#deleteCategoryItem) | **DELETE** /api/categories/{id} | Removes the Category resource. |
| [**getCategoryCollection**](category-api.docs.md#getCategoryCollection) | **GET** /api/categories | Retrieves the collection of Category resources. |
| [**getCategoryItem**](category-api.docs.md#getCategoryItem) | **GET** /api/categories/{id} | Retrieves a Category resource. |
| [**patchCategoryItem**](category-api.docs.md#patchCategoryItem) | **PATCH** /api/categories/{id} | Updates the Category resource. |
| [**postCategoryCollection**](category-api.docs.md#postCategoryCollection) | **POST** /api/categories | Creates a Category resource. |
| [**putCategoryItem**](category-api.docs.md#putCategoryItem) | **PUT** /api/categories/{id} | Replaces the Category resource. |


<a name="deleteCategoryItem"></a>
# **deleteCategoryItem**
> deleteCategoryItem(id)

Removes the Category resource.

    Removes the Category resource.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Resource identifier | [default to null] |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getCategoryCollection"></a>
# **getCategoryCollection**
> List getCategoryCollection(page)

Retrieves the collection of Category resources.

    Retrieves the collection of Category resources.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | **Integer**| The collection page number | [optional] [default to 1] |

### Return type

[**List**](../../entity/Category/category.docs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getCategoryItem"></a>
# **getCategoryItem**
> Category getCategoryItem(id)

Retrieves a Category resource.

    Retrieves a Category resource.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Resource identifier | [default to null] |

### Return type

[**Category**](../../entity/Category/category.docs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="patchCategoryItem"></a>
# **patchCategoryItem**
> Category patchCategoryItem(id, Category)

Updates the Category resource.

    Updates the Category resource.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Resource identifier | [default to null] |
| **Category** | [**Category**](../../entity/Category/category.docs.md)| The updated Category resource | |

### Return type

[**Category**](../../entity/Category/category.docs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/json

<a name="postCategoryCollection"></a>
# **postCategoryCollection**
> Category postCategoryCollection(Category)

Creates a Category resource.

    Creates a Category resource.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Category** | [**Category**](../../entity/Category/category.docs.md)| The new Category resource | |

### Return type

[**Category**](../../entity/Category/category.docs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="putCategoryItem"></a>
# **putCategoryItem**
> Category putCategoryItem(id, Category)

Replaces the Category resource.

    Replaces the Category resource.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Resource identifier | [default to null] |
| **Category** | [**Category**](../../entity/Category/category.docs.md)| The updated Category resource | |

### Return type

[**Category**](../../entity/Category/category.docs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

