# ProductApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteProductItem**](category-api.docs.md#deleteProductItem) | **DELETE** /api/products/{id} | Removes the Product resource. |
| [**getProductItem**](category-api.docs.md#getProductItem) | **GET** /api/products/{id} | Retrieves a Product resource. |
| [**patchProductItem**](category-api.docs.md#patchProductItem) | **PATCH** /api/products/{id} | Updates the Product resource. |
| [**postProductCollection**](category-api.docs.md#postProductCollection) | **POST** /api/products | Creates a Product resource. |
| [**putProductItem**](category-api.docs.md#putProductItem) | **PUT** /api/products/{id} | Replaces the Product resource. |


<a name="deleteProductItem"></a>
# **deleteProductItem**
> deleteProductItem(id)

Removes the Product resource.

    Removes the Product resource.

### Parameters

| Name   | Type       | Description         | Notes             |
|--------|------------|---------------------|-------------------|
| **id** | **String** | Resource identifier | [default to null] |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getProductCollection"></a>
# **getProductCollection**
> List getProductCollection(category, categories\[\])

Retrieves the collection of Product resources.

    Retrieves the collection of Product resources.

### Parameters

| Name               | Type                                             | Description | Notes                        |
|--------------------|--------------------------------------------------|-------------|------------------------------|
| **category**       | **String**                                       |             | [optional] [default to null] |
| **categories\[\]** | [**List**](../../entity/Product/product.docs.md) |             | [optional] [default to null] |

### Return type

[**List**](../../entity/Product/product.docs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getProductItem"></a>
# **getProductItem**
> Product getProductItem(id)

Retrieves a Product resource.

    Retrieves a Product resource.

### Parameters

| Name   | Type       | Description         | Notes             |
|--------|------------|---------------------|-------------------|
| **id** | **String** | Resource identifier | [default to null] |

### Return type

[**Product**](../../entity/Product/product.docs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="patchProductItem"></a>
# **patchProductItem**
> Product patchProductItem(id, Product)

Updates the Product resource.

    Updates the Product resource.

### Parameters

| Name        | Type                                                | Description                  | Notes             |
|-------------|-----------------------------------------------------|------------------------------|-------------------|
| **id**      | **String**                                          | Resource identifier          | [default to null] |
| **Product** | [**Product**](../../entity/Product/product.docs.md) | The updated Product resource |                   |

### Return type

[**Product**](../../entity/Product/product.docs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/json

<a name="postProductCollection"></a>
# **postProductCollection**
> Product postProductCollection(Product)

Creates a Product resource.

    Creates a Product resource.

### Parameters

| Name        | Type                                                | Description              | Notes |
|-------------|-----------------------------------------------------|--------------------------|-------|
| **Product** | [**Product**](../../entity/Product/product.docs.md) | The new Product resource |       |

### Return type

[**Product**](../../entity/Product/product.docs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="putProductItem"></a>
# **putProductItem**
> Product putProductItem(id, Product)

Replaces the Product resource.

    Replaces the Product resource.

### Parameters

| Name        | Type                                                | Description                  | Notes             |
|-------------|-----------------------------------------------------|------------------------------|-------------------|
| **id**      | **String**                                          | Resource identifier          | [default to null] |
| **Product** | [**Product**](../../entity/Product/product.docs.md) | The updated Product resource |                   |

### Return type

[**Product**](../../entity/Product/product.docs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
