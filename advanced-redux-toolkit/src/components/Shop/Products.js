import ProductItem from './ProductItem';
import classes from './Products.module.css';

import { productList } from '../../data/ProductData';

const Products = (props) => {
  const price=6
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>

      {productList.map(product=>
        <ProductItem
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        description={product.description}
      />
        )}

        
      </ul>
    </section>
  );
};

export default Products;
