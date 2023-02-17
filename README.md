# JOMZ-Product-Card

Este es un paquete de pruebas de despliegue en NPM.

### Josue Mendez

## Ejemplo:

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'jomz-product-card';
```

```
<ProductCard
  product={product}
  initialValues={{
      count:4,
      maxCount: 10
  }}
>
  {
      ({reset,count,increaseBy,isMaxCountReached}) => (
          <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
          </>
      )
  }
</ProductCard>
```