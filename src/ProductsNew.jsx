export function ProductsNew() {
  const handleSubmit = (event) => {
    event.preventDefault();
    params = new FormData(event.target);
  };
  return (
    <div>
      <form>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Price: <input name="price" type="integer" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <button></button>
      </form>
    </div>
  );
}
