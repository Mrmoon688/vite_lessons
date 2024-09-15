import { productSidebar } from "./selectors";

export const manageInventoryBtnHandler = () => {
  console.log("You click manage inventory btn");
  productSidebar.classList.remove("translate-x-full");
  productSidebar.classList.add("duration-500");
};

export const closeSidebarBtnHandler = () => {
  productSidebar.classList.add("duration-500");
  productSidebar.classList.add("translate-x-full");
};

export const checkoutHandler = () => {
  console.log("U clicked Checkout btn");
  window.print();
};
