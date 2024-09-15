import { addNewProductBtnHandler } from "./inventory";
import { createRecordFormHandler, recordGroupHandler } from "./record";
import {
  addNewProductBtn,
  checkoutBtn,
  closeSidebarBtn,
  createRecordForm,
  manageInventoryBtn,
  recordGroup,
} from "./selectors";
import { checkoutHandler, closeSidebarBtnHandler, manageInventoryBtnHandler } from "./้handlers";

const listener = () => {
  manageInventoryBtn.addEventListener("click", manageInventoryBtnHandler);
  closeSidebarBtn.addEventListener("click", closeSidebarBtnHandler);
  addNewProductBtn.addEventListener("click", addNewProductBtnHandler);
  createRecordForm.addEventListener("submit", createRecordFormHandler);
  recordGroup.addEventListener("click",recordGroupHandler)
  checkoutBtn.addEventListener("click",checkoutHandler)
};

export default listener;
