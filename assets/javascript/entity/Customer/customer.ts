import { exists } from "../../api/runtime";

/**
 *
 * @export
 * @interface Customer
 */
export interface Customer {
    /**
     *
     * @type {number}
     * @memberof Customer
     */
    readonly id?: number;
    /**
     *
     * @type {string}
     * @memberof Customer
     */
    firstName?: string;
    /**
     *
     * @type {string}
     * @memberof Customer
     */
    lastName?: string;
    /**
     *
     * @type {string}
     * @memberof Customer
     */
    emailAddress?: string;
}

export function CustomerFromJSON(json: any): Customer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !exists(json, 'id') ? undefined : json['id'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'emailAddress': !exists(json, 'emailAddress') ? undefined : json['emailAddress'],
    };
}

export function CustomerToJSON(value?: Customer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'firstName': value.firstName,
        'lastName': value.lastName,
        'emailAddress': value.emailAddress,
    };
}

