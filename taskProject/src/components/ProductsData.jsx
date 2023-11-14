import React from "react";

function ProductsData({ products }) {
  return (
    <>
      {products.map((item, index) => {
        const { id, title, brand, thumbnail, price, rating } = item;
        // const { street, city, zipcode } = item.address;
        return (
          <tr key={index}>
            <td>{id}</td>
            <td>{title}</td>
            <td>{brand}</td>
            <td>{price}</td>
            <td>{rating}</td>
            <td>
              <img src={item.thumbnail} alt="" height={100} />
            </td>
          </tr>
        );
      })}
    </>
  );
}

export default ProductsData;
