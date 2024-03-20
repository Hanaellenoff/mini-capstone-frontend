/* eslint-disable react/prop-types */
export function ProductsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateProduct(params, () => event.target.reset());
  };
  return (
    <div id="products-new">
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Price: <input name="price" type="decimal" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <button type="submit">Create new Product</button>
      </form>
    </div>
  );
}
