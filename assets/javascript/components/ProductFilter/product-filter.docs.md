# ProductFilter component

A ProductFilter component to display a filter and filters a product list based on attributes

---

## Usage

```js
import { ProductFilter } from './components/ProductFilter';
```

A product for any product list which includes this attributes: .

### Renders a product filter

```js live
<ProductFilter />
```

### Requirements

the component only works if it is surrounded by a `<ProductProvider>`.

```js live
<ProductProvider>
    <ProductList/>
</ProductProvider>
```
