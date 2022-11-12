import {
    BaseAPI,
    VoidApiResponse,
    RequiredError,
    JSONApiResponse
} from "../runtime";
import type { HTTPHeaders, ApiResponse } from "../runtime";
import { ProductFromJSON, ProductToJSON } from "../../entity/Product";
import type { Product } from "../../entity/Product";

export interface DeleteProductItemRequest {
    id: string;
}

export interface GetProductCollectionRequest {
    category?: string;
    categories?: Array<string>;
}

export interface GetProductItemRequest {
    id: string;
}

export interface PatchProductItemRequest {
    id: string;
    product: Product;
}

export interface PostProductCollectionRequest {
    product: Product;
}

export interface PutProductItemRequest {
    id: string;
    product: Product;
}

export class ProductApi extends BaseAPI {

    /**
     * Removes the Product resource.
     */
    private async deleteProductItemRaw(requestParameters: DeleteProductItemRequest): Promise<ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new RequiredError(
                'id',
                'Required parameter requestParameters.id was null or undefined when calling deleteProductItem.'
            );
        }
        const queryParameters: any = {};
        const headerParameters: HTTPHeaders = {};
        const response = await this.request({
            path: `/api/products/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });
        return new VoidApiResponse(response);
    }

    /**
     * Removes the Product resource.
     */
    public async deleteProductItem(requestParameters: DeleteProductItemRequest): Promise<void> {
        await this.deleteProductItemRaw(requestParameters);
    }

    /**
     * Retrieves the collection of Product resources.
     */
    private async getProductCollectionRaw(
        requestParameters: GetProductCollectionRequest
    ): Promise<ApiResponse<Array<Product>>> {
        const queryParameters: any = {};
        if (requestParameters.category !== undefined) {
            queryParameters['categories'] = requestParameters.category;
        }
        if (requestParameters.categories) {
            queryParameters['categories[]'] = requestParameters.categories;
        }
        const headerParameters: HTTPHeaders = {};
        const response = await this.request({
            path: `/api/products`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new JSONApiResponse(response, (jsonValue) => jsonValue.map(ProductFromJSON));
    }

    /**
     * Retrieves the collection of Product resources.
     */
    public async getProductCollection(requestParameters: GetProductCollectionRequest = {}): Promise<Array<Product>> {
        const response = await this.getProductCollectionRaw(requestParameters);
        return await response.value();
    }

    /**
     * Retrieves a Product resource.
     */
    private async getProductItemRaw(requestParameters: GetProductItemRequest): Promise<ApiResponse<Product>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new RequiredError(
                'id',
                'Required parameter requestParameters.id was null or undefined when calling getProductItem.'
            );
        }
        const queryParameters: any = {};
        const headerParameters: HTTPHeaders = {};
        const response = await this.request({
            path: `/api/products/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new JSONApiResponse(response, (jsonValue) => ProductFromJSON(jsonValue));
    }

    /**
     * Retrieves a Product resource.
     */
    public async getProductItem(requestParameters: GetProductItemRequest): Promise<Product> {
        const response = await this.getProductItemRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates the Product resource.
     */
    private async patchProductItemRaw(requestParameters: PatchProductItemRequest): Promise<ApiResponse<Product>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new RequiredError(
                'id',
                'Required parameter requestParameters.id was null or undefined when calling patchProductItem.'
            );
        }
        if (requestParameters.product === null || requestParameters.product === undefined) {
            throw new RequiredError(
                'product',
                'Required parameter requestParameters.product was null or undefined when calling patchProductItem.'
            );
        }
        const queryParameters: any = {};
        const headerParameters: HTTPHeaders = {};
        headerParameters['Content-Type'] = 'application/merge-patch+json';
        const response = await this.request({
            path: `/api/products/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ProductToJSON(requestParameters.product),
        });
        return new JSONApiResponse(response, (jsonValue) => ProductFromJSON(jsonValue));
    }

    /**
     * Updates the Product resource.
     */
    public async patchProductItem(requestParameters: PatchProductItemRequest): Promise<Product> {
        const response = await this.patchProductItemRaw(requestParameters);
        return await response.value();
    }

    /**
     * Creates a Product resource.
     */
    private async postProductCollectionRaw(
        requestParameters: PostProductCollectionRequest
    ): Promise<ApiResponse<Product>> {
        if (requestParameters.product === null || requestParameters.product === undefined) {
            throw new RequiredError(
                'product',
                'Required param requestParameters.product was null or undefined when calling postProductCollection.'
            );
        }
        const queryParameters: any = {};
        const headerParameters: HTTPHeaders = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/api/products`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProductToJSON(requestParameters.product),
        });
        return new JSONApiResponse(response, (jsonValue) => ProductFromJSON(jsonValue));
    }

    /**
     * Creates a Product resource.
     */
    public async postProductCollection(requestParameters: PostProductCollectionRequest): Promise<Product> {
        const response = await this.postProductCollectionRaw(requestParameters);
        return await response.value();
    }

    /**
     * Replaces the Product resource.
     */
    private async putProductItemRaw(requestParameters: PutProductItemRequest): Promise<ApiResponse<Product>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new RequiredError(
                'id',
                'Required parameter requestParameters.id was null or undefined when calling putProductItem.'
            );
        }
        if (requestParameters.product === null || requestParameters.product === undefined) {
            throw new RequiredError(
                'product',
                'Required parameter requestParameters.product was null or undefined when calling putProductItem.'
            );
        }
        const queryParameters: any = {};
        const headerParameters: HTTPHeaders = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/api/products/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ProductToJSON(requestParameters.product),
        });
        return new JSONApiResponse(response, (jsonValue) => ProductFromJSON(jsonValue));
    }

    /**
     * Replaces the Product resource.
     */
    public async putProductItem(requestParameters: PutProductItemRequest): Promise<Product> {
        const response = await this.putProductItemRaw(requestParameters);
        return await response.value();
    }
}
