# CustomerApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteCustomerItem**](customer-api.docs.md#deleteCustomerItem) | **DELETE** /api/customers/{id} | Removes the Customer resource. |
| [**getCustomerCollection**](customer-api.docs.md#getCustomerCollection) | **GET** /api/customers | Retrieves the collection of Customer resources. |
| [**getCustomerItem**](customer-api.docs.md#getCustomerItem) | **GET** /api/customers/{id} | Retrieves a Customer resource. |
| [**patchCustomerItem**](customer-api.docs.md#patchCustomerItem) | **PATCH** /api/customers/{id} | Updates the Customer resource. |
| [**postCustomerCollection**](customer-api.docs.md#postCustomerCollection) | **POST** /api/customers | Creates a Customer resource. |
| [**putCustomerItem**](customer-api.docs.md#putCustomerItem) | **PUT** /api/customers/{id} | Replaces the Customer resource. |


<a name="deleteCustomerItem"></a>
# **deleteCustomerItem**
> deleteCustomerItem(id)

Removes the Customer resource.

    Removes the Customer resource.

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

<a name="getCustomerCollection"></a>
# **getCustomerCollection**
> List getCustomerCollection()

Retrieves the collection of Customer resources.

    Retrieves the collection of Customer resources.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../../entity/Customer/customer.docs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getCustomerItem"></a>
# **getCustomerItem**
> Customer getCustomerItem(id)

Retrieves a Customer resource.

    Retrieves a Customer resource.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Resource identifier | [default to null] |

### Return type

[**Customer**](../../entity/Customer/customer.docs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="patchCustomerItem"></a>
# **patchCustomerItem**
> Customer patchCustomerItem(id, Customer)

Updates the Customer resource.

    Updates the Customer resource.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Resource identifier | [default to null] |
| **Customer** | [**Customer**](../../entity/Customer/customer.docs.md)| The updated Customer resource | |

### Return type

[**Customer**](../../entity/Customer/customer.docs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/json

<a name="postCustomerCollection"></a>
# **postCustomerCollection**
> Customer postCustomerCollection(Customer)

Creates a Customer resource.

    Creates a Customer resource.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Customer** | [**Customer**](../../entity/Customer/customer.docs.md)| The new Customer resource | |

### Return type

[**Customer**](../../entity/Customer/customer.docs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="putCustomerItem"></a>
# **putCustomerItem**
> Customer putCustomerItem(id, Customer)

Replaces the Customer resource.

    Replaces the Customer resource.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Resource identifier | [default to null] |
| **Customer** | [**Customer**](../../entity/Customer/customer.docs.md)| The updated Customer resource | |

### Return type

[**Customer**](../../entity/Customer/customer.docs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

