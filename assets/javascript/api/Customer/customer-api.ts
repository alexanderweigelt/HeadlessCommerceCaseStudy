import {
    BaseAPI,
    VoidApiResponse,
    RequiredError,
    JSONApiResponse
} from "../runtime";
import type { HTTPHeaders, ApiResponse } from "../runtime";
import type { Customer } from "../../entity/Customer";
import { CustomerFromJSON, CustomerToJSON, } from "../../entity/Customer";

export interface DeleteCustomerItemRequest {
    id: string;
}

export interface GetCustomerItemRequest {
    id: string;
}

export interface PatchCustomerItemRequest {
    id: string;
    customer: Customer;
}

export interface PostCustomerCollectionRequest {
    customer: Customer;
}

export interface PutCustomerItemRequest {
    id: string;
    customer: Customer;
}

export class CustomerApi extends BaseAPI {

    /**
     * Removes the Customer resource.
     */
    private async deleteCustomerItemRaw(requestParameters: DeleteCustomerItemRequest): Promise<ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new RequiredError(
                'id',
                'Required parameter requestParameters.id was null or undefined when calling deleteCustomerItem.'
            );
        }
        const queryParameters: any = {};
        const headerParameters: HTTPHeaders = {};
        const response = await this.request({
            path: `/api/customers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });
        return new VoidApiResponse(response);
    }

    /**
     * Removes the Customer resource.
     */
    public async deleteCustomerItem(requestParameters: DeleteCustomerItemRequest): Promise<void> {
        await this.deleteCustomerItemRaw(requestParameters);
    }

    /**
     * Retrieves the collection of Customer resources.
     */
    private async getCustomerCollectionRaw(): Promise<ApiResponse<Array<Customer>>> {
        const queryParameters: any = {};
        const headerParameters: HTTPHeaders = {};
        const response = await this.request({
            path: `/api/customers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new JSONApiResponse(response, (jsonValue) => jsonValue.map(CustomerFromJSON));
    }

    /**
     * Retrieves the collection of Customer resources.
     */
    public async getCustomerCollection(): Promise<Array<Customer>> {
        const response = await this.getCustomerCollectionRaw();
        return await response.value();
    }

    /**
     * Retrieves a Customer resource.
     */
    private async getCustomerItemRaw(requestParameters: GetCustomerItemRequest): Promise<ApiResponse<Customer>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new RequiredError(
                'id',
                'Required parameter requestParameters.id was null or undefined when calling getCustomerItem.'
            );
        }
        const queryParameters: any = {};
        const headerParameters: HTTPHeaders = {};
        const response = await this.request({
            path: `/api/customers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new JSONApiResponse(response, (jsonValue) => CustomerFromJSON(jsonValue));
    }

    /**
     * Retrieves a Customer resource.
     */
    public async getCustomerItem(requestParameters: GetCustomerItemRequest): Promise<Customer> {
        const response = await this.getCustomerItemRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates the Customer resource.
     */
    private async patchCustomerItemRaw(requestParameters: PatchCustomerItemRequest): Promise<ApiResponse<Customer>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new RequiredError(
                'id',
                'Required parameter requestParameters.id was null or undefined when calling patchCustomerItem.'
            );
        }
        if (requestParameters.customer === null || requestParameters.customer === undefined) {
            throw new RequiredError(
                'customer',
                'Required parameter requestParameters.customer was null or undefined when calling patchCustomerItem.'
            );
        }
        const queryParameters: any = {};
        const headerParameters: HTTPHeaders = {};
        headerParameters['Content-Type'] = 'application/merge-patch+json';
        const response = await this.request({
            path: `/api/customers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CustomerToJSON(requestParameters.customer),
        });
        return new JSONApiResponse(response, (jsonValue) => CustomerFromJSON(jsonValue));
    }

    /**
     * Updates the Customer resource.
     */
    public async patchCustomerItem(requestParameters: PatchCustomerItemRequest): Promise<Customer> {
        const response = await this.patchCustomerItemRaw(requestParameters);
        return await response.value();
    }

    /**
     * Creates a Customer resource.
     */
    private async postCustomerCollectionRaw(
        requestParameters: PostCustomerCollectionRequest
    ): Promise<ApiResponse<Customer>> {
        if (requestParameters.customer === null || requestParameters.customer === undefined) {
            throw new RequiredError(
                'customer',
                'Required param requestParameters.customer was null or undefined when calling postCustomerCollection.'
            );
        }
        const queryParameters: any = {};
        const headerParameters: HTTPHeaders = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/api/customers`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CustomerToJSON(requestParameters.customer),
        });
        return new JSONApiResponse(response, (jsonValue) => CustomerFromJSON(jsonValue));
    }

    /**
     * Creates a Customer resource.
     */
    public async postCustomerCollection(requestParameters: PostCustomerCollectionRequest): Promise<Customer> {
        const response = await this.postCustomerCollectionRaw(requestParameters);
        return await response.value();
    }

    /**
     * Replaces the Customer resource.
     */
    private async putCustomerItemRaw(requestParameters: PutCustomerItemRequest): Promise<ApiResponse<Customer>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new RequiredError(
                'id',
                'Required parameter requestParameters.id was null or undefined when calling putCustomerItem.'
            );
        }
        if (requestParameters.customer === null || requestParameters.customer === undefined) {
            throw new RequiredError(
                'customer',
                'Required parameter requestParameters.customer was null or undefined when calling putCustomerItem.'
            );
        }
        const queryParameters: any = {};
        const headerParameters: HTTPHeaders = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/api/customers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CustomerToJSON(requestParameters.customer),
        });
        return new JSONApiResponse(response, (jsonValue) => CustomerFromJSON(jsonValue));
    }

    /**
     * Replaces the Customer resource.
     */
    public async putCustomerItem(requestParameters: PutCustomerItemRequest): Promise<Customer> {
        const response = await this.putCustomerItemRaw(requestParameters);
        return await response.value();
    }
}
