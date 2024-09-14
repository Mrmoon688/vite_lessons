import {
  newProductName,
  newProductPrice,
  productCardTemplate,
  productGroup,
  productSelect,
} from "./selectors";
import { products } from "./states";
import { v4 as uuidv4 } from "uuid";

export const addNewProductBtnHandler = () => {
  const createId = uuidv4();
  //   console.log("add New Product");
  productGroup.append(
    createProductCard(
      createId,
      newProductName.value,
      newProductPrice.valueAsNumber
    )
  );
  productSelect.append(
    new Option(
      `${newProductName.value} - ${newProductPrice.valueAsNumber}`,
      createId
    )
  );
  products.push({
    id: createId,
    name: newProductName.value,
    price: newProductPrice.valueAsNumber,
  });
  console.log(products);
  newProductName.value = null;
  newProductPrice.value = null;
};

export const productRender = (products) => {
  products.forEach(({ id, name, price }) => {
    productGroup.append(createProductCard(id, name, price));
    productSelect.append(new Option(`${name} - ${price}`, id));
  });
};

export const createProductCard = (id, name, price) => {
  //!create new Product
  const productCard = productCardTemplate.content.cloneNode(true);
  const productName = productCard.querySelector(".product_name");
  const productPrice = productCard.querySelector(".product_price");
  const currentProductCard = productCard.querySelector(".product_card");
  currentProductCard.id = id;
  productName.innerText = name;
  productPrice.innerText = price;

  return productCard;
};
