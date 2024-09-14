import { productRender } from "./inventory";
import { productSidebar } from "./selectors";
import { products } from "./states";

const initialRender = () => {
  // productSidebar.classList.remove("translate-x-full");
  productRender(products);
};

export default initialRender;
