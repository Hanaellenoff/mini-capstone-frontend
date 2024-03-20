/* eslint-disable react/prop-types */
export function ProductsIndex(props) {
  return (
    <div id="products-index">
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price} </p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}
