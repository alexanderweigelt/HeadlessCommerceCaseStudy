# CategoryApi

All URIs are relative to *http://localhost*

| Method                                                            | HTTP request                      | Description                     |
|-------------------------------------------------------------------|-----------------------------------|---------------------------------|
| [**deleteCategoryItem**](category-api.docs.md#deleteCategoryItem) | **DELETE** /api/categories/{slug} | Removes the Category resource.  |
| [**getCategoryItem**](category-api.docs.md#getCategoryItem)       | **GET** /api/categories/{slug}    | Retrieves a Category resource.  |
| [**patchCategoryItem**](category-api.docs.md#patchCategoryItem)   | **PATCH** /api/categories/{slug}  | Updates the Category resource.  |
| [**putCategoryItem**](category-api.docs.md#putCategoryItem)       | **PUT** /api/categories/{slug}    | Replaces the Category resource. |

<a name="deleteCategoryItem"></a>
# **deleteCategoryItem**
> deleteCategoryItem(slug)

Removes the Category resource.

    Removes the Category resource.

### Parameters

| Name     | Type       | Description         | Notes             |
|----------|------------|---------------------|-------------------|
| **slug** | **String** | Resource identifier | [default to null] |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getCategoryItem"></a>
# **getCategoryItem**
> Category getCategoryItem(slug)

Retrieves a Category resource.

    Retrieves a Category resource.

### Parameters

| Name     | Type       | Description         | Notes             |
|----------|------------|---------------------|-------------------|
| **slug** | **String** | Resource identifier | [default to null] |

### Return type

[**Category**](../../entity/Category/category.docs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="patchCategoryItem"></a>
# **patchCategoryItem**
> Category patchCategoryItem(slug, Category)

Updates the Category resource.

    Updates the Category resource.

### Parameters

| Name         | Type                                  | Description                   | Notes             |
|--------------|---------------------------------------|-------------------------------|-------------------|
| **slug**     | **String**                            | Resource identifier           | [default to null] |
| **Category** | [**Category**](../Models/Category.md) | The updated Category resource |                   |

### Return type

[**Category**](../../entity/Category/category.docs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/json

<a name="putCategoryItem"></a>
# **putCategoryItem**
> Category putCategoryItem(slug, Category)

Replaces the Category resource.

    Replaces the Category resource.

### Parameters

| Name         | Type                                  | Description                   | Notes             |
|--------------|---------------------------------------|-------------------------------|-------------------|
| **slug**     | **String**                            | Resource identifier           | [default to null] |
| **Category** | [**Category**](../Models/Category.md) | The updated Category resource |                   |

### Return type

[**Category**](../../entity/Category/category.docs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
