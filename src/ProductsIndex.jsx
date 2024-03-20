/* eslint-disable react/prop-types */
export function ProductsIndex(props) {
  return (
    <div id="products-index">
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.url} alt="" />
          <p>{product.width}</p>
        </div>
      ))}
    </div>
  );
}
