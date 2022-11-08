# ProductList component

A ProductList Grid component for displaying a list of product cards

---

## Usage

```js
import {ProductList} from './components/ProductList';
```

A grid for displaying a list of product cards with data

### Renders a list of products

```js live
<ProductList
    list={[
        {
            "id": 1,
            "name": "Flame Collective Cap",
            "description": "Buy the new Flame Collective Cap",
            "slug": "flame-collective-cap",
            "sku": 1,
            "price": 19.99,
            "categories": [
                "/api/categories/1",
                "/api/categories/4"
            ]
        },
        {
            "id": 2,
            "name": "Eternal Youth Cap",
            "description": "Sale - Buy the new Eternal Youth Cap",
            "slug": "eternal-youth-cap",
            "sku": 2,
            "price": 14.89,
            "categories": [
                "/api/categories/4"
            ]
        },
    ]}
/>
```

### Shows a message when no products are found

```js live
<ProductList list={[]}/>
```
