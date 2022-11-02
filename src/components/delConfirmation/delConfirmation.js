import "./delConfirmation.css";
import * as domController from "../../domController/domController";

const createDelConfirmationUI = (app, type, obj, objUI) => {
  const container = document.createElement("div");
  const confirmationMsg = document.createElement("p");
  const btnsContainer = document.createElement("div");
  const noBtn = document.createElement("button");
  const yesBtn = document.createElement("button");

  container.classList.add("del-confirmation-container", "flex-column", "center");

  confirmationMsg.classList.add("del-confirmation-msg");
  confirmationMsg.innerText = "Confirm Delete?";

  btnsContainer.classList.add("del-confirmation-btns-container", "flex", "center");

  noBtn.classList.add("del-confirmation-no-btn");
  noBtn.innerText = "NO";
  noBtn.addEventListener("pointerup", () => {
    removeContainer();
  })

  yesBtn.classList.add("del-confirmation-yes-btn");
  yesBtn.innerText = "YES";
  yesBtn.addEventListener("pointerup", () => {
    if (type === "todo") {
      app.removeFromTodosArr(obj.getId());
      console.log(app.getTodosArr());
      // Also remove from project object's todosArr
    } else if (type === "project") {
      app.removeFromProjectsArr(obj.getId());
      console.log(app.getProjectsArr());
    }
    objUI.remove();
    removeContainer();
  })

  function removeContainer() {
    container.remove();
    domController.getAppContainer().classList.remove("disabled");
  }

  btnsContainer.append(noBtn, yesBtn);
  container.append(confirmationMsg, btnsContainer);

  return container;
}

export { createDelConfirmationUI };