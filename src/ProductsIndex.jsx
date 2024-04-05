/* eslint-disable react/prop-types */
import { useState } from "react";

export function ProductsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div id="products-index">
      Search filter:{" "}
      <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} list="names" />
      <datalist id="names">
        {props.products.map((product) => (
          <option key={product.id}>{product.name}</option>
        ))}
      </datalist>
      <div className="cards">
        {props.products
          .filter((product) => product.name.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((product) => (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.price} </p>
              <p>{product.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
