import { addNewProductBtnHandler } from "./inventory";
import { createRecordFormHandler, recordGroupHandler } from "./record";
import {
  addNewProductBtn,
  closeSidebarBtn,
  createRecordForm,
  manageInventoryBtn,
  recordGroup,
} from "./selectors";
import { closeSidebarBtnHandler, manageInventoryBtnHandler } from "./้handlers";

const listener = () => {
  manageInventoryBtn.addEventListener("click", manageInventoryBtnHandler);
  closeSidebarBtn.addEventListener("click", closeSidebarBtnHandler);
  addNewProductBtn.addEventListener("click", addNewProductBtnHandler);
  createRecordForm.addEventListener("submit", createRecordFormHandler);
  recordGroup.addEventListener("click",recordGroupHandler)
};

export default listener;
