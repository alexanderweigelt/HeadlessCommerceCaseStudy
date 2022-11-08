import {
    BaseAPI,
    VoidApiResponse,
    RequiredError,
    JSONApiResponse
} from "../runtime";
import type { HTTPHeaders, ApiResponse } from "../runtime";
import type { Category } from "../../entity/Category";
import { CategoryFromJSON, CategoryToJSON } from "../../entity/Category";

export interface DeleteCategoryItemRequest {
    id: string;
}

export interface GetCategoryCollectionRequest {
    page?: number;
}

export interface GetCategoryItemRequest {
    id: string;
}

export interface PatchCategoryItemRequest {
    id: string;
    category: Category;
}

export interface PostCategoryCollectionRequest {
    category: Category;
}

export interface PutCategoryItemRequest {
    id: string;
    category: Category;
}

export class CategoryApi extends BaseAPI {

    /**
     * Removes the Category resource.
     */
    private async deleteCategoryItemRaw(requestParameters: DeleteCategoryItemRequest): Promise<ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new RequiredError(
                'id',
                'Required parameter requestParameters.id was null or undefined when calling deleteCategoryItem.'
            );
        }
        const queryParameters: any = {};
        const headerParameters: HTTPHeaders = {};
        const response = await this.request({
            path: `/api/categories/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });
        return new VoidApiResponse(response);
    }

    /**
     * Removes the Category resource.
     */
    public async deleteCategoryItem(requestParameters: DeleteCategoryItemRequest): Promise<void> {
        await this.deleteCategoryItemRaw(requestParameters);
    }

    /**
     * Retrieves the collection of Category resources.
     */
    private async getCategoryCollectionRaw(
        requestParameters: GetCategoryCollectionRequest
    ): Promise<ApiResponse<Array<Category>>> {
        const queryParameters: any = {};
        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }
        const headerParameters: HTTPHeaders = {};
        const response = await this.request({
            path: `/api/categories`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new JSONApiResponse(response, (jsonValue) => jsonValue.map(CategoryFromJSON));
    }

    /**
     * Retrieves the collection of Category resources.
     */
    public async getCategoryCollection(
        requestParameters: GetCategoryCollectionRequest = {}
    ): Promise<Array<Category>> {
        const response = await this.getCategoryCollectionRaw(requestParameters);
        return await response.value();
    }

    /**
     * Retrieves a Category resource.
     */
    private async getCategoryItemRaw(requestParameters: GetCategoryItemRequest): Promise<ApiResponse<Category>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new RequiredError(
                'id',
                'Required parameter requestParameters.id was null or undefined when calling getCategoryItem.'
            );
        }
        const queryParameters: any = {};
        const headerParameters: HTTPHeaders = {};
        const response = await this.request({
            path: `/api/categories/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new JSONApiResponse(response, (jsonValue) => CategoryFromJSON(jsonValue));
    }

    /**
     * Retrieves a Category resource.
     */
    public async getCategoryItem(requestParameters: GetCategoryItemRequest): Promise<Category> {
        const response = await this.getCategoryItemRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates the Category resource.
     */
    private async patchCategoryItemRaw(requestParameters: PatchCategoryItemRequest): Promise<ApiResponse<Category>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new RequiredError(
                'id',
                'Required parameter requestParameters.id was null or undefined when calling patchCategoryItem.'
            );
        }
        if (requestParameters.category === null || requestParameters.category === undefined) {
            throw new RequiredError(
                'category',
                'Required parameter requestParameters.category was null or undefined when calling patchCategoryItem.'
            );
        }
        const queryParameters: any = {};
        const headerParameters: HTTPHeaders = {};
        headerParameters['Content-Type'] = 'application/merge-patch+json';
        const response = await this.request({
            path: `/api/categories/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CategoryToJSON(requestParameters.category),
        });
        return new JSONApiResponse(response, (jsonValue) => CategoryFromJSON(jsonValue));
    }

    /**
     * Updates the Category resource.
     */
    public async patchCategoryItem(requestParameters: PatchCategoryItemRequest): Promise<Category> {
        const response = await this.patchCategoryItemRaw(requestParameters);
        return await response.value();
    }

    /**
     * Creates a Category resource.
     */
    private async postCategoryCollectionRaw(
        requestParameters: PostCategoryCollectionRequest
    ): Promise<ApiResponse<Category>> {
        if (requestParameters.category === null || requestParameters.category === undefined) {
            throw new RequiredError(
                'category',
                'Required param requestParameters.category was null or undefined when calling postCategoryCollection.'
            );
        }
        const queryParameters: any = {};
        const headerParameters: HTTPHeaders = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/api/categories`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CategoryToJSON(requestParameters.category),
        });
        return new JSONApiResponse(response, (jsonValue) => CategoryFromJSON(jsonValue));
    }

    /**
     * Creates a Category resource.
     */
    public async postCategoryCollection(
        requestParameters: PostCategoryCollectionRequest
    ): Promise<Category> {
        const response = await this.postCategoryCollectionRaw(requestParameters);
        return await response.value();
    }

    /**
     * Replaces the Category resource.
     */
    private async putCategoryItemRaw(
        requestParameters: PutCategoryItemRequest
    ): Promise<ApiResponse<Category>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new RequiredError(
                'id',
                'Required parameter requestParameters.id was null or undefined when calling putCategoryItem.'
            );
        }
        if (requestParameters.category === null || requestParameters.category === undefined) {
            throw new RequiredError(
                'category',
                'Required parameter requestParameters.category was null or undefined when calling putCategoryItem.'
            );
        }
        const queryParameters: any = {};
        const headerParameters: HTTPHeaders = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/api/categories/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CategoryToJSON(requestParameters.category),
        });
        return new JSONApiResponse(response, (jsonValue) => CategoryFromJSON(jsonValue));
    }

    /**
     * Replaces the Category resource.
     */
    public async putCategoryItem(requestParameters: PutCategoryItemRequest): Promise<Category> {
        const response = await this.putCategoryItemRaw(requestParameters);
        return await response.value();
    }
}
