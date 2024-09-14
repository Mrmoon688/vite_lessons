import { createRecordForm } from "./selectors";
import { products } from "./states";

export const createRecordFormHandler = (event) => {
  event.preventDefault();
  //   console.log("U click create Record Form");
  const formData = new FormData(createRecordForm);
  console.log(formData.get("product_select"));
  console.log(formData.get("quantity"));
  console.log(products.find(({ id }) => id == formData.get("product_select")));
};
