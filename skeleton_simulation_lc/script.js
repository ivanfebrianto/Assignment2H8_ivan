let InputName = document.querySelector("#InputName");
let DisplayName = document.querySelector("#DisplayName");
let InputRole = document.querySelector("#InputRole");
let DisplayRole = document.querySelector("#DisplayRole");
let InputAge = document.querySelector("#InputAge");
let DisplayAge = document.querySelector("#DisplayAge");
let InputAvail = document.querySelector("#InputAvail");
let DisplayAvail = document.querySelector("#DisplayAvail");
let InputLoc = document.querySelector("#InputLoc");
let DisplayLoc = document.querySelector("#DisplayLoc");
let InputExp = document.querySelector("#InputExp");
let DisplayExp = document.querySelector("#DisplayExp");
let InputEmail = document.querySelector("#InputEmail");
let DisplayEmail = document.querySelector("#DisplayEmail");

const toggleEditBtn = () => {
  const displayForm = document.querySelector("#biodata-form");
  if (displayForm.classList.contains("hidden")) {
    displayForm.classList.remove("hidden");
  } else {
    displayForm.classList.add("hidden");
  }

  InputName.value = DisplayName.textContent;
  InputRole.value = DisplayRole.textContent;
  InputAge.value = DisplayAge.textContent;
  InputAvail.value = DisplayAvail.textContent;
  InputExp.value = DisplayExp.textContent;
  InputLoc.value = DisplayLoc.textContent;
  InputEmail.value = DisplayEmail.textContent;
};

const submitBtn = (event) => {
  event.preventDefault();
  DisplayName.textContent = InputName.value;
  DisplayRole.textContent = InputRole.value;
  DisplayAge.textContent = InputAge.value;
  DisplayAvail.textContent = InputAvail.value;
  DisplayExp.textContent = InputExp.value;
  DisplayLoc.textContent = InputLoc.value;
  DisplayEmail.textContent = InputEmail.value;
};
