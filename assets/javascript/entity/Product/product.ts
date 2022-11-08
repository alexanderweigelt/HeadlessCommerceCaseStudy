import { exists } from "../../api/runtime";

/**
 *
 * @export
 * @interface Product
 */
export interface Product {
    /**
     *
     * @type {number}
     * @memberof Product
     */
    readonly id?: number;
    /**
     *
     * @type {string}
     * @memberof Product
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof Product
     */
    description?: string | null;
    /**
     *
     * @type {string}
     * @memberof Product
     */
    slug?: string;
    /**
     *
     * @type {number}
     * @memberof Product
     */
    sku?: number;
    /**
     *
     * @type {number}
     * @memberof Product
     */
    price?: number;
    /**
     *
     * @type {Array<string>}
     * @memberof Product
     */
    categories?: Array<string>;
}

export function ProductFromJSON(json: any): Product {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'slug': !exists(json, 'slug') ? undefined : json['slug'],
        'sku': !exists(json, 'sku') ? undefined : json['sku'],
        'price': !exists(json, 'price') ? undefined : json['price'],
        'categories': !exists(json, 'categories') ? undefined : json['categories'],
    };
}

export function ProductToJSON(value?: Product | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'description': value.description,
        'slug': value.slug,
        'sku': value.sku,
        'price': value.price,
        'categories': value.categories,
    };
}

