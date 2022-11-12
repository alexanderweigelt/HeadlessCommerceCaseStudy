import { exists } from "../../api/runtime";
import { Product } from "../Product";

/**
 *
 * @export
 * @interface Category
 */
export interface Category {
    /**
     *
     * @type {number}
     * @memberof Category
     */
    readonly id?: number;
    /**
     *
     * @type {string}
     * @memberof Category
     */
    title?: string;
    /**
     *
     * @type {string}
     * @memberof Category
     */
    description?: string | null;
    /**
     *
     * @type {string}
     * @memberof Category
     */
    slug?: string;
    /**
     *
     * @type {Product[] | Array<string>}
     * @memberof Category
     */
    readonly productsData: Product[];
}

export function CategoryFromJSON(json: any): Category {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !exists(json, 'id') ? undefined : json['id'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'slug': !exists(json, 'slug') ? undefined : json['slug'],
        'productsData': !exists(json, 'productsData') ? undefined : json['productsData'],
    };
}

export function CategoryToJSON(value?: Category | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'title': value.title,
        'description': value.description,
        'slug': value.slug,
    };
}
